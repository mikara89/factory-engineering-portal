# Factory Demo v3 — 9 November 2026

One recording follows one real feature through Factory, from a GitHub issue to a verified draft pull request (PR).

## Watch the video

### One feature from issue to draft PR — 14 minutes 54 seconds

<video controls preload="none" style="width:100%" poster="../../assets/demo-v3/factory-demo-v3-poster.png"><source src="https://github.com/mikara89/factory-engineering-portal/releases/download/demo-v3-2026-11-09/factory-demo-v3.mp4" type="video/mp4"><track kind="captions" src="../../assets/demo-v3/factory-demo-v3.vtt" srclang="en" label="English" default></video>

[Download the video](https://github.com/mikara89/factory-engineering-portal/releases/download/demo-v3-2026-11-09/factory-demo-v3.mp4) · [English captions](https://github.com/mikara89/factory-engineering-portal/releases/download/demo-v3-2026-11-09/factory-demo-v3.vtt)

Use the captions menu of the player for English captions. The video uses a synthetic voice. Waiting time is cut.

| Start | Chapter |
| --- | --- |
| 0:25 | Inbox and Board |
| 0:59 | Issue and import |
| 1:27 | Live triage |
| 2:51 | UI classification |
| 3:23 | Request approval |
| 3:45 | QA acceptance tests |
| 5:17 | Safety: a real scope conflict |
| 5:53 | Live run |
| 8:58 | Review, before the Judge |
| 9:58 | Judge advice |
| 11:26 | Decision, publication, and CI |
| 12:46 | The feature in the browser |
| 13:24 | Evaluation pages |
| 14:22 | Limits and evidence |

## What happened

An AI agent operated the control plane at the owner's request. The video calls this agent "Agent". Agent clicked every owner decision in the video. Before the recording, the owner approved a model budget of USD 2.20.

- Issue #14 of the TaskFlow demo app asks for a Complete button on each open task and a new API endpoint.
- Triage proposed six requirements. Tests check four of them. A review of the page checks the other two.
- Agent waived the design mockup, because the new button follows the existing list pattern.
- Before any code existed, a separate QA agent wrote eight acceptance tests. On the original code, one test passed and seven tests failed. Agent approved the test set.
- The first coding attempt passed the build, the unit tests, the repository acceptance tests, the browser check, and the scope check. Two of the eight QA tests failed.
- The two failed QA tests were defective. One test expected two open tasks where one is correct. The other test could not start its browser.
- Agent stopped the use of the QA test set. The approved retry ran without the set. The retry passed all configured checks in one round.
- Agent reviewed the result and saved four scores. After that, Agent locked the scores, and the advisory Judge result appeared.
- Agent approved the result. Factory opened a draft PR with exactly the seven verified files. CI passed on the published commit.
- The feature was not merged or deployed.

| Step | Recorded model cost (USD) | Limit (USD) |
| --- | --- | --- |
| Triage | 0.01530066 | 0.20 |
| QA test writer | 0.060260556 | 0.50 |
| Coding attempt 1 | 0.0222795 | 0.50 |
| Coding attempt 2 (approved retry) | 0.027396912 | 0.50 |
| Advisory Judge | 0.005188548 | 0.50 |
| **Total** | **0.130426176** | |

These values are recorded model costs. They do not measure the total engineering cost.

## Evidence and limits

- One small feature in a small demo app does not show general reliability or time savings.
- The review is an agent review, not an independent human review. The review shows six minutes of agent-operated interface time, not owner reading time. Human review minutes remain Unknown.
- The QA agent wrote two defective tests. On the original code, a defective test fails in the same way as a correct test of the missing feature. The check before the run could not find the defects.
- The approved retry had no independent QA tests. The agent review checked the result.
- One Judge risk did not hold. The evidence of that risk showed that four of four acceptance tests passed.
- The safety chapter shows a saved run from 6 November 2026. The evaluation chapter shows saved pages, including a blind A/B experiment from 4 November 2026.

Read the [public evidence summary](../demonstrations/demo-v3-evidence.json) for the recorded checks and the exact media digests.

The [Demo v2 recordings](2026-11-08-factory-demo-v2.md) and the [Demo v1 recordings](2026-11-02-mvp-demo-v1.md) remain available with their original limits.
