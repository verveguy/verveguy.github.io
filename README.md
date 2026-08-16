# verveguy.github.io

The root page for [v3rv.com](https://v3rv.com) — a portfolio index of open-source
projects and tools, served via GitHub Pages from this repo.

## What lives where

This is the **user Pages repo** for the `verveguy` account, so the `CNAME` here binds
`v3rv.com` to it — and, importantly, every *project* Pages site under the same account
inherits that domain. The root page is an index over things that already live beneath it:

| URL | Served from |
| --- | --- |
| `v3rv.com/` | this repo (`master`, root) |
| `v3rv.com/liminis-context-graph/` | `verveguy/liminis-context-graph` (`main/docs`) |
| `v3rv.com/concept-maps/` | `verveguy/concept-maps` (`main`) |
| `v3rv.com/idd/` | `verveguy/idd` (`main`) |
| `v3rv.com/max/` | this repo — resume redirect |

Fabrik is deliberately *not* hosted here: it lives under the Handarbeit brand at
[fabrik.handarbeit.io](https://fabrik.handarbeit.io), and the index links out to it.

Adding a new project page means enabling Pages on that repo — no change is needed here
beyond a link.

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

The page is a single self-contained `index.html`: no build step, no dependencies, no
external fonts or scripts.

## Deploy

Pushing to `master` publishes to GitHub Pages.

## DNS

Apex (`v3rv.com`) — four A records pointing at GitHub Pages:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

`www` subdomain — CNAME to `verveguy.github.io`. HTTPS is enforced; the certificate
covers both `v3rv.com` and `www.v3rv.com`.

## History

Before 2026-08 this page was a WebGL "sakura" petal animation (© 2022 Anand Davaasuren,
MIT, from [CodePen](https://codepen.io/at80/pen/tqdmv)) with no content. That animation
and its `script.js` / `style.css` / `license.txt` were removed when the page became a
portfolio index; they remain in git history.
