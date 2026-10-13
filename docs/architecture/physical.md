# Physical architecture and deployment

The target deployment uses GitHub repositories, GitHub Actions, a disposable agent sandbox, and GitHub Pages. It adds no portal API or database.

## Repository boundaries

| Repository | Visibility | Responsibility |
|---|---|---|
| `mikara89/factory-engineering` | Private | Product code, architecture source, reviewed public content, public status, and a manually started portal proposal workflow. |
| `mikara89/factory-engineering-control` | Private | Trusted workflows, approvals, ledger, checkpoint, protected verification, and recovery decisions. |
| `mikara89/factory-engineering-portal` | Proposed public repository | Static documentation, public status, roadmap, demonstrations, updates, and GitHub Pages source. |

The portal does not read from the control repository. The product publisher App must be scoped to the portal repository. It needs `contents:write` and `pull-requests:write` to create a branch and draft PR. A portal branch ruleset must block direct App pushes to `main` and require human review. That rule is not configured in this local draft.

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

When enabled, the Pages workflow will build the site from the portal repository's reviewed `main` branch. A pull request must be reviewed and merged before its content can appear on the site. The branch ruleset must prevent the publisher App from pushing directly to `main`.

The public portal is a presentation layer. It does not call a service, start an agent, or send a command to either Factory repository.
