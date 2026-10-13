# Factory Engineering Portal

This repository contains the proposed public documentation site for Factory Engineering.

The portal is a static, read-only presentation. It does not authorize engineering work and does not connect to the private control repository.

## Local preview

1. Create a Python environment.
2. Install `requirements.txt`.
3. Run `mkdocs serve` from the repository root.
4. Open the local URL printed by MkDocs.

Run `mkdocs build --strict` before you propose a portal update.

The source guide at the repository root is an IDE attachment. `.gitignore` excludes that original file. The reviewed copy is under `docs/guide/`.

## Presentation files

The product repository exports only allowlisted Markdown and JSON content into the portal's `docs/` tree. The portal owns the presentation layer:

- `mkdocs.yml`: theme, navigation, and Markdown extensions.
- `docs/stylesheets/extra.css`: colors, typography, status badges, cards, and diagram panels.
- `docs/javascripts/diagrams.js`: the "Expand" control that opens a diagram at full size.
- `docs/assets/favicon.svg`: the site icon.

Pages can use these classes: `fe-badge` with `fe-badge--accepted`, `--limited`, `--exception`, `--demo`, `--pending`, or `--planned`; `fe-meta` for a metadata list; `fe-phase` for a phase card; `fe-lead` for an introduction paragraph; and `fe-swatch--source`, `--control`, `--agent`, `--verify`, `--publish`, `--infra`, or `--human` inside `fe-legend`.

## Publication status

This is a local draft. The public GitHub repository, Pages configuration, and publisher App are not configured. Do not publish these files until the owner approves the exact public content and external settings.
