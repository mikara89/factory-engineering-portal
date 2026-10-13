# Factory Engineering Portal

This repository contains the proposed public documentation site for Factory Engineering.

The portal is a static, read-only presentation. It does not authorize engineering work and does not connect to the private control repository.

## Local preview

1. Create a Python environment.
2. Install `requirements.txt`.
3. Start the same self-hosted Kroki image used by the Pages workflow in a separate terminal:

   ```powershell
   podman run --rm --name factory-engineering-kroki -p 8001:8000 yuzutech/kroki:0.32.1@sha256:22055fcf1d088349ee18d2643bc18b7704a39d09280fdee5b1cbde7a99bd5528
   ```

4. In the first terminal, set the local Kroki URL and run MkDocs:

   ```powershell
   $env:KROKI_SERVER_URL = "http://localhost:8001"
   .\.venv\Scripts\python.exe -m mkdocs serve
   ```

5. Open the local URL printed by MkDocs. The Kroki container renders C4 diagrams during the build. The published site contains local SVG files and does not call Kroki.

Kroki uses host port 8001 because `mkdocs serve` uses port 8000. If Kroki is not running, the build fails. This stops a broken diagram from reaching the site. Do not point `KROKI_SERVER_URL` at the public kroki.io server: it would send unpublished content to a third party.

Run `mkdocs build --strict` before you propose a portal update.

The source guide at the repository root is an IDE attachment. `.gitignore` excludes it. The reviewed copy is `docs/guide/simple-guide.md`.

## Presentation files

The `factory-engineering` repository exports only allowlisted Markdown and JSON content into this portal's `docs/` tree. This repository owns the presentation layer:

- `mkdocs.yml`: theme, navigation, and Markdown extensions.
- `docs/stylesheets/extra.css`: colors, typography, status badges, cards, and diagram panels.
- `docs/javascripts/diagrams.js`: the "Expand" control that opens a Mermaid or C4-PlantUML diagram at full size.
- `docs/assets/favicon.svg`: the site icon.

Pages can use these class groups:

- Badge classes: `fe-badge`, `fe-badge--accepted`, `fe-badge--limited`, `fe-badge--exception`, `fe-badge--demo`, `fe-badge--pending`, and `fe-badge--planned`.
- Content classes: `fe-meta` for metadata lists, `fe-phase` for phase cards, and `fe-lead` for introductory text.
- Legend classes: `fe-legend`, `fe-swatch--source`, `fe-swatch--control`, `fe-swatch--agent`, `fe-swatch--verify`, `fe-swatch--publish`, `fe-swatch--infra`, and `fe-swatch--human`.

## Publication status

The public repository `mikara89/factory-engineering-portal` exists. GitHub Pages, the portal publisher App, and a branch ruleset for `main` are not configured.

This repository is public. A branch, pull request, or diff is visible as soon as someone pushes it, also when the pull request is a draft. Approve the exact public content in the private product repository before you push it here. The portal pull request controls deployment to Pages. It does not control disclosure.

Get owner approval before you merge to `main`, because the merge publishes the site. Get separate approval before you change external settings.
