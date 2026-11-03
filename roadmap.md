# Repository import

## ROUT OS follow-up
- [ ] Audit existing Q&A, About, Info and AI content; add linked, localized explanations that match verified anonymity, safety and optional rewrite behavior; verify public navigation and Q&A regression tests.
- [x] Audit remaining Studio/Q&A regressions: serialize operations, preserve edits during discard, restore missing button controls/all twelve font choices, enforce default-off across helpers, apply glass/typography consistently; 119 focused tests passed.
- [x] Review authentication/mail runtime constraints and verify public flows: request-scoped background mail hook, shared four-second transport budget, manifest/four icons return 200, no mobile overflow or runtime errors; actual ROUT session remains required.
- [x] Harden draft-only saves, onboarding drafts, discard baseline and workspace binding; PostgreSQL save/publish isolation test passed.
- [x] Add Q&A audience enforcement in Neon, questions off by default, separate-page editor/avatar/link controls, independent question/answer style scopes, first-use explanation and tour step.
- [x] Verify manifest/icons, in-app banner, iOS installation hint and FSM tests; no offline worker added.
- [x] Verify shadow-mute/trust privacy rules with PostgreSQL tests; existing Neon moderation functions retained.
- [x] Connect Infomaniak AI and verify French/English rewrites via the real API; add two-second client timeout and fail-closed limits.
- [x] Verify native 1080×1920 story PNG rendering; preserve existing inbox/answers/avatar story engine.
- [x] Review Whispr AGPL and anonQ O'Saasy licenses; do not import restrictive anonQ competing-SaaS code.
- [ ] Verify studio save/discard/publish and Q&A reply/mute/share end-to-end as the requesting member: blocked by no custom ROUT session in this preview; /studio redirects to sign-in.
- [ ] Verify actual Infomaniak SMTP delivery and background lifetime on published hosting: request-lifetime hook and bounded transport covered by tests; mailbox secrets declined and no deployment, so live delivery remains unverified.
- [ ] Production integrity/deployment check: not published, custom auth/session continuity and complete provider audit remain unverified; do not claim live or fully secure.

- [x] Audit the one-to-one import: all 2,048 source files and 102 public assets present; original design retained; 28 tests passed.
- [x] Download and inspect the approved repository.
- [x] Import original source, assets, database scripts, and dependencies.
- [x] Verify homepage, desktop/phone menu, sign-in destination, and command navigation; 14 tests passed.
- [ ] Compare against the original hosted site: blocked by its Vercel sign-in gate.
- [x] Link original Neon and read existing schema/functions; no data migration or new Cloud auth performed.
- [ ] Reconnect remaining external services: blocked by storage/mail/payment/social provider credentials.
