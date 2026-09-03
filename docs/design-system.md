# Design System

## Tokens

Cores:

- Vermelho principal: `#E42921`
- Vermelho escuro: `#B91D18`
- Vermelho suave: `#FFF1F0`
- Preto base: `#111113`
- Preto secundário: `#27272A`
- Cinza texto: `#5F6067`
- Cinza borda: `#DEDEE3`
- Fundo alternativo: `#F6F6F8`
- Branco: `#FFFFFF`

Tipografia:

- Família principal: Manrope hospedada localmente em WOFF2.
- Pesos usados: 400 a 700.
- H1 desktop: `clamp(34px, 5vw, 64px)`.
- H2 desktop: `clamp(28px, 3.8vw, 44px)`.
- H3: `clamp(22px, 2vw, 28px)`.
- Texto comum: 16px a 18px conforme contexto.

Espaçamento:

- Largura máxima: 1180px.
- Margem lateral: `clamp(20px, 4vw, 64px)`.
- Espaçamento vertical de seção: `clamp(48px, 7vw, 92px)`.
- Gap interno padrão: 16px a 32px.

Raios:

- Cards: 8px.
- Controles: 10px.
- Painéis maiores: 14px.

Movimento:

- Microinterações: 180ms.
- Entradas de seção: 550ms.
- Números: 900ms.
- Respeito a `prefers-reduced-motion`.

## Componentes

- `Header.astro`: navegação desktop, menu de soluções e menu mobile.
- `Footer.astro`: institucional, serviços, contato, redes e cookies.
- `Hero.astro`: copy comercial, CTAs, métricas e experiência visual.
- `GrowthScene.tsx`: ilha React Three Fiber carregada com `client:visible`.
- `MetricsDashboard.astro`: números animados e gráfico editorial.
- `ServicesOverview.astro`: lista de serviços com links internos.
- `Methodology.astro`: timeline progressiva.
- `CommercialForm.astro`: formulário comercial com UTM e consentimento.
- `TalentForm.astro`: banco de talentos com validação e limite de arquivo.
- `ConsentBanner.astro`: consentimento antes de GA4 e GTM.

## Regras editoriais aplicadas

- Sem rótulos decorativos acima dos títulos.
- Sem frases de contraste genérico.
- Sem depoimentos, cases ou cargos inventados.
- Sem carrosséis rápidos.
- Sem dependência de JavaScript para conteúdo principal.
- Sem smooth scroll artificial que sequestre a rolagem.
