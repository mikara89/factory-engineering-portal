# Project status

<dl class="fe-meta">
  <dt>Reviewed</dt>
  <dd>2 November 2026</dd>
  <dt>Current work</dt>
  <dd>MVP control plane</dd>
  <dt>Current status</dt>
  <dd><span class="fe-badge fe-badge--demo">Demonstrated</span> MVP Demo v1 recorded; evaluation milestones remain open.</dd>
</dl>

This page is the main readable status reference. It summarizes approved project evidence. It does not publish private logs, protected verification material, or internal accounting.

[`data/status.json`](data/status.json) is the structured snapshot of Phases 0 to 7. Its schema has no MVP milestones yet, so the MVP status is on this page only.

## MVP

The MVP is a control plane that people operate in a browser. It imports a GitHub issue, lets a triage agent draft a work request, runs a coding agent in an isolated container, runs trusted checks, and supports the review. After approval, it opens a draft pull request with exactly the verified files.

Watch the [MVP Demo v1 videos](updates/2026-11-02-mvp-demo-v1.md) for a recorded example.

| Milestone | Status | What it covers |
|---|---|---|
| M1 — Runs, triage, and browser checks | <span class="fe-badge fe-badge--accepted">Done</span> | Start runs, draft work requests, and check browser behavior. |
| M2 — Review and evidence storage | <span class="fe-badge fe-badge--accepted">Done</span> | Review each requirement, score the result, and keep the evidence. |
| M2b — QA agent | <span class="fe-badge fe-badge--pending">In progress</span> | Browser reports work. Generated acceptance tests are not built. |
| M3 — GitHub | <span class="fe-badge fe-badge--accepted">Done</span> | Import an issue and, after owner approval, open a draft pull request. Intake stays manual. |
| M4 — Daily use | <span class="fe-badge fe-badge--exception">Done with exception</span> | Closed without meeting its exit. The time-saving question moved to M5b. |
| M5a — Feedback loop | <span class="fe-badge fe-badge--accepted">Done</span> | Real tasks reach a decided review in the browser only. |
| M5b — Benchmark | <span class="fe-badge fe-badge--planned">Paused</span> | Time savings are not established. The comparison will be revisited after the MVP. |
| M5c — Parts and design decisions | <span class="fe-badge fe-badge--exception">Done with exception</span> | Split a request into parts. Usability and effort measurements are deferred. |
| M5d — Runtimes and comparison | <span class="fe-badge fe-badge--pending">In progress</span> | Several coding runtimes and blind A/B experiments work. The comparison evidence is limited. |
| M5e — Advisory judge | <span class="fe-badge fe-badge--pending">In progress</span> | Live judge attempts work. Calibration and benefit are not accepted. |
| M5f — Improvement experiment | <span class="fe-badge fe-badge--planned">Planned</span> | A measured, bounded self-improvement experiment. |

<p class="fe-label">MVP limitations</p>

- Time savings are not established.
- The recorded experiment scores are agent scores and not blind. Independent human review is not claimed.
- The advisory judge is not calibrated. Its advice does not decide anything.
- Issue intake, publication, and merge stay manual. No production readiness is claimed.

## Earlier phases

Phases 0 to 5A tested the workflow before the MVP. Separate owner decisions record Phase 3 acceptance with limitations and Phase 4 acceptance with an operational exception and validation limits.

<p class="fe-label">Last phase</p>

<div class="fe-phase" markdown>

### Phase 5A — Same-runtime Factory evaluation <span class="fe-badge fe-badge--pending">Stopped — incomplete</span> { #phase-5a data-toc-label="Phase 5A — Same-runtime Factory evaluation" }

**Status: Stopped — incomplete.** Further paid Phase 5A execution has stopped.
The evaluation tested whether Factory produced better engineering outcomes than a basic Baseline run using the same selected runtime.

<p class="fe-label">What the evaluation showed</p>

Technical feasibility was demonstrated within the tested scope: the operator-local route collected results, ran protected checks and recorded cleanup.
Feasibility shows that the tested workflow can run. Comparative value requires evidence that its added work produces worthwhile improvements.
Factory's comparative benefit over Baseline was not demonstrated.

