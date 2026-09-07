# Plano de Migração

## Levantamento inicial

Fontes já consultadas:

- `https://etraction.com.br/`
- `https://etraction.com.br/nova-home/`
- `https://etraction.com.br/lgpd/`

Dados públicos reaproveitados:

- Mais de 70 clientes ativos.
- Mais de R$ 50 milhões investidos.
- Mais de R$ 1 bilhão em vendas.
- Mais de 100 e-commerces atendidos.
- CNPJ `35.225.690/0001-61`.
- Endereço em Rio do Sul, Santa Catarina.
- Logos de clientes exibidos na home atual.
- Depoimentos associados a David Saraça, Luiz Paulo e Ricardo, sem texto integral até validação.
- Referências a Google Premier Partner, Meta Partner, TikTok, Pinterest e Edrone.

## Pendências antes de publicar

1. Rastrear todas as URLs públicas do WordPress.
2. Exportar status HTTP, title, meta description, H1, canonical e links internos.
3. Identificar páginas com tráfego, backlinks e posições orgânicas.
4. Preservar URLs de posts sempre que possível.
5. Criar redirecionamentos 301 individuais para URLs alteradas.
6. Validar telefone, WhatsApp, horário de atendimento e Perfil da Empresa no Google.
7. Validar métricas com data de referência.
8. Validar autorização de clientes, selos e depoimentos.
9. Remover `noindex` de páginas definitivas.
10. Monitorar 404, cobertura e indexação no Google Search Console.

## Redirecionamentos iniciais

| Origem | Destino | Status | Observação |
| --- | --- | --- | --- |
| `/nova-home/` | `/` | 301 | Página legado encontrada. |
| `/lgpd/` | `/lgpd/` | 200 | Preservar URL atual. |
| `/blog/[slug-atual]/` | `/` ou solução relacionada | 301 | O blog saiu do novo site. Rastrear cada post e decidir o destino por URL. |

## Blog legado

O blog não faz parte do novo site. Antes de publicar é preciso decidir, por URL, entre:

1. Manter o conteúdo no WordPress atual em `/blog/`, fora do novo site.
2. Redirecionar cada post para a página de solução relacionada.
3. Redirecionar para a home quando não houver destino equivalente.

Rastreie todos os posts com tráfego e backlinks antes de escolher. Redirecionar tudo para a home em bloco derruba os sinais orgânicos acumulados.
