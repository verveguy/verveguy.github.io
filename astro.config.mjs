// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// v3rv.com is the user Pages site, so it serves from the domain root. Every
// project site under the verveguy account inherits this domain as a subpath,
// which is why the sidebar can link to them as if they were part of one set —
// because as far as the browser is concerned, they are.
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
      description: "Brett Adam's workbench: Fabrik, Liminis, Concept Maps, and other things built, mostly in the open.",

      social: {
        github: 'https://github.com/verveguy'
      },

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
            { label: 'Context Graph', link: '/liminis-context-graph/' },
            { label: 'Editor', link: '/liminis-editor/' },
            { label: 'Diagrams', link: '/liminis-diagrams/' }
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
