# Site institucional Etraction

Novo site institucional e comercial da Etraction, agência especializada em crescimento, performance e estratégia para e-commerce.

## Stack

- Astro estático
- TypeScript
- React apenas em ilhas isoladas
- React Three Fiber e Drei para a experiência 3D do hero
- GSAP e ScrollTrigger para animações editoriais
- CSS moderno com tokens, Grid, Flexbox e responsividade
- WordPress headless opcional para preservar o blog

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Variáveis

Use `.env.example` como base:

- `PUBLIC_SITE_URL`
- `PUBLIC_GTM_ID`
- `PUBLIC_GA4_ID`
- `PUBLIC_CRM_ENDPOINT`
- `PUBLIC_WORDPRESS_API_URL`

## Conteúdo

Dados editáveis e pendências ficam em `src/data/site.ts`. Informações não validadas permanecem marcadas como placeholder ou a confirmar, sem inventar cases, cargos, depoimentos, números ou certificações.

## Documentação

- `docs/sitemap.md`
- `docs/wireframes.md`
- `docs/design-system.md`
- `docs/migration-plan.md`
- `docs/validation-checklist.md`
- `docs/publishing.md`

## Atenção antes da publicação

- Confirmar telefone e WhatsApp oficial.
- Validar métricas com data de referência.
- Validar lista de clientes e autorização de uso de marca.
- Validar selos e parcerias oficiais.
- Migrar o blog real ou conectar WordPress headless.
- Completar cases com dados e autorizações reais.
- Configurar CRM, consentimento de cookies e analytics.
- Rodar Lighthouse, checar acessibilidade e validar dados estruturados.
