# Phase 2 — First verified issue-to-draft-PR demonstration

<dl class="fe-meta">
  <dt>Date</dt>
  <dd>13 October 2026</dd>
  <dt>Status</dt>
  <dd><span class="fe-badge fe-badge--limited">Accepted with limitations</span></dd>
</dl>

<p class="fe-lead">Phase 2 produced one controlled issue-to-draft-PR result. The accepted route used an owner-started continuation to publish a retained candidate after the original publisher job failed.</p>

## What was attempted

The issue requested `GET /items/{id:int}` for a small .NET API fixture. The endpoint returns the matching item with `id` and `name`, or HTTP `404` when the identifier does not exist.

The change was deterministic. It did not use a model call.

## What succeeded

The protected verifier used .NET SDK `10.0.200`. It built the candidate and passed seven endpoint checks. It also confirmed container cleanup.

The verified full-repository candidate was `f3028991277121ffea3b132929e34b37416b080b`. The final open draft PR used that exact commit.

## What first failed

The original three-job workflow failed in its publisher job before it created the draft PR. The historical failure cause remains unknown.

## How publication completed

An owner-approved publication-only continuation reused the retained verified Git objects. It did not rebuild the candidate. The continuation created the draft PR with the exact verified commit.

## What this result does not prove

!!! warning "Not demonstrated"

    - It does not prove automatic issue forwarding.
    - It does not prove one uninterrupted issue-to-PR execution.
    - It does not prove live AI coding quality. The change used no model call.
    - It does not prove merged code, deployment, production remediation, or general runtime qualification.
    - It does not prove independent physical deletion of hosted runner files.

The source issue and pull request are in a private repository. The public summary has no public evidence URL. No private control-state data or raw logs are included here.
