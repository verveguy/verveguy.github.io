// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// v3rv.com is the user Pages site, so it serves from the domain root. Project
// sites still under the verveguy account inherit this domain as a subpath. The
// Liminis components moved to the liminisapp org on 2026-10-04 and are served
// from docs.liminis.app; public/404.html redirects their old v3rv.com paths.
export default defineConfig({
  site: 'https://v3rv.com',

  integrations: [
    starlight({
      title: 'V3RV',

      // No search. This site is a single page, so Pagefind had one document to
      // index and nothing useful to discriminate between — a search box that
      // can only ever return the page you are already on. The documentation
      // sites keep theirs, where there is something to find.
      pagefind: false,

      // Our own public/404.html replaces Starlight's: it redirects the paths of
      // project sites that moved off this domain, deep links included.
      disable404Route: true,
      description: "Brett Adam's workbench: Fabrik, Liminis, Concept Maps, and other things built, mostly in the open.",

      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/verveguy' }
      ],

      // Deliberately stock: the project docs sites run Starlight's default
      // theme, and the point of this site is to belong to that set rather than
      // to announce itself as different.
      customCss: ['./src/styles/custom.css'],

      sidebar: [
        {
          label: 'Projects',
          items: [
            { label: 'Overview', slug: 'index' },
            { label: 'Fabrik', link: 'https://fabrik.handarbeit.io' },
            { label: 'Liminis', link: '/liminis/' },
            { label: 'Concept Maps', link: '/concept-maps/' }
          ]
        },
        {
          label: 'Liminis components',
          items: [
            { label: 'Context Graph', link: 'https://docs.liminis.app/liminis-context-graph/' },
            { label: 'Editor', link: 'https://docs.liminis.app/liminis-editor/' },
            { label: 'Diagrams', link: 'https://docs.liminis.app/liminis-diagrams/' }
          ]
        },
        {
          label: 'Odds and ends',
          items: [
            { label: 'claude-topics', link: 'https://github.com/verveguy/claude-topics' },
            { label: 'IDD character builder', link: '/idd/' },
            { label: 'tana-helper', link: 'https://github.com/verveguy/tana-helper' }
          ]
        }
      ]
    })
  ]
})
