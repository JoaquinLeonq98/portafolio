import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { ZodError } from 'zod';

import { contactPayloadSchema } from '../../lib/contact-schema';
import { allowContactSubmission } from '../../lib/rate-limit';

export const prerender = false;

function clientIp(request: Request): string {
  const xf = request.headers.get('x-forwarded-for');
  if (xf) {
    const first = xf.split(',')[0]?.trim();
    if (first) return first;
  }
  return request.headers.get('x-real-ip')?.trim() || 'unknown';
}

export const POST: APIRoute = async ({ request }) => {
  if (request.headers.get('content-type')?.split(';')[0]?.trim() !== 'application/json') {
    return new Response(JSON.stringify({ ok: false, error: 'Content-Type inválido' }), {
      status: 415,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ ok: false, error: 'JSON inválido' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let data;
  try {
    data = contactPayloadSchema.parse(body);
  } catch (e) {
    if (e instanceof ZodError) {
      const msg = e.issues.map((x: { message: string }) => x.message).join(' ');
      return new Response(JSON.stringify({ ok: false, error: msg }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    throw e;
  }

  if (data.website.trim().length > 0) {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const ip = clientIp(request);
  if (!allowContactSubmission(ip)) {
    return new Response(
      JSON.stringify({ ok: false, error: 'Demasiados envíos. Intenta más tarde.' }),
      { status: 429, headers: { 'Content-Type': 'application/json' } },
    );
  }

  const apiKey = String(import.meta.env.RESEND_API_KEY ?? '').trim();
  const to = String(import.meta.env.CONTACT_TO_EMAIL ?? '').trim();
  const from = String(import.meta.env.CONTACT_FROM_EMAIL ?? '').trim();

  if (!apiKey || !to || !from) {
    return new Response(JSON.stringify({ ok: false, error: 'Contacto no configurado en el servidor.' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const resend = new Resend(apiKey);
  const text = [
    `Nombre: ${data.name}`,
    `Email: ${data.email}`,
    '',
    'Mensaje:',
    data.message,
    '',
    `IP: ${ip}`,
  ].join('\n');

  try {
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: data.email,
      subject: `Portafolio: mensaje de ${data.name}`,
      text,
    });

    if (error) {
      console.error('[api/contact] Resend:', error.name, error.message);
      const publicMsg = import.meta.env.DEV
        ? `Resend: ${error.message} (${error.name})`
        : 'No se pudo enviar el mensaje en este momento. Por favor, inténtalo más tarde.';
      return new Response(JSON.stringify({ ok: false, error: publicMsg }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (e) {
    console.error('[api/contact]', e);
    const msg =
      import.meta.env.DEV && e instanceof Error
        ? `Error al llamar a Resend: ${e.message}`
        : 'Error inesperado al enviar el correo.';
    return new Response(JSON.stringify({ ok: false, error: msg }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
