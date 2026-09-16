# Capsule OS website: evidence and provenance

## Expanded native gallery — revision 3

The primary depiction now includes 31 native renders of actual application drawing functions across 18 surfaces. See [NATIVE-CAPTURES.md](NATIVE-CAPTURES.md) for exact capture provenance, fixtures, source fingerprints, image hashes, 25 extracted Settings pages, and 14 runtime definitions. The three original browser exercises now live in an optional collapsed concept lab. Their visual simplifications are not the OS depiction.

The searchable inventory references current implementation files and separately labels design/settings-organization.md and design/settings-catalog.json as proposed work. Neither document is used to claim that its target applets are already shipped. Native captures may contain third-party example names from existing harness data, not included software, game artwork, endorsement, or compatibility results. Files displays the fixture documents and the build environment's mount labels; it is not a screenshot of an installed OS's disks.

S9: the newly documented Library empty-state issue is visible in the native render and confirmed in panel/src/capsule-library.c. The text says that Install adds an application, while the HIT_INSTALL helper launches capsule-install. This website work documents the discrepancy and does not change the OS.

Review refreshed 2026-09-16 through Capsule OS commit 813b13a. The original gallery remains the documented September 9 snapshot; the Material Studio and Media Surface captures are later, separately identified additions. Paths below are relative to the capsule-os repository. These are source references, not public repository URLs. The website includes no source-tree browsing endpoint.

## S1 — Purpose and appearance

- docs/WORKING-HERE.md: project purpose and the graphical-first goal. Historical fault sections are not automatically current.
- docs/DESIGN.md: named color roles, shared visual vocabulary, explicit distinction between launcher simplicity and management transparency.
- shared/theme.c: actual table entries for Midnight, Paper, Carbon Blue and Sea Glass, including bg/chrome/card/field/side/text/dim/accent. The website uses these exact eight values for each palette.
- shared/theme.h and shared/wallpaper-scenes.c: theme and scene implementation. The browser's rings are an original CSS illustration, not a native wallpaper rendering.
- design/appearance-revamp.md: current appearance work; status statements distinguish isolated tests from image verification.

The optional concept lab is an editorial web illustration, not a native screenshot. Its static sidebar labels are scene context and its dock and tabs are browser controls. The primary gallery instead contains real native-renderer captures, documented in NATIVE-CAPTURES.md. Neither claims that every control is verified in a released image.

## S10 — Material Studio and semantic icons

- panel/src/capsule-settings.c: the current Material Studio page and system-wide material-world application logic.
- shared/iconprofile.c, shared/fileglyph.c and shared/nativeicon.c: atomic profile persistence, semantic type selection, deterministic Cairo rendering, state treatment, universal fallback and material plates that preserve supplied application artwork.
- tools/check-icon-system.c: profile round-trip, semantic mapping, bounded format label and rendered-pixel checks.

The capture demonstrates the native page. It does not establish that every third-party application supplies useful icon metadata or that every surface in the OS already uses the new renderer.

## S11 — Media Surface boundary

- panel/src/capsule-media-worker.c: fixed command grammar, exact canonical file grants and opt-in URL handling around libVLC.
- panel/src/capsule-player.c: native queue/controller, private runtime state and command socket, headless visual and control tests.
- panel/src/capsule-panel.c: shared Now Playing control; MPRIS remains the path for Spotify and other compatible players.
- tools/check-media-worker.py: sibling refusal and chosen-file grant tests.

This is a tested source foundation, not a claim that the complete design brief is shipped. Picture-in-picture video, artwork matching, guide/DVR and other advanced slices remain future work and the latest ISO has not been rebuilt.

## S2 — Permissions

- docs/manual/permissions.md: saved choices are used on the next launch.
- panel/src/capsule-permissions.c: folder, device and separate network controls; next-launch explanation.
- tools/capsule-run: assembles the sandbox using the saved grants.

The demonstration uses a fictional Sample Notes application and only Documents, Internet and Microphone grants. It starts with Documents enabled. It models a successful relaunch and does not reproduce defaults for any shipped capsule, policy validation, device availability, network setup failures, portal grants, or live OS security enforcement. Browser memory keeps the active sample separate from saved choices.

