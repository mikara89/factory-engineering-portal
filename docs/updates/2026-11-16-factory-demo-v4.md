# Factory Demo v4 — 16 November 2026

Three recordings show what changed since Demo v3, where Factory goes, and one real task. The task starts at a GitHub issue. The task ends at a pending review.

## Watch the videos

An AI Simulated User operated Factory at the owner's request. Claude Code played the AI Simulated User. No human appears in the videos. Every review is an agent review.

Use the captions menu of the player for English captions. The videos use a synthetic voice. Waiting time is cut.

### Part 1: What changed, and where Factory goes — 5 minutes 53 seconds

<video controls preload="none" style="width:100%" poster="../../assets/demo-v4/factory-demo-v4-1-changes-direction-poster.png"><source src="https://github.com/mikara89/factory-engineering-portal/releases/download/demo-v4-2026-11-16/factory-demo-v4-1-changes-direction.mp4" type="video/mp4"><track kind="captions" src="../../assets/demo-v4/factory-demo-v4-1-changes-direction.vtt" srclang="en" label="English" default></video>

[Download Part 1](https://github.com/mikara89/factory-engineering-portal/releases/download/demo-v4-2026-11-16/factory-demo-v4-1-changes-direction.mp4) · [English captions](https://github.com/mikara89/factory-engineering-portal/releases/download/demo-v4-2026-11-16/factory-demo-v4-1-changes-direction.vtt)

Part 1 shows eight changes since Demo v3. Each change has a card and a saved real Factory page. Some saved pages show items from an earlier, unpublished recording take.

The status badges come from the Factory status page of the recording day. The badges are Real, Offline checks, and Fake only. Fake only and Offline checks do not mean that a feature worked on a real task.

The direction in Part 1 is a plan. It does not show delivered features.

| Start | Section |
| --- | --- |
| 0:11 | How to read the videos |
| 0:37 | The Factory journey |
| 1:43 | Eight change cards |
| 4:03 | The live pages: Needs you, Work items, Runs |
| 4:37 | Where Factory goes (a plan) |
| 5:28 | What Part 1 shows and does not show |

### Part 2: From issue to trusted tests — 14 minutes 38 seconds

<video controls preload="none" style="width:100%" poster="../../assets/demo-v4/factory-demo-v4-2-issue-to-tests-poster.png"><source src="https://github.com/mikara89/factory-engineering-portal/releases/download/demo-v4-2026-11-16/factory-demo-v4-2-issue-to-tests.mp4" type="video/mp4"><track kind="captions" src="../../assets/demo-v4/factory-demo-v4-2-issue-to-tests.vtt" srclang="en" label="English" default></video>

[Download Part 2](https://github.com/mikara89/factory-engineering-portal/releases/download/demo-v4-2026-11-16/factory-demo-v4-2-issue-to-tests.mp4) · [English captions](https://github.com/mikara89/factory-engineering-portal/releases/download/demo-v4-2026-11-16/factory-demo-v4-2-issue-to-tests.vtt)

Part 2 follows one task from a GitHub issue to an approved set of QA tests. The AI Simulated User clicks every decision. The QA writer ran live three times. The first two attempts failed.

| Start | Section |
| --- | --- |
| 0:11 | How to read the videos |
| 0:37 | Overview: from issue to trusted tests |
| 1:47 | Repository onboarding (scripted, no model) |
| 3:22 | Issue and import |
| 4:38 | Live triage |
| 5:50 | Triage answers |
| 6:42 | UI design and request approval |
| 7:48 | QA test writer: two failed attempts, then one approved attempt |
| 9:43 | Base check with failure reasons |
| 10:58 | Per-test review |
| 13:18 | The QA set is approved |
| 13:50 | Before and after |
| 14:10 | Evidence and limits |

### Part 3: From tests to a safe decision — 8 minutes 2 seconds

<video controls preload="none" style="width:100%" poster="../../assets/demo-v4/factory-demo-v4-3-tests-to-decision-poster.png"><source src="https://github.com/mikara89/factory-engineering-portal/releases/download/demo-v4-2026-11-16/factory-demo-v4-3-tests-to-decision.mp4" type="video/mp4"><track kind="captions" src="../../assets/demo-v4/factory-demo-v4-3-tests-to-decision.vtt" srclang="en" label="English" default></video>

[Download Part 3](https://github.com/mikara89/factory-engineering-portal/releases/download/demo-v4-2026-11-16/factory-demo-v4-3-tests-to-decision.mp4) · [English captions](https://github.com/mikara89/factory-engineering-portal/releases/download/demo-v4-2026-11-16/factory-demo-v4-3-tests-to-decision.vtt)

Part 3 shows the coding run, the Judge loop, and the review. The review stays pending. Nothing is published, and there is no finished feature.

| Start | Section |
| --- | --- |
| 0:11 | How to read the videos |
| 0:37 | Overview: from tests to a safe decision |
| 1:45 | First coding attempt |
| 3:25 | Judge loop |
| 4:47 | Review with verification notes |
| 6:42 | Decision: the review stays pending |
| 7:23 | Evidence and limits |

### Full recording — 27 minutes 5 seconds

[Download the full recording](https://github.com/mikara89/factory-engineering-portal/releases/download/demo-v4-2026-11-16/factory-demo-v4.mp4) · [English captions](https://github.com/mikara89/factory-engineering-portal/releases/download/demo-v4-2026-11-16/factory-demo-v4.vtt)

The full recording joins the same footage in one video, with chapter cards. This page has no player for the full recording. Open the link to watch it.

| Start | Chapter |
| --- | --- |
| 0:00 | Title and labels |
| 0:38 | What changed |
| 4:40 | Direction |
| 6:42 | Repository onboarding |
| 8:17 | Issue and import |
| 9:33 | Live triage |
| 11:37 | UI design and request approval |
| 12:43 | QA test writer |
| 14:38 | Base check with failure reasons |
| 15:53 | Per-test review |
| 18:13 | The QA set is approved |
| 20:12 | First coding attempt |
| 21:53 | Judge loop |
| 23:15 | Review with verification notes |
| 25:09 | Decision: the review stays pending |
| 25:51 | Limits and evidence |

The full recording has no Chapter 15.

## What happened

The task is issue #29 of the TaskFlow demo app. The issue asks for a Complete button on each open task and a new API endpoint. Before the recording, the owner approved a model budget of USD 4.70.

- Repository onboarding used a scripted setup agent. The agent proposed setup files for a second small demo repository. No model ran. All proposed commands stayed marked Not run. Nothing was sent to GitHub.
- Triage proposed a draft request with eight requirements. Six requirements have an automated check. Two requirements need a human check. The AI Simulated User answered three open questions with the suggested answers.
- The AI Simulated User waived the design mockup and recorded a reason: the button follows the existing tab-button style.
- A separate QA agent wrote acceptance tests from the approved request. Two live attempts failed because of a Factory defect. Factory pull request #302 fixed the defect afterwards. The QA request limit was raised from 60 to 100 for this recording.
- The third attempt wrote 11 tests. On the unchanged code, 2 tests passed and 9 tests failed with the reason "Feature missing".
- The AI Simulated User compared each test with its requirement. All 11 tests matched. The review found no defective test. The AI Simulated User approved the set before the coding run.
- The coding run was verified. All 35 checks passed, and the run kept to the allowed paths. The run changed six files.
- The Judge loop ran one round. The four scores were 5, 5, 5, and 5. No revision was needed. The loop never approves.
- The AI Simulated User marked six requirements as met, because passing checks cover them. Requirements REQ-05 and REQ-06 are human checks without enough evidence. The AI Simulated User saved notes and left the review pending.
- No decision was recorded. No draft PR was opened. Nothing was published.

| Step | Cost (USD) | Limit (USD) |
| --- | --- | --- |
| Triage | 0.036336072 | 0.20 |
| QA writer, 3 attempts | 0.145918344 | 0.30 each |
| Coding run | 0.029988792 | 0.50 |
| Judge attempt | 0.00615258 | 0.50 |
| **Total** | **0.218395788** | |

The costs are recorded model costs. The three QA writer attempts cost 0.0488, 0.0801, and 0.0169 as shown on the video cards. The cards round to four decimals. The total is the exact recorded value.

An earlier recording take is not in these videos. That take cost USD 0.084646368. Recorded model costs do not measure the total engineering cost.

## Evidence and limits

- One small task in a small demo app does not show general reliability or time savings.
- The review is an agent review. It is not independent of the Judge. The review stays pending. Human review minutes remain Unknown.
- The per-test review found no defective test. These videos show no defect found by that review.
- Two QA writer attempts failed because of a Factory defect, fixed afterwards in Factory pull request #302. The QA request limit was raised for this recording.
- REQ-05 and REQ-06 lack enough evidence. The run screenshots do not show the Overdue list with an open task. The screenshots also cannot show an update without a page reload.
- The Judge loop needed no revision. These videos show no live revision.
- The repository onboarding agent is scripted. It does not show a live model proposal.
- The direction in Part 1 is a plan. It is not a delivered feature.
- The videos do not show that Factory saves engineering time.

Read the [public evidence summary](../demonstrations/demo-v4-evidence.json) for the recorded checks, the limits, and the exact media digests.

The [Demo v3 recording](2026-11-09-factory-demo-v3.md), the [Demo v2 recordings](2026-11-08-factory-demo-v2.md), and the [Demo v1 recordings](2026-11-02-mvp-demo-v1.md) remain available with their original limits.
