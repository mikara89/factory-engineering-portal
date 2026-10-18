---
hide:
  - navigation
  - toc
---

<div class="fe-hero" markdown>

<span class="fe-eyebrow">Governed AI engineering</span>

# Factory Engineering

<p class="fe-lead">Factory Engineering is a governed workflow for engineering work with AI agents. It checks what work may start, limits the agent's access, and verifies a fixed candidate before it can be proposed as a draft pull request.</p>

[Read the simple guide](guide/simple-guide.md){ .md-button .md-button--primary }
[See project status](status.md){ .md-button }

</div>

The engineering problem is trust. An AI agent can make a useful change, but its own report cannot prove that the change is correct or safe to publish.

Factory separates agent work from trusted checks. People keep authority to review, merge, and deploy.

## What Factory does

<div class="fe-steps" markdown>

1. Receives an authorized work request.
2. Gives an agent a bounded task and an isolated work area.
3. Freezes the proposed change as an immutable candidate.
4. Runs independent checks against that exact candidate.
5. Allows a trusted publisher to create a draft pull request after the required checks and approvals.
6. Retains evidence so a reviewer can understand the result.

</div>

Factory Engineering is not a stand-alone AI coding agent. The agent is one untrusted part of a wider workflow. Trusted control, verification, and publication remain outside the agent's workspace.

## Current result

!!! success "Phase 2 is accepted with limitations."

    One deterministic issue produced a draft pull request with the exact verified commit. An owner-started continuation published retained candidate objects after the original publisher job failed.

!!! warning "Limits of the Phase 2 result"

    That demonstration did not use a model call. It did not demonstrate automatic issue forwarding, one uninterrupted issue-to-PR execution, merged code, deployment, or production readiness. The source issue and draft PR are in a private repository, so this portal draft contains no public evidence link.

!!! success "Phase 3: Accepted with limitations"

    The owner accepted the bounded proof on 15 October 2026. Hosted results include a verified narrow repair, exact draft PR publication, and an infrastructure diagnosis without source changes. The owner subsequently merged the repair.

!!! warning "Limits of the Phase 3 result"

    The uncertain-report outcome was accepted. Successful intermittent-failure classification remains unqualified because execution conditions differed. Local retained-state replay checks do not establish new SDK verification of the merged commit. No live-model qualification, general autonomous remediation, or deployment is claimed.

!!! success "Phase 4: Accepted with limitations"

    The owner accepted the bounded synthetic PoC on 18 October 2026. Hosted investigation, two native owner approvals, protected original reproduction and a verified one-line repair reached an exact draft PR. The owner separately approved and merged the repair.

!!! warning "Limits of the Phase 4 result"

    Acceptance carries a late-accounting operational exception. The proof uses synthetic input and deterministic repair. Full live negative/active-cancellation coverage remains unqualified despite passing local tests. No production monitoring, live-model qualification, deployment or next-phase authority is claimed.

See [project status](status.md) for the reviewed 18 October 2026 snapshot and remaining limitations.

## What is experimental or planned

The architecture guide describes CI repair, alert investigation, approval, and recovery flows. Qualification applies only to the bounded results on the status page. Broader flows remain target architecture.

## Explore

<div class="grid cards" markdown>

-   :material-book-open-page-variant: **[Simple Guide](guide/simple-guide.md)**

    The complete Factory Engineering architecture guide in plain language.

-   :material-sitemap-outline: **[Architecture](architecture/overview.md)**

    Logical boundaries, deployment, trust, and C4 views.

-   :material-clipboard-check-outline: **[Project status](status.md)**

    Accepted results, current work, and remaining limitations.

-   :material-map-marker-path: **[Roadmap](roadmap.md)**

    Accepted, current, and future capabilities.

-   :material-play-box-outline: **[Demonstration](demonstrations/phase-2.md)**

    The Phase 2 engineering story and its limitations.

</div>

## People keep the final decision

Factory can prepare and verify a proposal. A person reviews the draft pull request and decides whether to merge it. Deployment also remains a human decision.