## S3 — Logs

- tools/capsule-run: launch recording.
- panel/src/capsule-logs.c: “Only those lines” and export controls.
- docs/manual/troubleshooting.md: graphical diagnostics workflow. Other old statements in this manual may be stale.

All six log entries are fictional. The browser filter uses explicit sample classifications, not the native error classifier. Export writes the complete fictional record locally; it does not retrieve a system log.

## S4 — Large-text layout limitation

- panel/src/capsule-permissions.c: comment around `tab_has_search(a->tab) && page_bottom(a) > page_top(a)` describes chrome exceeding a 360px window at scale 3.00 and the need for a minimum-size solution. Current code suppresses the unusable search field.

Source-confirmed limitation; no new native GUI reproduction was performed for this site. No screen-reader, WCAG, or platform accessibility certification is asserted.

## S5 — Installer and VMware status

- tools/capsule-install-run: P_ESP, P_A, P_MOD, and P_DATA use `/dev/disk/by-partlabel/capsule-*`.
- capsule-ledger/NOTES.md entry 135: published build 202609090239, boot gates recorded as passing, VMware direct-scanout blink mitigation awaiting confirmation, bare-metal installation unverified, duplicate partition-label targeting recorded as an outstanding multi-disk risk.
- capsule-ledger/briefs/controller-home-and-imports.md: latest final build record and its explicit verification limits.

The website reports these records; it did not rerun QEMU, VMware, OS builds, or destructive installer tests. September 6's global launch failure and console flash have subsequent fix records. They are intentionally not described as unchanged open bugs.

## S6 — Runtime scope

- runtime-defs/: definitions include Wine, DOSBox, native Debian applications, and other runtimes.

Definition presence is not a compatibility test. No third-party title is shown as a verified working application. No speed, reliability or security comparison with another OS is asserted.

## S7 — Historical faults changed in code

- tools/capsule-run includes `--clearenv` in sandbox setup.
- compositor/src/capsule-wm.c declares `pending_capsules[256]`, compared with the historical 32-entry report.

These are inspected implementation changes, not proof of unrestricted capacity, complete environment isolation, or a security audit. Do not repeat the 33rd-capsule or inherited-environment reports as if no code changes occurred.

## S8 — WebKit exception

- runtime-defs/deb-app.json: `WEBKIT_DISABLE_SANDBOX_THIS_IS_DANGEROUS` is set to `1`.
- capsule-ledger/NOTES.md entry 133 explicitly leaves this broad exception open.

WebKit's internal sandbox and the outer capsule boundary are separate mechanisms. The site neither removes this flag nor evaluates the overall boundary's effectiveness.

## Rights and public content

- docs/LICENSING.md identifies the project's own code as GPL-3.0-or-later, distinguishes the assembled-image policy, and records unresolved third-party distribution questions. Some older inventory statements are not current release audits.
- LICENSE: copied verbatim as website/LICENSE.txt.
- design/brand/encapsulator.svg: copied verbatim to website/assets/encapsulator.svg. Project-authored Encapsulator symbol; no implied security certification. Other geometry and visuals are authored CSS/inline SVG.
- No external font, third-party artwork, screenshots of commercial programs, application binaries, ROMs, BIOS, keys, or OS downloads are included.
- The fictional log export is not a real error report. No telemetry, cookies, persistence, uploaded files, or real permissions are used.

General legal reference: https://www.gnu.org/licenses/gpl-3.0.html (also supplied as LICENSE.txt). GPL commercial-use and aggregation statements are grounded in the license text and repository policy, not new restrictions.

Digital-copy reference consulted 2026-09-09: https://www.copyright.gov/help/faq/faq-digital.html — owning a copy does not establish all rights to copy, adapt, or distribute it. Laws and applicable licenses differ; this site does not authorize a user's content or establish legal clearance.

The Capsule OS name has not received a trademark clearance review. Review public branding and the actual software distribution separately before release. These notes reduce misleading presentation and avoid distributing third-party payloads; they are not a guarantee of legal safety.
