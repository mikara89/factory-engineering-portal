# Project status

<dl class="fe-meta">
  <dt>Reviewed</dt>
  <dd>19 November 2026</dd>
  <dt>Current work</dt>
  <dd>MVP control plane</dd>
  <dt>Current status</dt>
  <dd><span class="fe-badge fe-badge--demo">Demonstrated</span> MVP Demo v4 recorded on 16 November 2026. Time savings and independent review remain open.</dd>
</dl>

This page is the main readable status reference. It summarizes approved project evidence. It does not publish private logs, protected verification material, or internal accounting.

[`data/status.json`](data/status.json) is the legacy proof-of-concept (POC) snapshot of Phases 0 to 7. It was last reviewed on 23 October 2026. Its schema has no MVP milestones, so the MVP status is on this page only.

The earlier POC phases are on the [Legacy POC page](legacy/index.md).

## MVP

The MVP is a control plane that people operate in a browser. It imports a GitHub issue. A triage agent drafts a work request. A coding agent runs in an isolated container. Trusted checks verify the result, and the owner reviews it. After approval, the MVP opens a draft pull request with exactly the verified files.

A QA agent can write acceptance tests. A Judge agent can give advice. Neither agent decides.

Watch the latest demo: [Factory Demo v4](updates/2026-11-16-factory-demo-v4.md). An AI Simulated User operated Factory on one real task. The review stays pending, and nothing was published. The Demo v4 page links the earlier recordings.

On 6 November 2026, the owner accepted M5d, M5e, M5f, and M5i with limitations. The owner asked for a revision of M2b and kept M5b paused.

| Milestone | Status | What it covers |
|---|---|---|
| M1 — Runs, triage, and browser checks | <span class="fe-badge fe-badge--accepted">Done</span> | Start runs, draft work requests, and check browser behavior. |
| M2 — Review and evidence storage | <span class="fe-badge fe-badge--accepted">Done</span> | Review each requirement, score the result, and keep the evidence. |
| M2b — QA agent | <span class="fe-badge fe-badge--pending">In progress</span> | Browser reports work. The QA agent also writes acceptance tests from the approved request, and the owner reviews each test. Factory runs each new test set on the base code before approval. In the refactor experiment, three tries produced no valid test set, so the owner asked for a revision. The owner closed the QA experiment without a measured benefit. |
| M3 — GitHub | <span class="fe-badge fe-badge--accepted">Done</span> | Import an issue and, after owner approval, open a draft pull request. Intake stays manual. |
| M4 — Daily use | <span class="fe-badge fe-badge--exception">Done with exception</span> | Closed without meeting its exit. The time-saving question moved to M5b. |
| M5a — Feedback loop | <span class="fe-badge fe-badge--accepted">Done</span> | Three real tasks reached a decided review in the browser. The owner did not read the database or the gateway's usage record. |
| M5b — Benchmark | <span class="fe-badge fe-badge--planned">Paused</span> | The owner paused the time comparison as incomplete on 30 October 2026. The evidence does not establish a time saving. The owner kept it paused on 6 November 2026. |
| M5c — Parts and design decisions | <span class="fe-badge fe-badge--exception">Done with exception</span> | Split a request into parts, with a design decision first when needed. Owner usability, effort, and browser zoom checks are deferred. The effort benefit is Unknown. |
| M5d — Runtimes and comparison | <span class="fe-badge fe-badge--limited">Accepted with limitations</span> | Several coding runtimes work. The owner compared two runtimes blind on five replayed tasks, with one run each. The default runtime passed 5 of 5. The second passed 4 of 5. A third runtime was not tested. |
| M5e — Advisory Judge | <span class="fe-badge fe-badge--limited">Accepted with limitations</span> | Judge scores were within one point of the owner's scores in 14 of 15 cases, on four runs. Only 1 of 13 Judge risks held. The owner asked for a revision of the risks. The Judge advises. It does not decide. |
| M5f — Improvement experiment | <span class="fe-badge fe-badge--limited">Accepted with limitations</span> | One bounded self-improvement experiment ran on 12 replayed tasks. No profile version improved the full passes. No profile change went into the product. |
| M5i — Design assessment | <span class="fe-badge fe-badge--limited">Accepted with limitations</span> | Triage records a short codebase and design assessment. The owner approves it with the request. The owner rated 3 of 3 assessments sound. The approval effort is Unknown. |