| Original evaluation accounting | Attempts |
|---|---:|
| Planned | 20 |
| Consumed, including rejected or invalid outputs | 18 |
| Linked CORRECT outcomes | 15 |
| C2 collection rejections | 2 |
| I2 Factory INVALID_OUTPUT | 1 |
| A1 blocked and unexecuted | 2 |

CORRECT outcomes come from protected technical checks, recorded human scoring, or both, according to the task.
Human scoring used owner self-review with fixture-author overlap. Independent human review is not claimed.

The six completed **flat-json-v2** pairs produced six CORRECT outcomes for each treatment.
Here, flat-json-v2 names the revised shared output-format instructions used for those pairs.
The earlier **v1** group remains separate. The overall counts do not form one comparable performance group.
Supplemental C2 **v2/v2.1** experiments remain separate and do not replace original outcomes.

<p class="fe-label">Why execution stopped</p>

The available evidence did not demonstrate benefit that justified further paid execution or Factory's added complexity.
Original-cohort and treatment-specific actual billed costs remain **UNKNOWN**. Measured human engineering effort also remains **UNKNOWN**.
Comparative cost and human-effort acceptance thresholds cannot be assessed as PASS.
A1's required independent review and implementation approval remain unmet. Neither A1 attempt ran, and neither counts as an observed failure.
An approved scheduling exception allowed A2 and A3 to proceed while A1 remained blocked.

Phase 5A remains incomplete. No full acceptance, production readiness, general autonomous remediation or proven productivity improvement is claimed.
Historical evidence and outcomes are preserved. Any follow-up evaluation needs a separate decision.

</div>

<p class="fe-label">Accepted and demonstrated phases</p>

