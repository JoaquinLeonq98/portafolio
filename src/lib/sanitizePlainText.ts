/** Elimina caracteres típicos de inyección y recorta longitud; el correo se envía solo como texto plano. */
export function sanitizePlainText(input: string, maxLen: number): string {
  let s = input.replace(/\u0000/g, '').replace(/[<>]/g, '');
  s = s.replace(/\r\n/g, '\n').trim();
  if (s.length > maxLen) s = s.slice(0, maxLen);
  return s;
}
