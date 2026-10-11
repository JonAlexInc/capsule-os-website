# Release-candidate changes: RC01 through RC06

These are the six product candidates, not the separately numbered HTML progress reports. Counts come from the exact Git source trees below, with rename detection disabled. **A commit or changed file is not a feature.**

| Transition | Commits | Product paths changed | Product text lines added / removed | All tracked paths changed | Main changes |
|---|---:|---:|---:|---:|---|
| RC01 → RC02 | 20 | 48 | +4,260 / −443 | 68 | Editor text selection and clipboard; Images rotation/Undo and compact controls; Network field editing; Scrapbook folio; Super Menu cached names/artwork; Sound state/navigation; Media transport and launch diagnostics. |
| RC02 → RC03 | 33 | 43 | +3,325 / −343 | 62 | Ordinary-login Terminal and user-bus fixes; Files chassis/scaled layouts; cold-cache Super Items; Images View/Edit/Capture and save/reopen; seven Sound styles; failed-launch notifications; Scrapbook board/drawer polish. |
| RC03 → RC04 | 282 | 447 | +56,308 / −2,255 | 531 | Full Candidate04 image and boot packaging; broader runtime/device dependencies, native app/shell expansion, Media/Peek/material/layout work, NVIDIA/Intel firmware and audio stack packaging. Source and installed hardware acceptance are separate. |
| RC04 → RC05 | 109 | 227 | +34,118 / −2,086 | 5,053 | Print & Scan; Jelly materials; durable saved layout previews; Activity captions; Classic Mac setup; Timeline revisions; Super Menu idle drawing; local ML advisory plumbing; complete helper delivery and both filesystem updates. |
| RC05 → RC06 | 168 | 255 | +31,171 / −8,966 | 6,338 | Post-C05 fixes plus coherent Appearance/Media/WM integration; still wallpapers; Settings exact search, state, focus and enlarged layouts; Control linked history/zoom/export; capture mapping; durable dual-boot clock policy; final runtime/dependency closure, Capsule 0.6 identity, ISO and signed update. Animated wallpaper alone deferred to 0.7. |
| RC01 → RC06 (distinct paths) | 612 | 837 | +127,309 / −12,220 | 11,853 | Cumulative end-to-end tree difference; repeated edits count once per path. The five per-transition commit counts total 612; distinct product paths total 837. |

Product paths are tracked files under `authd/`, `capsule-protocol/`, `compositor/`, `dos/`, `encapsulator/`, `greeter/`, `installer/`, `libcapsule/`, `overlay/`, `panel/`, `protocols/`, `recipes/`, `runtime-defs/`, `shared/`, `shim/`, `tools/`. This includes tests placed in tools; root-level documentation, reports, saved proof evidence and website assets are excluded from the product column. Binary changes count as paths but not text lines.

The all-tracked column includes extensive saved evidence: 9,666 documentation/ledger paths in the cumulative difference. The cumulative path count is distinct paths between RC01 and RC06, not the sum of repeated edits.

| Candidate | Frozen source | Recorded delivery boundary |
|---|---|---|
| RC01 | `7c57719b` | Installed VM source patch; all interactions not certified |
| RC02 | `889f7227` | Installed VM patch and observed Settings About; remaining guest gates separate |
| RC03 | `86d71b46` | Staged exact archive, later deployment recorded; physical/audio workflow separate |
| RC04 | `5633a27d` | Full image 202609270900; desktop binaries separately frozen at b80f9b4; physical hardware not certified |
| RC05 | `bef7fb58` | Initial bef7 source installed on BOTH filesystems with isolated target validation; actual boots distinct |
| RC06 | `321d317f` | Frozen source, image inspection and signed delivery complete; BOTH installs and actual boots pending |

RC04 source counts use the official image-source commit, while its receipt separately pins desktop binaries; these counts do not assert one binary build. RC05 uses the initial October 1 release anchor, so RC05→RC06 includes later Candidate05 increments as well as Candidate06 work. The source tree retains dormant future code; committed motion work does not mean active animated wallpaper shipped in 0.6.

Source records: Candidate01/02/03 staged deployment notes; WALKTHROUGH-FOLLOWON-2026-09-23.md; Candidate04 build receipt/delivery; CANDIDATE05-COMPLETION-2026-10-01.md; CANDIDATE06-RELEASE-STATUS.md. Archive Report01–04 numbering is independent.
