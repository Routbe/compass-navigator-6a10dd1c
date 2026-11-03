# Repository import

## ROUT OS follow-up
- [ ] Fix studio draft isolation: saving never changes the live profile; publish explicitly, retain/discard drafts.
- [ ] Correct Q&A block audience, dedicated-page settings and shared typography/style targeting; first-use tour.
- [ ] Verify existing PWA, safe areas, in-app/iOS prompts and FSM tour.
- [ ] Verify Neon-backed shadow mutes, trust penalties, delayed global bans and sender privacy.
- [ ] Verify multilingual Infomaniak rewriting, restore-original interaction and secure provider configuration.
- [ ] Verify Q&A inbox, public answers/avatar stories and 1080×1920 social exports.
- [ ] Audit mail/runtime secret boundaries and production readiness; do not claim live without deployment and verification.
- [ ] Review Whispr/anonQ patterns and licenses without replacing ROUT's design or security.

- [x] Audit the one-to-one import: all 2,048 source files and 102 public assets present; original design retained; 28 tests passed.
- [x] Download and inspect the approved repository.
- [x] Import original source, assets, database scripts, and dependencies.
- [x] Verify homepage, desktop/phone menu, sign-in destination, and command navigation; 14 tests passed.
- [ ] Compare against the original hosted site: blocked by its Vercel sign-in gate.
- [ ] Reconnect data-backed features: blocked by missing original database and integration credentials.
