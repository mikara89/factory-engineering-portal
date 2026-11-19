# Roadmap

<p class="fe-lead">The roadmap records approved direction. It does not promise delivery dates or completion percentages.</p>

Reviewed 19 November 2026. Current work is the MVP control plane. The latest demo is [Factory Demo v4](updates/2026-11-16-factory-demo-v4.md), recorded on 16 November 2026.

See [project status](status.md#mvp) for each MVP milestone, accepted results, and evidence limits.
The [structured snapshot](data/status.json) is legacy proof-of-concept (POC) data. It records the status of Phases 0 to 7.
The [Legacy POC page](legacy/index.md) keeps the history of the earlier phases.

## MVP — remaining work

| Item | Goal | Open evidence |
|---|---|---|
| M2b — QA agent | Revise generated acceptance tests. The QA agent runs its tests on the base code within its budget, then tests again. | Three tries produced no valid refactor test set. The owner closed the QA experiment without a measured benefit. |
| M5e — Advisory Judge | Show Judge risks only with checked evidence, or remove them, before the Judge supports reviews. | Only 1 of 13 Judge risks held. The score agreement rests on four runs. |
| Simulated-operator benchmark | Run the deferred 18-trial live comparison of Factory with a direct coding agent. An AI-simulated developer operates both. | The owner marked a first live review pilot Failed on 15 November 2026. The 18 trials need a new numeric budget and exact-attempt approval. |
| Live Node.js flow | Complete triage, QA tests, coding, review, and draft publication together on a Node.js repository. | Planned after Demo v4. These steps have not completed together on Node.js. |
| Setup agent | Verify live setup proposals. | Only scripted responses verify it. Target execution, publication, and registration stay deferred. |
| M5b — Benchmark | Revisit the owner-operated time comparison after the MVP. First fix the review timer and the approval-time measure. Then compare against baseline tasks. | The evidence does not establish time savings. |
| M5c — Deferred checks | Run the owner usability, effort, and browser zoom checks. | The effort benefit is Unknown. |
| M5f — Improvement experiment | Repeat the experiment only with repeated runs for each task. | No profile version improved the full passes. |
| Read-only submodules | Support read-only submodules. The owner paused this work. | Factory still refuses submodules. |

Each live model call needs a separate owner approval with a numeric budget. This roadmap grants no execution, spending, publication, merge, or deployment approval.

## Product direction — a plan, not delivered features

!!! abstract "A plan, not delivered features"

    This section describes a plan. The owner agreed the direction on 14 November 2026.
    The direction does not approve every item. Factory adds a capability when the capability shows real value.

Position: **Factory Engineering — AI-powered engineering, connected to your existing tools.**

- Factory is one application with modular capabilities, not several separate applications.
- AI engineering execution stays the core.
- Factory is not meant to replace Jira, Azure DevOps, GitHub, Terraform, or CI/CD systems. It would work across them.
- GitHub is the first integration. Jira and Azure DevOps support depends on user demand.

| Step | Planned scope | Intended outcome |
|---|---|---|
| Now — strengthen the core | Finish critical user-experience improvements for coding work. Make multi-part workflows more reliable. Keep the main branch deployable. Validate real end-to-end work. Measure the reduction in human effort. Keep the execution and budget protections. | A proven AI engineering system with measurable value. |
| Next — light business collaboration | Add minimal sign-in and permissions. Add business-friendly work item views. Support requirement clarification and decisions. Show a Needs you page for each role. Add progress summaries. Add one end-to-end external issue integration. | Business stakeholders and engineers work on the same work. Factory does not copy their project management tools. |
| Later — more engineering capabilities | Let each project choose its capabilities. Add engineering work types. Write and review infrastructure as code (IaC), with safe checks through external tools. Plan changes across repositories only if real projects need it. | Factory automates more engineering work on the same execution and review base. |
| Later — delivery integration | Show release readiness and environments. Track versions and deployment status. Link to external deployment approvals. Keep release evidence. | Traceable work from requirement to delivered change, without a deployment engine of its own. |
| When demand appears — organization scale | Add more enterprise integrations, broader authorization, cross-project views, and organization controls. Consider external plugins. | Larger organizations, with a maintainable architecture. |

The order of the two Later steps may change with customer demand.
These steps are product steps. They are separate from the Legacy POC phases.

<p class="fe-label">Boundaries of the plan</p>

- IaC comes first as writing and review. Factory would not manage cloud resources. Terraform state, cloud credentials, and provisioning stay with established infrastructure platforms.
- Release coordination would use existing deployment systems.
- Factory serves one owner today. Use by several people needs sign-in and permissions first.

<p class="fe-label">Parallel tracks</p>

- **Hosting.** Factory is local-first and ready for the cloud. A first organizational pilot needs sign-in, durable storage, and a separate protected execution worker. Managed hosting and scale follow real needs. The owner has not chosen a cloud provider.
- **Evaluation.** Reuse the existing replay, comparison, Judge, and evidence tools. Add a small set of reviewed user-journey scenarios for triage and requirement clarification. Try scripted and AI-simulated users in isolated test setups, within separately approved limits. AI-simulated results are not human feedback. They do not show saved effort.
- **Evaluation approval.** On 14 November 2026, the owner approved the benchmark protocol and scenarios, and one paired feasibility check that uses scripted or fake execution first. The 18 live-model trials need separate authorization and a new numeric budget. No live-model spending is approved.

<p class="fe-label">Rules that stay</p>

- Humans approve consequential AI actions.
- Budgets, execution boundaries, and evidence stay.
- Untrusted work runs in isolated containers.
- The server checks permissions. A project setting never grants permission by itself.
- Factory should not become another project management system, a source-control host, a CI/CD platform, a container-orchestration product, or an infrastructure provisioning platform.
- Factory should not become a plugin marketplace without demonstrated demand.

<p class="fe-label">Not decided yet</p>

- The first business integration beyond GitHub. Real pilot users decide it.
- The identity provider.
- The production database.
- The first IaC technology.
- The first deployment integration.
- The cloud hosting platform.

## Decision boundaries

!!! abstract "What the roadmap does not claim"

    - A planned item is not an implemented capability.
    - Fake only and Offline checks do not show that a feature worked on a real task.
    - Local tests do not establish hosted verification.
    - A draft pull request is not merged code.
    - Milestone acceptance does not authorize another execution, model call, publication, merge, or deployment.
    - People retain merge and deployment authority.
