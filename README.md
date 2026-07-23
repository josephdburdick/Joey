# JOEY

Portfolio of Joseph Burdick — interactive design & development, Brooklyn NY.

Built with [Astro](https://astro.build): fully static, zero client-side
JavaScript (except a few lines for the project reel's prev/next buttons), and
deployed to GitHub Pages for free on every push to `master`.

The 2016 React/webpack/Firebase version of this site is preserved on the
[`v2016`](https://github.com/josephdburdick/Joey/tree/v2016) branch.

## Develop

```sh
npm install
npm run dev      # local dev server
npm run build    # static build to dist/
npm run preview  # preview the production build
```

## Content

Projects are markdown files in `src/content/projects/` with frontmatter
(`order`, `title`, `agency`, `tags`, `color`, `logo`). Imagery lives in
`public/projects/<name>/` — `bg.jpg`, a logo, and a `slides/` directory whose
contents are picked up automatically (with `@2x` retina versions when present).

## Deploy

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages
(Settings → Pages → Source: **GitHub Actions**). The site is served at
`https://josephdburdick.github.io/Joey/`. To use a custom domain instead, add
it in the Pages settings and set `base: '/'` in `astro.config.mjs`.
