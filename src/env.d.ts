/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL: string;
  readonly PUBLIC_GTM_ID?: string;
  readonly PUBLIC_GA4_ID?: string;
  readonly PUBLIC_CRM_ENDPOINT?: string;
  readonly PUBLIC_WORDPRESS_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
}
