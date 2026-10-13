# Factory Engineering Architecture: Simple Guide

<p class="fe-lead">The full guide explains the system with a factory analogy, an end-to-end example, logical components, trust boundaries, deployment, state, bounded loops, alert approvals, and a glossary.</p>

!!! info "Baseline and review date"

    It preserves the v1.8 architecture baseline. The status statements were reviewed on 13 October 2026. Read the callout at the start of the [full guide](simple-guide.md) to distinguish the target design from demonstrated behavior.

## Architecture at a glance

The AI agent works in an untrusted environment. Trusted components decide what work may start, check the candidate, and control publication. A person reviews the draft pull request.

The public portal presents approved documentation. It does not run work or read private control state.

<div class="grid cards" markdown>

-   :material-book-open-page-variant: **[Complete guide](simple-guide.md)**

    The factory analogy, one example from start to end, the parts of the system, and a glossary.

-   :material-sitemap-outline: **[Architecture overview](../architecture/overview.md)**

    A shorter view of the logical boundaries and the color legend.

</div>
