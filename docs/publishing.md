# Publicação

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

## Build de produção

```bash
npm run build
```

## Preview do build

```bash
npm run preview
```

## Variáveis

Copie `.env.example` para `.env` e configure somente valores confirmados:

- `PUBLIC_SITE_URL`
- `PUBLIC_GTM_ID`
- `PUBLIC_GA4_ID`
- `PUBLIC_CRM_ENDPOINT`
- `PUBLIC_WORDPRESS_API_URL`

## Homologação

Ambientes de homologação devem usar `noindex` por regra de infraestrutura. Antes da publicação, remover bloqueios de indexação e validar `robots.txt`, sitemap, canonical e tags sociais.

## Analytics e consentimento

GA4 e GTM só carregam após consentimento no banner local. Eventos previstos:

- `cta_click`, a conectar nos CTAs finais.
- `whatsapp_click`, após confirmação do número.
- `form_start`
- `form_submit`
- `case_view`, a conectar quando houver cases reais.
- `service_view`, a conectar se necessário.
- `partner_click`, após validação de parceiros.
- `talent_form_start`
- `talent_form_submit`
- `phone_click`
- `email_click`
