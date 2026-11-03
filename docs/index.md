---
hide:
  - navigation
  - toc
---

<div class="fe-hero" markdown>

<span class="fe-eyebrow">Governed AI engineering</span>

# Factory Engineering

<p class="fe-lead">Factory Engineering is a governed workflow for engineering work with AI agents. The MVP is a control plane that takes an approved request to a verified draft pull request. People approve the work, review the result, and keep merge authority.</p>

[Watch the MVP demo](updates/2026-11-02-mvp-demo-v1.md){ .md-button .md-button--primary }
[See project status](status.md){ .md-button }

</div>

The engineering problem is trust. An AI agent can make a useful change, but its own report cannot prove that the change is correct or safe to publish.

Factory separates agent work from trusted checks. People keep authority to review, merge, and deploy.

## MVP Demo v1

Two recorded videos show the MVP on a small demo app with one deliberate bug. A label on each shot says whether it is live, a recorded real run, or a scripted safety test.

### Part 1 — From an issue to a verified draft pull request

Three use cases: a successful run, a review that requests changes, and a scripted change outside the allowed paths that Factory refuses.

<video controls preload="metadata" style="width:100%" poster="https://github.com/mikara89/factory-engineering-portal/releases/download/demo-v1-2026-11-02/factory-demo-v1-part1-poster.png" src="https://github.com/mikara89/factory-engineering-portal/releases/download/demo-v1-2026-11-02/factory-demo-v1-part1.mp4"></video>

### Part 2 — Experiments, scores, and the advisory judge

How two runs of the same task are compared, and how a second model gives advice after the review scores are locked.

<video controls preload="metadata" style="width:100%" poster="https://github.com/mikara89/factory-engineering-portal/releases/download/demo-v1-2026-11-02/factory-demo-v1-part2-poster.png" src="https://github.com/mikara89/factory-engineering-portal/releases/download/demo-v1-2026-11-02/factory-demo-v1-part2.mp4"></video>

Read the [Demo v1 update](updates/2026-11-02-mvp-demo-v1.md) for each step and for the limits of the demo.

## What the MVP does

<div class="fe-steps" markdown>

1. Imports a GitHub issue as a work item. Intake stays manual.
2. Lets a triage agent draft a work request with requirements, checks, and allowed paths. The owner approves the request.
3. Shows the exact attempt, base commit, and money limit before each live model call. The owner confirms it.
4. Runs a coding agent in an isolated container that can change only the allowed paths.
5. Runs the build, tests, acceptance tests, and a browser check outside the agent's control.
6. Refuses a candidate that changes files outside the allowed paths, even when all checks pass.
7. Gives the reviewer the diff, screenshots, and a verdict for each requirement. The reviewer scores the result and decides: approve, request changes, or reject.
8. Starts a new attempt from the requested changes when the reviewer asks for them.
9. Opens a draft pull request with exactly the verified files after approval. Nothing merges by itself.

</div>

The MVP also compares runs in experiments and offers an advisory judge. The judge gives advice only. It never decides a requirement, approves a run, or publishes a change.

## Current result

!!! success "MVP Demo v1 recorded on 2 November 2026"

    The demo shows an issue reaching a verified draft pull request, a second attempt after requested changes, and a refused out-of-scope change. Read the [MVP status](status.md#mvp) for each milestone.

!!! warning "Limits of the MVP result"

    The demo uses one small app with one deliberate bug. The reviews in the videos were done by Claude Code at the owner's request, not by an independent person. Time savings are not established. The experiment scores are agent scores and not blind. The judge's calibration and benefit are not accepted. No pull request in the demo was merged, and nothing was deployed.

!!! abstract "Earlier phases"

    Phases 0 to 5A tested the workflow with hosted runners and protected verification. Phase 5A stopped incomplete: technical feasibility was demonstrated within the tested scope, but comparative benefit over Baseline was not demonstrated. See [earlier phases](status.md#earlier-phases).

## Explore

<div class="grid cards" markdown>

-   :material-play-box-outline: **[MVP Demo v1](updates/2026-11-02-mvp-demo-v1.md)**

    The two videos, the use cases, and the limits.

-   :material-clipboard-check-outline: **[Project status](status.md)**

    MVP milestones, earlier phases, and remaining limitations.

-   :material-map-marker-path: **[Roadmap](roadmap.md)**

    The remaining MVP work and later goals.

-   :material-book-open-page-variant: **[Simple Guide](guide/simple-guide.md)**

    The Factory Engineering architecture guide in plain language.

-   :material-sitemap-outline: **[Architecture](architecture/overview.md)**

    Logical boundaries, deployment, trust, and C4 views.

</div>

## People keep the final decision

Factory can prepare and verify a proposal. A person reviews the draft pull request and decides whether to merge it. Deployment also remains a human decision.
