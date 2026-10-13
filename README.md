# Factory Engineering Portal

This repository contains the proposed public documentation site for Factory Engineering.

The portal is a static, read-only presentation. It does not authorize engineering work and does not connect to the private control repository.

## Local preview

1. Create a Python environment.
2. Install `requirements.txt`.
3. Run `mkdocs serve` from the repository root.
4. Open the local URL printed by MkDocs.

Run `mkdocs build --strict` before you propose a portal update.

The source guide at the repository root is an IDE attachment. `.gitignore` excludes it. The reviewed copy is `docs/guide/simple-guide.md`.

## Presentation files

The product repository exports only allowlisted Markdown and JSON content into the portal's `docs/` tree. The portal owns the presentation layer:

- `mkdocs.yml`: theme, navigation, and Markdown extensions.
- `docs/stylesheets/extra.css`: colors, typography, status badges, cards, and diagram panels.
- `docs/javascripts/diagrams.js`: the "Expand" control that opens a diagram at full size.
- `docs/assets/favicon.svg`: the site icon.

Pages can use these class groups:

- Badge classes: `fe-badge`, `fe-badge--accepted`, `fe-badge--limited`, `fe-badge--exception`, `fe-badge--demo`, `fe-badge--pending`, and `fe-badge--planned`.
- Content classes: `fe-meta` for metadata lists, `fe-phase` for phase cards, and `fe-lead` for introductory text.
- Legend classes: `fe-legend`, `fe-swatch--source`, `fe-swatch--control`, `fe-swatch--agent`, `fe-swatch--verify`, `fe-swatch--publish`, `fe-swatch--infra`, and `fe-swatch--human`.

## Publication status

These files are a local draft. The public GitHub repository, Pages configuration, and publisher App are not configured. Get owner approval before publishing the content. Get separate approval before changing external settings.
