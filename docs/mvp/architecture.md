# MVP architecture

<dl class="fe-meta">
  <dt>Based on</dt>
  <dd>MVP documents up to 16 November 2026</dd>
  <dt>Scope</dt>
  <dd>Current architecture of the Factory Engineering MVP, its trust boundaries, and its limits</dd>
</dl>

## Summary

The Factory Engineering MVP is a web application that turns a GitHub issue into a reviewed draft pull request (PR). One owner operates it in a browser on a local computer.

The owner imports an issue or types a request. A triage agent reads the repository and drafts a work request: an outcome with numbered requirements. The owner approves that request. A QA agent writes acceptance tests, which are tests that check each requirement. The owner approves those tests. A coding agent then works inside an isolated container. Trusted checks test the result. An optional Judge loop can ask for revisions within limits that the owner approved. The owner reviews the result in the browser. After the owner approves and publishes, the MVP opens a draft PR that holds exactly the verified files. A person merges the PR.

## How a change flows

![Workflow of the MVP. A GitHub issue or typed request goes to the triage agent, which drafts a work request. The owner approves the work request. The QA agent writes acceptance tests. The owner approves the tests and the run limits, then confirms the paid run. The coding agent works in an isolated container. Trusted checks run in fresh offline containers. If a check fails and rounds and money remain, the coding agent starts the next round. If the checks pass, an optional Judge loop can request a revision inside the approved limits. The owner reviews in the browser, approves, and publishes a draft pull request with exactly the verified files. A person merges on GitHub.](../assets/diagrams/mvp-workflow.svg)

Orange boxes are agents. Their output is untrusted. The green box is the trusted checks. Yellow boxes are owner or human decisions. A dashed box or line is optional.

- **Rounds.** A round is one agent pass followed by verification. If a check fails and money remains, the runner starts the coding agent again in the same workspace. The number of rounds has a fixed limit.
- **Judge loop.** The Judge is an AI reviewer. It gives four quality scores from 1 to 5 and lists findings. The owner approves one loop with a fixed number of revisions and fixed cost limits. The loop never approves, publishes, or merges.
- **Parts.** Triage can propose a split of a large request into parts. The owner approves the exact split. Each part then follows this flow. One work item and one PR remain the default.
- **Repository setup.** A repository describes its image, setup command, checks, and allowed paths in one versioned file, `.factory/factory.yml`. The MVP reads the file at the exact base commit, which is the commit that the run starts from. The owner approves its SHA-256 digest, which is a fingerprint of its exact content. A setup agent can propose such files for owner review.

## Components

