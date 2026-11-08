# verveguy.github.io

The root of [v3rv.com](https://v3rv.com) — a portfolio index of open-source
projects and tools, built with [Astro](https://astro.build) and
[Starlight](https://starlight.astro.build).

## Why Starlight

This site began as the root of a single host. Every *project* Pages site under
the `verveguy` account inherits this repo's custom domain, so each project was a
path on `v3rv.com` rather than a separate destination, and running the same
framework as the component docs sites made the whole thing read as one set
instead of a front page bolted onto unrelated docs.

Most of those projects have since moved to their own domains, so that argument no
longer holds the way it did — but the conclusion outlives it. The sites this one
links into still run Starlight, so a visitor crossing from here to
`docs.liminis.app` meets the same furniture on the other side. Matching by
construction rather than by imitation is what makes the crossing feel like
navigation rather than a departure.

Still served from this domain:

| URL | Served from |
| --- | --- |
| `v3rv.com/` | this repo |
| `v3rv.com/idd/` | `verveguy/idd` |
| `v3rv.com/safari-history/` | `verveguy/safari-history` (Family Filter) |
| `v3rv.com/max/` | this repo — resume redirect |

Several projects have since moved off this domain. Their repos left the
`verveguy` account, so GitHub no longer serves them here; this repo keeps their
old paths alive with redirects:

| Old URL | Now at | Source repo |
| --- | --- | --- |
| `v3rv.com/liminis/` | `liminis.app` | `shadoworg/liminis-notes` |
| `v3rv.com/liminis-context-graph/` | `docs.liminis.app/liminis-context-graph/` | `liminisapp/liminis-context-graph` |
| `v3rv.com/liminis-editor/` | `docs.liminis.app/liminis-editor/` | `liminisapp/liminis-editor` |
| `v3rv.com/liminis-diagrams/` | `docs.liminis.app/liminis-diagrams/` | `liminisapp/liminis-diagrams` |
| `v3rv.com/concept-maps/` | `models.liminis.app` (Liminis Models) | `shadoworg/liminis-models` |

Each old root has a stub at `public/<path>/index.html`; deeper links are caught
by `public/404.html`, which keeps the rest of the path. A project that moves
needs an entry in both.

Versions are kept close to the sites this one links into, but they live in
separate repos that update on their own schedule, so a patch or two of drift is
normal and does not change how the pages read.

Fabrik is deliberately not hosted here: it lives under the Handarbeit brand at
[fabrik.handarbeit.io](https://fabrik.handarbeit.io), and the index links out.

Adding a project means enabling Pages on that repo and adding a sidebar entry in
`astro.config.mjs`.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
```

## Deploy

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds the site
and publishes it to GitHub Pages. Pages is configured to deploy **from a GitHub
Actions workflow**, not from a branch — changing that setting back to a branch
would serve the raw repository instead of the built site.

### Two things that fail silently

`public/CNAME` and `public/max/` are copied into `dist/` by Astro. If either
stops being copied, the custom domain is dropped or the resume 404s, and neither
announces itself. The deploy workflow asserts both exist before publishing.

## DNS

Apex (`v3rv.com`) — four A records pointing at GitHub Pages:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

`www` — CNAME to `verveguy.github.io`. HTTPS is enforced; the certificate covers
both `v3rv.com` and `www.v3rv.com`.

## History

Until 2026-08 this was a WebGL "sakura" animation with no content, then a
hand-built single-file portfolio page. Both are in git history.