| Phase | Status |
|---|---|
| [0 — Runtime and integration assessment](#phase-0) | <span class="fe-badge fe-badge--demo">Demonstrated</span> |
| [1a — Synthetic pipeline](#phase-1a) | <span class="fe-badge fe-badge--accepted">Accepted</span> |
| [1b — Live-agent engineering](#phase-1b) | <span class="fe-badge fe-badge--exception">Closed with exception</span> |
| [2 — Issue to verified draft PR](#phase-2) | <span class="fe-badge fe-badge--limited">Accepted with limitations</span> |
| [3 — CI diagnosis and repair](#phase-3) | <span class="fe-badge fe-badge--limited">Accepted with limitations</span> |
| [4 — Alert investigation and approvals](#phase-4) | <span class="fe-badge fe-badge--limited">Accepted with limitations</span> |

<div class="fe-phase" markdown>

### Phase 0 — Runtime and integration assessment <span class="fe-badge fe-badge--demo">Demonstrated</span> { #phase-0 data-toc-label="Phase 0 — Runtime and integration assessment" }

The assessment is complete. It selected GitHub Actions with pinned DeepSeek Harness for the tested configuration. The public snapshot labels this bounded result Demonstrated.

<p class="fe-label">Limitations</p>

- Boundary and cancellation coverage remained partial.
- The diagnosis rubric was visible to the candidate.
- This is not a production-readiness claim.

</div>

<div class="fe-phase" markdown>

### Phase 1a — Synthetic pipeline <span class="fe-badge fe-badge--accepted">Accepted</span> { #phase-1a data-toc-label="Phase 1a — Synthetic pipeline" }

The synthetic pipeline gate was accepted and closed.

<p class="fe-label">Limitations</p>

- Acceptance applies to its recorded synthetic scope.

</div>

<div class="fe-phase" markdown>

### Phase 1b — Live-agent engineering <span class="fe-badge fe-badge--exception">Closed with exception</span> { #phase-1b data-toc-label="Phase 1b — Live-agent engineering" }

The phase closed under an explicit owner exception.

<p class="fe-label">Limitations</p>

- The exception does not establish successful completion of the original live protocol or full runtime qualification.
- Actual provider billing remains unknown.

</div>

<div class="fe-phase" markdown>

### Phase 2 — Issue to verified draft PR <span class="fe-badge fe-badge--limited">Accepted with limitations</span> { #phase-2 data-toc-label="Phase 2 — Issue to verified draft PR" }

A deterministic change reached an open draft PR with the exact verified candidate. An owner-started continuation reused retained candidate objects after the original publisher failed.

<p class="fe-label">Limitations</p>

- No Phase 2 model call, automatic issue forwarding, uninterrupted issue-to-PR execution, merge, or deployment was demonstrated.
- The publisher failure cause remains unknown.

See the [Phase 2 update](updates/2026-10-13-phase-2-demonstration.md) for the full account.

</div>

<div class="fe-phase" markdown>

### Phase 3 — CI diagnosis and repair <span class="fe-badge fe-badge--limited">Accepted with limitations</span> { #phase-3 data-toc-label="Phase 3 — CI diagnosis and repair" }

**Status: Accepted with limitations.** The owner accepted the bounded proof on 15 October 2026.
The owner accepted the uncertain-report outcome; successful intermittent-failure classification remains unqualified.

<p class="fe-label">Completed hosted work</p>

- A protected verifier reproduced a real compiler failure and verified a narrow repair in one controlled .NET application profile.
- The exact verified candidate reached a draft PR. The owner subsequently accepted and merged the repair.
- A supported infrastructure diagnosis required no source change.
- A comparison retained Unknown because execution conditions differed. It produced no unsupported repair.

<p class="fe-label">Local checks</p>

Retained-state replay checks passed locally, including a future-time check.
Those checks do not establish new hosted execution or verification of the merged product commit.

<p class="fe-label">Remaining limitations</p>

- Successful intermittent-failure classification remains incomplete.
- The proof used owner-started workflows and a deterministic repair in one controlled application profile.
- Live-model qualification, automatic event forwarding, general autonomous remediation, and production readiness are not established.
- No new SDK verification of the merged product commit or deployment is claimed.
- Acceptance grants no new execution, publication, merge, or deployment authority.

</div>

<div class="fe-phase" markdown>

### Phase 4 — Alert investigation and approvals <span class="fe-badge fe-badge--limited">Accepted with limitations</span> { #phase-4 data-toc-label="Phase 4 — Alert investigation and approvals" }

**Status: Accepted with limitations.** The owner accepted the bounded synthetic PoC on 18 October 2026 with an explicit operational timing exception.

<p class="fe-label">Completed hosted work</p>

- Native comment creation, edits, restoration and unavailability were qualified with authenticated report history.
- Synthetic firing, repeated firing and resolved notifications updated one linked investigation; unsupported diagnosis remained Unknown without engineering authority.
- Two distinct unedited owner comments authorized one protected repair and separate exact candidate publication.
- Protected checks reproduced the original route failure and passed the one-line repair, with container and SDK cleanup confirmed.
- The exact verified candidate was published as a draft PR without rebuilding. The owner separately approved and merged it.

<p class="fe-label">Remaining limitations</p>

- One publication-accounting invocation missed its approved deadline. Acceptance carries that exception without retroactively authorizing the violation.
- The proof uses synthetic input, deterministic repair and owner-started stages; production telemetry and live-model use remain unqualified.
- Full live negative and active-cancellation coverage remains unqualified despite passing local tests.
- Native comment reads do not eliminate API check-to-write races. Unavailability does not prove deletion or grant approval.
- Reserved accounting allowances remain explicit in private evidence. Actual billed usage remains unknown.
- Merge is separate from deployment. No production remediation, unattended operation or next-phase authority is claimed.

</div>

## Evidence links

The Phase 3 acceptance report and Phase 4 evidence are retained in private repositories. This page publishes reviewed outcome summaries only.
The MVP Demo v1 videos are public release files of the portal repository. The owner approved their publication on 2 November 2026. The MVP evidence records stay in private repositories.
Private issues, pull requests, workflow runs, control records, logs, and internal accounting are not exported. No private evidence URLs are included.

The versioned machine-readable snapshot is available at [`data/status.json`](data/status.json). Its public field contract is in [`data/status.schema.json`](data/status.schema.json).
