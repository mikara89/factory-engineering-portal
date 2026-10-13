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

The intended portal publisher App installation is limited to the portal repository. It needs `contents:write` and `pull-requests:write` to create a branch and draft PR. A portal branch ruleset must block direct App pushes to `main` and require human review. The App receives no control-repository access and cannot merge, deploy, or start engineering work. The App and branch ruleset are not configured in this local draft.

## Human decision points

1. A human reviews and merges each proposed portal update.
2. A human reviews engineering draft PRs.
3. A human retains merge and deployment authority.

The Phase 2 evidence supports only the owner-started retained-candidate publication route. The other target boundaries still require their own qualification before later use.
