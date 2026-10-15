# Project status

<dl class="fe-meta">
  <dt>Reviewed</dt>
  <dd>13 October 2026</dd>
  <dt>Current development phase</dt>
  <dd>Phase 3 — CI diagnosis and repair</dd>
  <dt>Current status</dt>
  <dd><span class="fe-badge fe-badge--planned">Planned</span> local proposal prepared; hosted proof and acceptance pending.</dd>
</dl>

This page summarizes approved project evidence. The private control ledger remains authoritative for execution and phase acceptance. This page publishes a short status only; it does not publish ledger events, checkpoints, protected verification material, or private logs.

## Current phase

<div class="fe-phase fe-phase--current" markdown>

### Phase 3 — CI diagnosis and repair <span class="fe-badge fe-badge--planned">Planned</span> { #phase-3 data-toc-label="Phase 3 — CI diagnosis and repair" }

**Status: Planned.** The local implementation proposal is prepared. Hosted proof and a separate acceptance decision remain pending.

The planned work covers a supported code repair, an infrastructure diagnosis, and a qualified intermittent report. Local or simulated results do not establish hosted acceptance.

</div>

## Accepted and demonstrated work

| Phase | Status |
|---|---|
| [0 — Runtime and integration assessment](#phase-0) | <span class="fe-badge fe-badge--demo">Demonstrated</span> |
| [1a — Synthetic pipeline](#phase-1a) | <span class="fe-badge fe-badge--accepted">Accepted</span> |
| [1b — Live-agent engineering](#phase-1b) | <span class="fe-badge fe-badge--exception">Closed with exception</span> |
| [2 — Issue to verified draft PR](#phase-2) | <span class="fe-badge fe-badge--limited">Accepted with limitations</span> |

<div class="fe-phase" markdown>

### Phase 0 — Runtime and integration assessment <span class="fe-badge fe-badge--demo">Demonstrated</span> { #phase-0 data-toc-label="Phase 0 — Runtime and integration assessment" }

The assessment selected GitHub Actions with pinned DeepSeek Harness for the tested configuration.

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

## Evidence links

The source issue, draft pull request, and control evidence are in private repositories. They are not public links. No private control URLs are included in this status snapshot.

The versioned machine-readable snapshot is available at [`data/status.json`](data/status.json). Its public field contract is in [`data/status.schema.json`](data/status.schema.json).
