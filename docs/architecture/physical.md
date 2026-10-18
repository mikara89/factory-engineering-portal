# Physical architecture and deployment

The deployment uses GitHub repositories, GitHub Actions, disposable engineering execution, and GitHub Pages. The engineering diagram includes target responsibilities beyond the qualified scope on the [status page](../status.md). The portal has no API or database.

## Repository boundaries

| Repository | Visibility | Responsibility |
|---|---|---|
| `mikara89/factory-engineering` | Private | Product code, architecture source, reviewed public content, public status, and a manually started portal proposal workflow. |
| `mikara89/factory-engineering-control` | Private | Trusted workflows, approvals, ledger, checkpoint, protected verification, and recovery decisions. |
| `mikara89/factory-engineering-portal` | Public | Static documentation, public status, roadmap, demonstrations, updates, and GitHub Pages source. |

The portal does not read from the control repository. The product workflow requests a portal-scoped App token with `contents:write` and `pull-requests:write`. The publisher creates a branch and draft PR. The active `protect-portal-main` ruleset requires a PR and one approval, with no bypass actors.

## Deployment view

```mermaid
flowchart LR
    subgraph ENGINEERING["Engineering work flow"]
        Product["Private product repository<br/>product code"]
        Control["Private control repository<br/>trusted policy and state"]
        Actions["Engineering Actions<br/>trusted workflow jobs"]
        Sandbox["Disposable agent sandbox<br/>untrusted commands"]
        Verifier["Protected verifier<br/>exact candidate checks"]
        ProductPR["Draft PR in product repository"]
        ProductReview["Human review, merge,<br/>and deployment decision"]

        Product --> Actions
        Control --> Actions
        Actions --> Sandbox
        Actions --> Verifier
        Verifier --> ProductPR
        ProductPR --> ProductReview
    end

    subgraph PUBLICATION["Public documentation flow"]
        PublicSource["Reviewed public source<br/>in product repository"]
        Proposal["Manual proposal workflow<br/>allowlist and preparation"]
        PortalRepo["Public portal repository<br/>reviewed Markdown and JSON"]
        Reviewer["Human content review and merge"]
        Pages["GitHub Pages<br/>static public site"]

        PublicSource --> Proposal
        Proposal -->|"draft PR only"| PortalRepo
        Reviewer --> PortalRepo
        PortalRepo -->|"merged main only"| Pages
    end

    classDef source fill:#dbeafe,stroke:#2563eb,color:#0f172a;
    classDef control fill:#ede9fe,stroke:#7c3aed,color:#1f2937;
    classDef agent fill:#ffedd5,stroke:#ea5800,color:#431407;
    classDef verify fill:#dcfce7,stroke:#16a34a,color:#052e16;
    classDef publish fill:#fee2e2,stroke:#dc2626,color:#450a0a;
    classDef infra fill:#e5e7eb,stroke:#6b7280,color:#111827;
    classDef human fill:#fef3c7,stroke:#d97706,color:#111827;

    class Product,PublicSource source;
    class Control,Actions,Proposal control;
    class Sandbox agent;
    class Verifier,ProductPR verify;
    class PortalRepo,Pages infra;
    class Reviewer,ProductReview human;
```

The two flows are separate. The portal proposal workflow reads only allowlisted public content. It does not read the control repository or receive engineering publication credentials.

## Pages publication

GitHub Pages is deployed. The Pages workflow builds PRs and builds and deploys pushes to `main` after merge. The active branch ruleset requires PR review and gives the publisher no bypass. Its required-status-check list does not currently include `build`.

This review controls the Pages deployment. It does not control disclosure. The portal repository is public, so a portal branch or draft PR is visible as soon as it is pushed. A person must approve the exact public content in the private product repository before the proposal workflow pushes it.

The public portal is a presentation layer. It does not call a service, start an agent, or send a command to either Factory repository.
