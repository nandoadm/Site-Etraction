# Site institucional Etraction

Novo site institucional e comercial da Etraction, agência especializada em crescimento, performance e estratégia para e-commerce.

## Stack

- Astro estático
- TypeScript
- GSAP e ScrollTrigger para animações editoriais
- Embla Carousel para os carrosséis
- ApexCharts (import dinâmico) para o dashboard de resultados
- Lucide (`lucide-static`) para ícones, embutidos em build time
- CSS moderno com tokens, Grid, Flexbox e responsividade

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
npm run photos   # regenera os recortes de fotos de assets/ para public/
```

## Variáveis

Use `.env.example` como base:

- `PUBLIC_SITE_URL`
- `PUBLIC_GTM_ID`
- `PUBLIC_GA4_ID`
- `PUBLIC_CRM_ENDPOINT`

## Conteúdo

Dados editáveis e pendências ficam em `src/data/site.ts`. Informações não validadas permanecem marcadas como placeholder ou a confirmar, sem inventar cases, cargos, depoimentos, números ou certificações.

## Fotos do time

As fotos originais ficam em `assets/`. O script `scripts/prepare-photos.mjs`
gera os recortes padronizados em `public/assets/team/` (retrato 4:5 e avatar
quadrado), usando detecção de foco do sharp e recortes manuais quando a
detecção erra o enquadramento.

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
- Definir os 301 do blog legado do WordPress (o blog saiu do novo site).
- Completar cases com dados e autorizações reais.
- Configurar CRM, consentimento de cookies e analytics.
- Rodar Lighthouse, checar acessibilidade e validar dados estruturados.
