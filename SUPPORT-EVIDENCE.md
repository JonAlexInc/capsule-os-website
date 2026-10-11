# Support evidence and counting boundaries

Review date: **2026-10-11**. This is the public evidence summary behind the [54-row expected support table](SUPPORT-STATUS.md). Local source record: frozen `321d317f2372a42be2ec09385fa421dc2d331bba`; build `202610111852`. Publishing this documentation does not publish or validate the entire frozen source or the private original receipts.

## Historical console tests

`docs/EMULATOR-PROOF.md`, September 3, 2026, re-pinned stable RetroArch 1.21.0: 31 cores; **11 proven, 0 failed, 2 inconclusive, 18 untested**. NES, SNES, Genesis, Master System, Nintendo 64, Atari 7800/Jaguar and Dreamcast have representative content execution in private Capsule runs. The three NES cores count as cores, not three systems. GameCube reaches a game's own warning screen and cache creation; Wii reaches its warning screen and writes game state, then displays a system-memory read/write error. Neither establishes full gameplay/input/audio. BBC Micro and Saturn controls also pass, so their content tests remain inconclusive. Mini vMac has core-load/system-info evidence, but no qualified bootable System disk workflow. RISC OS was explicitly not implemented. Earlier historical claims in this document do not override its dated September 3 verdicts.

## Windows environment mechanics

`docs/WINDOWS-ENVIRONMENTS.md` records the Windows 3.1 tree adapter and QEMU TCG sealed-base/private-overlay routes. Accepted edition targets are Windows 98 SE with official updates and Windows XP SP3 x86. Actual authored BIOS guest tests exercised private writes, overlay isolation, locks, media replacement and bounded stop. They do not establish licensed Windows boot, drivers, application/game execution, auto-login, audio or physical devices. Windows 95 is catalogued, with no separately qualified edition baseline. No OS installers, licenses, drivers or games are supplied.

## DOS private input and persistence

`docs/GILES-DOS-WAYLAND-CAPSULE-RUN-2026-09-30.md` records three private authored DOSBox Staging 0.82.0 Capsule runs: input/save, restart/read/change, and isolated sibling. Exact guest acknowledgments and save bytes passed; owned processes and locks closed. The private software-renderer treatment is explicit. This is not commercial-game, current installed 0.6, VM or physical-hardware acceptance.

## Classic Mac and macOS

`docs/BAUER-CLASSIC-MAC-CONTRACT-2026-09-30.md` and `docs/BELLARD-COMPATIBILITY-CONTRACT-2026-09-30.md` bound classic Macintosh to 68k Macintosh II / Mini vMac. Native setup and persistent-disk adapter mechanisms are distinct from a real owner-media guest boot/save/relaunch. PowerPC remains a separate engine decision. `docs/DOLEZEL-MACOS-CONTRACT-2026-09-30.md` supersedes the older Bellard Foundation status: actual Foundation LOAD_OK and Unicode string/array operations passed; file write/read remained false, AppKit/provider work remained blocked, and Logic had no application window, audio or project workflow. No accepted Capsule macOS adapter exists.

## Wine and Microsoft 365

The bounded Windows/Wine report records DXGI GetSharedHandle returning E_NOTIMPL on the tested Wine 11.15 fresh prefix. Native Windows API conformance is a different environment. Neither proves Word/Excel/PowerPoint activation, editing, save/reopen, game or GPU acceptance. Microsoft 365 remains stopped under the current owner instruction. Wine configuration and API tests are not universal Windows compatibility.

## Runtime definition state

The frozen source has 14 runtime definitions: deb-app, dosbox-staging, gargoyle, java, libretro, pcsx2, ruffle, scummvm, texlive, win31, wine-11.15-staging-mono, wine-11.15-staging, xemu and xenia-canary. A definition is one evidence gate. It does not imply every configured engine or content type has loaded or run. PS2/Xbox/Xbox360/Flash/Java/interactive fiction/TeX representative current workflows are not qualified by this review. The ScummVM 2026.3.0 frontend loader/version and selected dependency closure passed in the actual staged target environment; no game, GPU, audio or save/relaunch workflow is inferred.

## Expected catalog

`shared/system-order.h` supplies the system vocabulary used by Settings and the menu. All entries appear in the public table; Windows 95 and 98 are split to keep their distinct evidence visible. Additional documented families include native Linux, Wine applications, contemporary macOS, PowerPC Mac, RISC OS and application runtimes. Virtual Boy, 3DS, Wii U and Switch being named in that vocabulary does not establish an execution engine. Coming soon means expected/catalogued, with no approved release date. Shared Sega core routes do not inherit another Sega system's title proof.

## Candidate05 installed filesystems

`docs/CANDIDATE05-COMPLETION-2026-10-01.md` records the initial bef7 release installed on both target filesystems: 239 native payload files, 47 application/compositor outputs, actual target loaders and separate target-specific dependency/package receipts. It explicitly does not infer a booted VM or physical app/device workflow. Later Candidate05 increments have their own preserved records; these do not constitute a C06 installation.

## Candidate06 image and delivery

[Current release status](CANDIDATE06-RELEASE-STATUS.md) records the frozen source, actual ISO, existing-key signed update, 412 package files, 49 runtime paths, 74 dependencies, 14 definitions and 10 capsule manifests. Independent content/hash/BIOS+UEFI structure and Windows destination readback passed. The 12 Appearance and three Media private cases keep their actual scope. VM full rollback is verified; SSD rollback, both signed A/B updates, separate persistent app/runtime transactions, installed readback, actual boot/smoke and coldboot clock checks remain pending. Still wallpapers are active; animated wallpapers alone move to 0.7 by direct human decision.

## Percentage denominator

A: implemented Capsule route/configuration. B: actual row-specific runtime execution/load in recorded testing. C: representative content/application execution through Capsule. D: current 0.6 installed end-to-end workflow accepted on BOTH targets. Each gate contributes 25 points. Historical dates and limited tests remain visible. A failure can coexist with partial evidence points; points never mean the app is working. No row has D at this checkpoint. This is evidence coverage, not the share of compatible software, a performance score or a completion-date estimate.
