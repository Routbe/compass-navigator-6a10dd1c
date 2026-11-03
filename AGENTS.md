<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Source import architecture
- Subdirectories have their own AGENTS.md rules; read them before changing files there.
- Q&A audiences and public styling are published canvas preferences; account/parental restrictions can only tighten them. Why: Studio drafts must not alter live access or weaken child safety.
- Studio save, discard and publish share a synchronous operation lock; discard restoration is compared with the confirmed snapshot and preserves edits made during its request. Why: simultaneous triggers and delayed responses must not overwrite newer local edits.
- Transactional mail registers ongoing delivery with the current request's lifetime hook when available, otherwise awaits dispatch; no request context is retained globally. Why: returning before unsupported background work finishes can silently lose sign-in mail.
- Preserve the imported ROUT TanStack Start routes, shared providers, design system, and feature modules rather than recreating the application from screenshots.
- Keep managed Lovable integration files and project identifiers intact when importing source so the project retains its own Cloud connection.
- The imported custom-session/PostgreSQL backend remains separate from Cloud Auth until explicitly migrated; never bypass its fail-closed runtime role or fabricate successful data-backed actions.
- Original database scripts in db/ are reference source, not automatically applied Cloud migrations, because their custom roles and auth schemas require a reviewed migration.
