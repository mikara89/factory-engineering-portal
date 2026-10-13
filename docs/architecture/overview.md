# Architecture overview

Factory Engineering is a governance workflow around an AI coding agent. It separates work intake, trusted decisions, untrusted agent execution, independent verification, and publication.

The colored boxes below are logical responsibilities. They are not separate hosted services. GitHub Actions supplies workflow execution. The separate control repository stores trusted rules and durable state.

```mermaid
flowchart TB
    subgraph SOURCES["Work sources · request only"]
        Issue["GitHub issue"]
        CI["Completed CI failure"]
        Alert["Monitoring alert"]
        Manual["Owner start"]
    end

    subgraph TRUST["Trusted control"]
        Policy["Check identity, scope,<br/>authority, and state"]
        Prepare["Prepare bounded work"]
        Freeze["Validate scope and<br/>freeze candidate"]
        Verify["Protected verifier<br/>checks exact commit"]
        Publish["Publisher checks authority<br/>and proposes a draft PR"]
    end

    subgraph UNTRUSTED["Untrusted execution"]
        Agent["AI agent and tools<br/>in disposable sandbox"]
    end

    Engineer["Engineer<br/>reviews, merges, and deploys"]

    Issue --> Policy
    CI --> Policy
    Alert --> Policy
    Manual --> Policy
    Policy --> Prepare --> Agent
    Agent -->|"untrusted candidate"| Freeze
    Freeze --> Verify
    Verify -->|"pass and current authority"| Publish
    Publish -->|"engineering draft PR"| Engineer

    PublicSource["Reviewed public content<br/>in product repository"] --> PortalWorkflow["Manual portal proposal workflow<br/>allowlist and deterministic preparation"]
    PortalWorkflow -->|"portal draft PR"| PortalReview["Human review and merge"]
    PortalReview --> Portal["Public portal<br/>read-only presentation"]
    Portal --> Pages["GitHub Pages"]

    classDef source fill:#dbeafe,stroke:#2563eb,color:#0f172a;
    classDef control fill:#ede9fe,stroke:#7c3aed,color:#1f2937;
    classDef agent fill:#ffedd5,stroke:#ea5800,color:#431407;
    classDef verify fill:#dcfce7,stroke:#16a34a,color:#052e16;
    classDef publish fill:#fee2e2,stroke:#dc2626,color:#450a0a;
    classDef infra fill:#e5e7eb,stroke:#6b7280,color:#111827;
    classDef human fill:#fef3c7,stroke:#d97706,color:#111827;

    class Issue,CI,Alert,Manual source;
    class Policy,Prepare control;
    class Agent agent;
    class Freeze,Verify verify;
    class Publish publish;
    class PublicSource source;
    class PortalWorkflow control;
    class PortalReview,Engineer human;
    class Portal,Pages infra;
```

## Color legend

<div class="fe-legend">
  <span class="fe-swatch--source">🔵 Blue — work sources</span>
  <span class="fe-swatch--control">🟣 Purple — trusted control</span>
  <span class="fe-swatch--agent">🟠 Orange — untrusted execution</span>
  <span class="fe-swatch--verify">🟢 Green — validation and verification</span>
  <span class="fe-swatch--publish">🔴 Red — privileged publication</span>
  <span class="fe-swatch--infra">⚪ Gray — infrastructure</span>
  <span class="fe-swatch--human">🟡 Yellow — human review</span>
</div>

## Demonstrated behavior

Phase 2 reached an exact-commit engineering draft PR through an owner-started retained-candidate continuation. It used a deterministic change and no model call. Automatic forwarding and an uninterrupted end-to-end execution remain unqualified.

The portal proposal workflow is separate from engineering execution. It reads reviewed public content from the product repository. It uses a portal-only App to open a draft content PR. The portal does not connect to Factory Control.

See the [status](../status.md) and [Phase 2 update](../updates/2026-10-13-phase-2-demonstration.md).
