# Sitemap

## Rotas principais

- `/`
- `/servicos/`
- `/servicos/cro-para-ecommerce/`
- `/servicos/meta-ads-para-ecommerce/`
- `/servicos/google-ads-para-ecommerce/`
- `/servicos/crm-para-ecommerce/`
- `/servicos/email-marketing-para-ecommerce/`
- `/servicos/marketplace/`
- `/servicos/design-para-ecommerce/`
- `/servicos/sucesso-do-cliente/`
- `/cases/`
- `/cases/[slug]/`
- `/sobre/`
- `/blog/`
- `/blog/[slug]/`
- `/contato/`
- `/carreiras/`
- `/politica-de-privacidade/`
- `/lgpd/`

## Arquivos técnicos

- `/robots.txt`
- `/sitemap-index.xml`, gerado por `@astrojs/sitemap`
- `/site.webmanifest`
- `/404/`, gerado a partir de `src/pages/404.astro`

## Observações de publicação

- Placeholders editoriais ficam em `noindex`.
- O sitemap filtra slugs de demonstração como `case-em-validacao` e `conteudo-a-migrar`.
- Posts reais do WordPress podem ser gerados estaticamente durante o build usando `PUBLIC_WORDPRESS_API_URL`.
