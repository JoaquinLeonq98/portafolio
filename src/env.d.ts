/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly RESEND_API_KEY?: string;
  readonly CONTACT_TO_EMAIL?: string;
  readonly CONTACT_FROM_EMAIL?: string;
  /** Dominio Resend para inbound (*.resend.app) */
  readonly RESEND_INBOUND_DOMAIN?: string;
  /** Parte local opcional (ej. contacto → contacto@dominio) */
  readonly RESEND_INBOUND_LOCAL_PART?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
