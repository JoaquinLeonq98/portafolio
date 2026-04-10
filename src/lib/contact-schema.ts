import { z } from 'zod';

import { sanitizePlainText } from './sanitizePlainText';

export const contactPayloadSchema = z.object({
  name: z
    .string()
    .transform((s) => sanitizePlainText(s, 120))
    .pipe(z.string().min(1, 'Nombre requerido').max(120)),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .max(254)
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, { message: 'Email no válido' }),
  message: z
    .string()
    .transform((s) => sanitizePlainText(s, 4000))
    .pipe(z.string().min(10, 'El mensaje es demasiado corto').max(4000)),
  /** Honeypot: debe ir vacío */
  website: z
    .string()
    .max(200)
    .optional()
    .transform((s) => sanitizePlainText(s ?? '', 200)),
});

export type ContactPayload = z.infer<typeof contactPayloadSchema>;
