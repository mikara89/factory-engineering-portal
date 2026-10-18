# Trust boundaries and permissions

Factory treats agent output as untrusted. Trusted components validate and verify the exact candidate. People decide whether to merge and deploy.

## Boundaries

- **Work source:** an issue, CI result, or alert is a request. It does not grant execution authority.
- **Trusted control:** checks current identity, scope, state, approval, and limits.
- **Agent sandbox:** runs agent-requested commands without trusted credentials or protected verification material.
- **Protected verifier:** checks a fixed candidate independently of the agent.
- **Publisher:** receives narrow write authority only after trusted checks pass.
- **Human review:** controls merge, deployment, and public disclosure.
- **Public portal:** serves reviewed static content. It has no authority in the engineering control path.

## Public content boundary

The product repository keeps the canonical, allowlisted public source. The proposal workflow accepts only those exact files and approved metadata fields. It rejects unexpected paths, symlinks, unsupported content types, and private control links.

The public site must not contain raw control state, checkpoints, protected tests, credentials, raw private logs, unreviewed incident evidence, private infrastructure inventory, or internal budget data.

The portal repository is public. When the App pushes a branch or opens a portal PR, the files and the diff are publicly visible, also in a draft PR. For this reason, a person must approve the exact public content in the private product repository before the proposal workflow runs. The portal PR controls deployment to Pages. It does not control disclosure.

The publication workflow requests an App token scoped to the portal repository with `contents:write` and `pull-requests:write`. The publisher creates a branch and draft PR; it does not push to `main`. The active `protect-portal-main` ruleset requires a PR and one approval, with no bypass actors. That ruleset does not currently require the `build` check. Human review controls merging and the resulting Pages deployment. These controls do not establish that App write permissions alone prevent every merge or deployment action.

## Human decision points

1. A human approves the exact public content in the private product repository before it goes to the public portal repository.
2. A human reviews and merges each portal PR. This merge controls deployment to Pages.
3. A human reviews engineering draft PRs.
4. A human retains merge and deployment authority.

The Phase 2 evidence supports only the owner-started retained-candidate publication route. The other target boundaries still require their own qualification before later use.
