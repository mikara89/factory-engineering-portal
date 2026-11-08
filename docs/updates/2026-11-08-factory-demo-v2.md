# Factory Demo v2 — 8 November 2026

The new recordings show one real paid attempt from an approved request to a verified draft PR. A separate safety clip shows a scripted refusal.

## Watch the videos

### Real workflow — 3 minutes 4 seconds

<video controls preload="none" style="width:100%" poster="../../assets/demo-v2/factory-demo-v2-main-poster.png"><source src="https://github.com/mikara89/factory-engineering-portal/releases/download/demo-v2-2026-11-08/factory-demo-v2-main.mp4" type="video/mp4"><track kind="captions" src="../../assets/demo-v2/factory-demo-v2-main.vtt" srclang="en" label="English" default></video>

[Download main video](https://github.com/mikara89/factory-engineering-portal/releases/download/demo-v2-2026-11-08/factory-demo-v2-main.mp4) · [English captions](https://github.com/mikara89/factory-engineering-portal/releases/download/demo-v2-2026-11-08/factory-demo-v2-main.vtt)

### Scripted safety test — 46 seconds

<video controls preload="none" style="width:100%" poster="../../assets/demo-v2/factory-demo-v2-safety-poster.png"><source src="https://github.com/mikara89/factory-engineering-portal/releases/download/demo-v2-2026-11-08/factory-demo-v2-safety.mp4" type="video/mp4"><track kind="captions" src="../../assets/demo-v2/factory-demo-v2-safety.vtt" srclang="en" label="English" default></video>

[Download safety video](https://github.com/mikara89/factory-engineering-portal/releases/download/demo-v2-2026-11-08/factory-demo-v2-safety.mp4) · [English captions](https://github.com/mikara89/factory-engineering-portal/releases/download/demo-v2-2026-11-08/factory-demo-v2-safety.vtt)

Use the player's captions menu for English captions. Both videos use a synthetic voice. Waiting time is cut.

## What happened

The owner approved each paid step and its money limit. Codex operated the interface at the owner's request.

- Triage proposed six requirements and limited file scope.
- One coding attempt changed the task filter and added regression tests.
- Build, six unit tests, four protected acceptance tests, and the protected browser check passed.
- The new tests failed on the original buggy baseline and passed on the candidate.
- Codex reviewed the evidence as **Agent at the owner's request**. The owner approved that recommendation and publication.
- The resulting draft PR contains exactly the two verified files. CI passed on its published commit.
- The demo fix was not merged or deployed.

Saved model cost was USD 0.012518184 for triage and USD 0.013066812 for coding: USD 0.025584996 in total. These are recorded model costs, not a measure of total engineering cost.

The safety test used fixed responses. All configured checks passed, but a README change was outside scope. Factory refused approval. The safety test made no paid model call and created no PR.

## Evidence and limits

This is one known-answer fixture. The triage agent read a document describing the fix. This is not a blind problem-solving evaluation.

The four review scores were 5 of 5. They are agent scores, not independent human review. Human review minutes remain Unknown. A displayed two-minute review timer records the agent-operated interface, not the owner's reading time.

One successful attempt does not establish general reliability or time savings. The optional correction attempt was omitted because this candidate did not need a correction. The videos do not claim to demonstrate that sequence.

The main video and safety test have separate run identities and labels. Read the [public evidence summary](../demonstrations/demo-v2-evidence.json) for the recorded checks and exact asset digests.

The [earlier Demo v1 recordings](2026-11-02-mvp-demo-v1.md) remain available with their original limitations.
