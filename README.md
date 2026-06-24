# Universo do Cafe

Site educacional gratuito sobre cafe, barismo, metodos de preparo, origens, glossario, quizzes e simuladores.

## Rodar localmente

```bash
pnpm install
pnpm run dev
```

O Vite abre em `http://127.0.0.1:5173/`.

## Build

```bash
pnpm run build
pnpm run build:routes
```

O comando `build:routes` cria paginas fisicas dentro de `dist/` para o GitHub Pages responder rotas profundas com HTTP 200.

## Publicacao

O deploy acontece pelo GitHub Actions em todo push para `main`.

URL publica:
`https://diogojp202.github.io/CoffeeStation/`

Arquivos de descoberta:

- Sitemap: `https://diogojp202.github.io/CoffeeStation/sitemap.xml`
- Robots: `https://diogojp202.github.io/CoffeeStation/robots.txt`
- Manifest: `https://diogojp202.github.io/CoffeeStation/site.webmanifest`

## Search Console

1. Abra o Google Search Console e crie uma propriedade do tipo `Prefixo do URL`.
2. Use exatamente `https://diogojp202.github.io/CoffeeStation/`.
3. Verifique a propriedade. Se o Google entregar um arquivo `googleXXXXXXXX.html`, coloque esse arquivo em `public/`, rode build, commit e push.
4. Envie o sitemap `https://diogojp202.github.io/CoffeeStation/sitemap.xml`.
5. Depois do primeiro rastreamento, confira cobertura, paginas indexadas e consultas de pesquisa.

## Analytics opcional

O site nao carrega analytics por padrao. Para ativar no GitHub Pages, configure uma ou ambas as variaveis em `Settings > Secrets and variables > Actions > Variables`:

- `VITE_GA_MEASUREMENT_ID`: ID do GA4, por exemplo `G-XXXXXXXXXX`.
- `VITE_PLAUSIBLE_DOMAIN`: dominio configurado no Plausible.

Localmente, copie `.env.example` para `.env` e preencha as mesmas variaveis.

Eventos ja instrumentados:

- Page view por rota.
- Video carregado.
- Progresso de estudo marcado/desmarcado.
- Quiz enviado.
- Diagnostico de espresso alterado.
- Comparador de metodos usado.
