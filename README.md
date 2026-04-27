# Twig Docs

An unofficial VitePress reader for the Twig 3.x documentation.

The generated documentation under `docs/3.x/` is upstream-owned content synced from [`twigphp/Twig`](https://github.com/twigphp/Twig/tree/3.x/doc). Do not hand-edit generated pages. Update the converter in `scripts/sync-twig-docs.ts`, then regenerate the docs.

## Development

```sh
npm ci
npm run sync
npm run dev
```

## Scripts

- `npm run dev` starts the VitePress dev server.
- `npm run build` builds the static site for deployment.
- `npm run sync` clones `twigphp/Twig@3.x`, converts `doc/**/*.rst` into VitePress Markdown, regenerates sidebar data, and updates upstream metadata.
- `npm run check` verifies generated docs are current and then builds the site.

## Upstream Sync

The sync pipeline is intentionally review-based:

1. A scheduled GitHub Action runs daily.
2. The Action regenerates docs from Twig's `3.x` branch.
3. If generated output changes, it opens a pull request on `sync/twig-docs-3.x`.
4. A reviewer checks the diff before merging and deploying.

The current upstream commit is tracked in `upstream/twig-3.x.json`.

## Deployment

This project is ready for Vercel. Use the default install command (`npm ci`) and build command (`npm run build`). VitePress writes the production output to `docs/.vitepress/dist`.