![Components of the MVP on the owner's computer. The owner uses the control plane in a browser on localhost. The control plane holds the Blazor UI and minimal HTTP API, the run executor, the SQLite database, and the evidence store. It uses the GitHub integration to reach GitHub. The control plane starts runs in the runner. The runner starts the untrusted agent container and the trusted verification containers in Podman or Docker. The agent container reaches only the model gateway over an internal network. The gateway holds the provider key and calls the model provider inside the limits.](../assets/diagrams/mvp-components.svg)

| Component | Responsibility | Trust level |
|---|---|---|
| Control plane (`Factory.ControlPlane`) | One ASP.NET Core web application. It serves a Blazor user interface (a .NET web UI framework) with Fluent UI components, and a minimal HTTP API. Mediator commands and queries, with their handlers, hold the feature logic. A run executor runs queued runs. SQLite, a file-based database, stores repositories, work items, runs, and events. EF Core is the data access library. The JSON API starts dry runs only. The live activity view is read-only. | Trusted. It serves one owner, has no authentication, and listens on `localhost` only. Do not expose it to a network. |
| Runner (`Factory.Runner`, `Factory.Runner.Cli`) | Builds a run image for each repository commit. The image holds the toolchain, the agent, and the repository at that commit. Runs the agent, capture, and verification in disposable containers. One adapter selects the container engine: Podman (default) or Docker. A command line runs the same code without the user interface. | Trusted code. It starts the untrusted agent container. |
| Agents | The coding agent and the QA agent run from the run image. The coding agent works on a per-run copy of the repository files, on an internal network. It reaches only the model gateway. The triage agent reads the repository with read-only tools and can only propose. | Untrusted output. |
| Model gateway (`Factory.ModelGateway`) | Runs in its own container. Holds the model provider key. Enforces request, token, and money limits. Records each request in a usage ledger. | Trusted. Only the gateway holds the provider key. |
| GitHub integration (`Factory.GitHub`) | Uses a GitHub App to read issues and PR state. Opens a branch with one commit and a draft PR. On some GitHub plans it opens a ready PR instead and says so. Posts comments at three points. | Trusted. It has narrow permissions and acts only after an owner action. Merge stays a human action. |
| Verification (inside `Factory.Runner`) | Captures the agent's changes. Applies the patch to a clean baseline. Runs each check. Every check must exit with 0. In a coding run, approved acceptance tests enter only at this step. | Trusted. It runs offline in fresh containers. |
| Evidence store | Saves files for each attempt: the candidate diff, check results, screenshots, and QA evidence. Saves run events in SQLite. Run events, work item events, triage messages, and agent profile versions are append-only. | Trusted records. The database rejects changes to events. |

Append-only means that the MVP can add records but cannot change or delete them. The `Factory.Verification` project is reserved for independent verification. Verification runs in `Factory.Runner` today.

## Trust boundaries

![Trust boundaries of the MVP. Untrusted: the agent container, the candidate change, repository and tool content, and agent advice. The candidate change is captured, then verified. Trusted: Factory code, the trusted checks, the protected paths, and the publication check. The trusted side gives evidence to the owner. The owner sends approvals with exact digests. The owner decides nine steps: import an issue, approve the work request, approve the acceptance tests, approve a split into parts, confirm a paid run and its money limit, approve a Judge loop and its limits, record the review decision, and publish the draft PR. A person merges on GitHub.](../assets/diagrams/mvp-trust-boundaries.svg)

### What the MVP treats as untrusted

- **Agent output.** The candidate, which is the change that an agent proposes, stays untrusted until verification passes. Capture ignores changes that the agent makes to its own copy of `.git`.
- **The agent container.** It reaches only the model gateway. It has no provider key. It can read a per-run gateway token, but the token works only against the gateway and inside the run limits.
- **Repository and tool content.** Repository files and results from tool servers that the owner registered reach the triage agent marked as data.
- **Agent advice.** The QA agent proposes a result for each requirement, and the owner still decides. Judge score thresholds are readiness signals, not proof of correctness. The coding agent never sees the approved acceptance tests. It gets only an interface note, which names the types that the tests call.

### What the MVP trusts

- **Its own code.** The control plane, runner, gateway, and verification code run outside the agent container. The agent cannot change them.
- **Trusted checks.** Each check runs offline in a fresh container on a clean copy of the baseline. A candidate change to a protected path, such as `.factory/**` or the acceptance folder, fails verification.
- **Approved inputs.** Each attempt saves its execution inputs. Live confirmation needs their exact fingerprint. If an approved input changes, execution stops.
- **The publication check.** Before the MVP opens a PR, it rebuilds each file from the base commit and the candidate diff. It compares each file with the recorded SHA-256 digest. If one file differs, no PR opens.

Trusted does not mean sufficient. A passing check does not show that the check tests the criteria. For this reason, the owner marks each requirement.

### Where the owner decides

| Decision | What the owner approves |
|---|---|
| Intake | Importing an issue. There is no automatic intake. |
| Work request | The exact request as shown, with its requirements. Approval stays blocked while a question is open. |
| Acceptance tests | The exact test set by its SHA-256 digest, after the owner reviews each test. |
| Split into parts | The exact split version and digest. Each part needs its own request approval. For separate PRs, the owner also answers whether each part is safe to deploy alone. |
| Paid (live) run | The exact attempt with its money limit, rounds, and requests for each round. Dry runs and scripted triage use fixed replies and make no model calls. |
| Judge loop | One loop with a minimum score, a maximum number of revisions, and cost limits. |
| Review decision | A verdict for each requirement and four scores. Approve needs a verified run, all scores, and every requirement met. The decision is final. |
| Publication | A separate action on the review page that opens the draft PR. |
| Merge | A person merges on GitHub. The MVP only reads the PR state. |
| Recovery | After a crash with uncertain usage or cleanup, the owner reviews the recovery hold. |

### Limits and budgets

Limits exist at several levels. A live run has a money limit, a request limit for each round, a maximum number of rounds, and time limits. QA runs and triage conversations have their own limits. The owner sees the limits before confirming.

Before the gateway forwards a request, it calculates the highest possible cost of that request. It refuses the request if the total would pass the limit. If usage is unknown, the gateway keeps the reservation and blocks further paid requests. A repository file cannot set these limits.

If the MVP cannot confirm cleanup or usage after a crash, it keeps a recovery hold. A recovery hold is a saved state that blocks further work until the owner reviews it.

## Architecture style

- **Modular monolith.** The MVP is one application with a few infrastructure projects. The product direction keeps this style and avoids microservices without demonstrated need.
- **Onion Architecture.** Inner layers do not depend on outer layers. Domain types, the core business types, depend only on the .NET base library. Data depends on Domain. The infrastructure projects must not reference the control plane.
- **Vertical Slice Architecture.** One folder for each feature holds its commands, queries, handlers, pages, and components. A feature cannot use another feature's concrete types, except approved shared contracts.
- **Architecture tests.** The `Factory.Architecture.Tests` project uses ArchUnitNET, a library for architecture rules, to check these rules. The tests run in the normal `dotnet test` run and need no database, container, network service, or model call. Code analysis warnings fail the build.
- **Known exceptions.** An explicit baseline lists existing exceptions. On 15 November 2026 it listed 58 cross-slice dependencies and one Razor page (a Blazor page) that references EF Core. New code must not add entries.

## What the MVP does not claim

- **Production readiness.** The MVP does not claim it. A capability with the status `Real` is merged and verified with real containers or a real run. That status does not establish production readiness, independent human review, or time savings.
- **Time savings.** The MVP does not establish time savings. The owner paused the time comparison as incomplete.
- **Independent human review.** In recorded demonstrations, an agent operated the controls at the owner's request. Human review time is unknown.
- **Automation.** Issue intake, publication, and merge stay manual. A live model call needs a new numeric budget and approval of the exact attempt.
- **The Judge.** The Judge is advisory and is not calibrated against independent human assessment. One live Judge loop has run, and its revision changed nothing.
- **The setup agent.** The merged baseline uses scripted responses and runs no commands from the target repository. A live-model adapter is not merged.
- **Other stacks.** The full live flow on a repository that is not .NET is planned and has not run.
- **Docker.** Checks cover scripted runs only. A live Docker gateway with two networks has not run.
- **Container isolation.** Container isolation in the MVP is new. Isolation tests from the POC do not qualify it.
- **Hosting.** The MVP runs locally for one owner. Cloud hosting, several users, and a separate execution worker are future directions.

## From POC to MVP

The POC tested the workflow in Phases 0 to 5A. GitHub Actions workflows ran the agent. A separate control repository kept the rules and the decision history.

The MVP keeps the same safety ideas. Agent output is untrusted. Trusted components verify the exact candidate. People decide merge and deployment. The MVP changes where the work runs. The runner starts the agent in a container on the machine that hosts the control plane. A SQLite database holds decisions as append-only events.

The POC design pages remain available under [Legacy POC](../legacy/index.md).
