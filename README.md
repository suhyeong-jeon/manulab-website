# The Manu Lab — Quarto redesign

Local redesign based on https://manulab.info/ and its seven main sections.

## Preview and build

Open this directory in VS Code with the Quarto extension installed.

    quarto preview
    quarto render

The rendered website is in docs/. GitHub Pages publishes this directory on the main branch. See PUBLISHING.md for update instructions.

## Editing

- _quarto.yml: navigation, site language, global options.
- index.qmd: home page and highlighted papers.
- research.qmd: research overview and directions.
- team.qmd: profiles and alumni; update profile roles/destinations as needed.
- publication.qmd: publications, with a data-year attribute on each entry.
- tools.qmd: methods and article links.
- teaching.qmd: links to existing teaching resources.
- open-positions.qmd and contact.qmd: opportunities and contact information.
- styles.css: colors, typography, layout, responsive rules.
- site.js: publication search, year filter, reset, and empty state.
- _footer.html: shared contact footer.
- assets/people/: downloaded portraits from the original public lab website.
- assets/cell-network.svg: original conceptual illustration, not experimental data.

The publication controls enhance server-rendered content; all papers remain accessible when JavaScript is disabled. No web framework, database, or external font service is needed.

## Sources and corrections

Page content and contact information: https://manulab.info/ (accessed 2026-10-19).
The two malformed publication links were replaced with verified DOI links:

- DNA accessibility / enhancer activity: https://doi.org/10.1093/g3journal/jkad269 (2024 journal issue; 2023 advance publication).
- LucFlow: https://doi.org/10.1371/journal.pone.0292317.

Team roles and alumni destinations reflect the source page and should be reviewed before public deployment. Source PDFs and teaching materials remain linked to the existing site.