<p class="fe-label">Changes since Demo v3</p>

Demo v4 Part 1 shows eight changes since Demo v3. Each row gives the verification status of one change.

- **Real** means a real container run or a real task checked the feature. Real does not show production readiness, independent human review, or time savings.
- **Fake only** means the feature is merged, but only fake execution or saved results checked it.
- **Offline checks** means scripted checks with simulated data.

Fake only and Offline checks do not show that a feature worked on a real task.

| Change | Verification | What it shows and what it does not show |
|---|---|---|
| Repository onboarding | Fake only | A scripted setup agent proposes setup files for a repository. Factory checks them. No setup command ran on a target repository. No live setup proposal has been verified. |
| Triage answer choices | Real | Each open question offers suggested answers. Nine live triage conversations showed and accepted the answer buttons. |
| QA tests | Fake only | Each failing test gets a reason. The owner reviews each test against its requirement. Demo v4 used one live QA test set on one task. An AI Simulated User reviewed it. |
| Judge loop | Real | The Judge scores a candidate on four dimensions. It can start a revision inside limits that the owner approves. It never approves, publishes, or merges. One live loop stopped in round 2 because the Judge answer broke the report format. No live revision has fixed a real defect yet. |
| Review | Offline checks | If a human check has no evidence, the review stays pending and saves notes. Scripted checks verified this. The checks do not measure correct model decisions or human effort. |
| Simpler pages | Offline checks | A new menu, and the Needs you, Work items, Run, and Review pages. Scripted browser checks used simulated data. A post-merge review found defects, and the fixes were checked offline. |
| Work items with parts | Real for parts. Fake only for the split review. | In a live test on a demo app, all five parts of one feature reached acceptance and merge. The parts were a design decision, two API parts, and two page parts. An agent operated the screens. The test recorded 13 bugs and 12 usability problems. One work item by default, with an owner deployability check before a split, has only fake checks. |
| Platform | Real | Docker works as a second container engine, but only scripted runs used it. No live Docker gateway with two networks has run. A CI job uses real containers. Monorepo project scopes and .NET 11 are in place. Podman stays the default engine. |

<p class="fe-label">MVP limitations</p>

- The evidence does not establish time savings. Human effort is mostly Unknown.
- Demo v3 and Demo v4 used an agent as the operator, at the owner's request. Their reviews are agent reviews. Independent human review is not claimed.
- The owner's blind scores come from small samples. The runtime comparison used five tasks with one run each.
- The Judge advises only. In the owner's test, 1 of 13 Judge risks held. The scores agreed within one point in 14 of 15 cases, on four runs.
- No live Judge revision has fixed a real defect yet.
- The owner has not measured a benefit from the QA agent. In the refactor experiment, it wrote no valid test set in three tries.
- No self-improvement version improved the full passes.
- On 15 November 2026, the owner marked a live pilot of review decisions as Failed. Two agent reviewers accepted a candidate with missing evidence.
- On 16 November 2026, a live retest left the candidate pending in both attempts. A scoring defect failed Factory's result in that retest. The scoring fix was checked offline only.
- A full live flow on a Node.js repository has not completed.
- Factory serves one owner today. Use by several people needs sign-in and permissions.
- Issue intake, publication, and merge stay manual. No production readiness is claimed.

## Earlier phases

The proof of concept (POC) tested the workflow in Phases 0 to 5A before the MVP. On 19 November 2026, the phase results and their limits moved to the [Legacy POC page](legacy/index.md#earlier-phases) without change.

## Evidence links

The demo videos are public release files of the portal repository. The owner approved each release separately. The MVP evidence records stay in private repositories.
Private issues, pull requests, workflow runs, control records, logs, and internal accounting are not exported. No private evidence URLs are included.

The versioned machine-readable POC snapshot is available at [`data/status.json`](data/status.json). Its public field contract is in [`data/status.schema.json`](data/status.schema.json).
