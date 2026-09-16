# Native Capsule OS capture record

Originally generated 2026-09-09 from the working tree based on HEAD 70085c4. Material Studio and Media Surface were added 2026-09-16 from committed Capsule OS source through 813b13a. These are output images of actual native render functions. They are not VM screenshots, a running OS, or a claim that the captured state is present in the published ISO.

## Reproduction

Run `bash website/render-native.sh` and `bash website/render-native.sh more` from a Linux build environment with the repository’s native build dependencies, then `node website/build-inventory.mjs`. The scripts invoke tools/draw-shot.sh, whose content-keyed build compiles the current window source. A private temporary home provides fixture data. No personal store, real application installation, disk format, or live connection is requested.

The render scripts retain logs under assets/native/*.render.log for engineering review. The preview server does not serve those logs. Do not publish them. Some harness overlap counters include intentional overlays (for example, a context menu over file icons); screenshots are visually reviewed separately.

## Capture index

### Appearance

Theme families, accent selection, surface treatment, translucency and blur share one page. The material-controls frame shows the same native page scrolled further down.

Source: panel/src/capsule-settings.c · draw_appearance.

Fixture: Carbon Blue, Paper and Stainless theme variants; isolated demonstration preferences.

- [Carbon Blue](assets/native/appearance.png) — SHA-256 244e7c638a54f29acd40a0086610bb2dec07cd6f8cbae4cca86800de33f4e999
- [Paper](assets/native/appearance-paper.png) — SHA-256 134fec88b2fded7197b8cda4d0b6ad271fcc800403452a0cc048524ece556125
- [Stainless / Chrome](assets/native/appearance-metal.png) — SHA-256 902ff30a1e6ec4f4b26c4572ae0c1a89e30401edab50051f6be0f3eff406f863
- [Material controls](assets/native/appearance-materials.png) — SHA-256 725dab7248effaa4ba3c0d551780c71b3be2f5c5b500e00244eaaeb18f8ce238

### Material Studio

The native Settings page exposes system-wide material worlds, visual
languages, depth, scope, reduced motion and custom-icon choices. Applying a
world changes shared theme roles and the semantic icon profile.

Source: panel/src/capsule-settings.c · shared/iconprofile.c.

Fixture: Isolated Iridescent Titanium profile; no user settings changed.

- [Material Studio](assets/native/material-studio.png) — SHA-256 0c267471a49bfaac619077dde1086c244b61cfae9e326a2baf28e1dc1c3e8c7f

### Media Surface

The native controller owns the queue and playback controls while decoding is
kept in a separate libVLC worker with exact-file grants. The captured queue,
filenames and playback position are generated demonstration data.

Source: panel/src/capsule-player.c · panel/src/capsule-media-worker.c.

Fixture: Headless render; no media file is included or played.

- [Media Surface](assets/native/media-surface.png) — SHA-256 2aff66eafb0286d1347fa7f3a9796aee610dbac9ed934416fa9156ac2d19a29d

### Wallpaper

The native wallpaper picker exposes the scene collection separately from Appearance. Scenes use the shared rendering system; this is the actual page, not a web approximation.

Source: panel/src/capsule-settings.c · shared/wallpaper-scenes.c.

Fixture: Isolated preferences; native scene thumbnails.

- [Wallpaper picker](assets/native/wallpaper.png) — SHA-256 22d4fd0b9dc9d7ce08b3b10d893d0d322115b28aa522cb81ec46127a75245e00

### Dock

The Dock page covers placement, size, auto-hide and indicators. The native dock also tracks starting, running and minimized applications; this image shows its configuration surface.

Source: panel/src/capsule-settings.c · panel/src/capsule-panel.c.

Fixture: Default isolated preferences; no running applications.

- [Dock controls](assets/native/dock-settings.png) — SHA-256 4c6941b13f3e113b1d890ba3ae8773ac630995b4f4b0542a68b209589f66ee73

### Desktop & menu

The native panel draws desktop icons, file-kind graphics, selection and a contextual menu over its own Folded Light wallpaper. This is a desktop-layer render; the compositor, title bars and dock are not composited into this image.

Source: panel/src/capsule-panel.c · tools/draw-shot-desktop.c.

Fixture: Harness-generated folders and files; native wallpaper and menu.

- [Desktop context menu](assets/native/desktop.png) — SHA-256 aabba103d915f9ae5c2901cb285cded5aab3465d664a53bbfd6e30b620832f2d
- [Launcher](assets/native/launcher.png) — SHA-256 914e6f1d498604656c42a84d64521ceae9db3bcf231159df95367e4e2110a401

### Library

Library has category navigation, a controller page and a route back to the desktop. Compare a collection containing one fictional capsule with the empty state and controller controls. The empty state contains a confirmed misleading Install route; see status note 07.

Source: panel/src/capsule-library.c · panel/src/library-home-ui.h.

Fixture: Sample Notes is a metadata-only fixture, not a runnable app. The empty-state capture has no installed capsules. Controller names and ordering are harness samples.

- [Sample collection](assets/native/library-sample.png) — SHA-256 975f86bd5b636e2340a09926047bdef4d8385adb091062aac1579e00702d89d7
- [Empty state](assets/native/library.png) — SHA-256 aa9f61b1f9a8852fc2c560f953dd5ea47f34940cfd659b62ac640d242c136d3f
- [Controllers & players](assets/native/controllers.png) — SHA-256 ca60f268e17626ef082544d9343e1d49a91ae7eeb5989e2a441d3710784e3898

### Capper

The store UI presents application categories, a cart and installation progress. The displayed package catalog is the native harness’s sample data. No package shown here has been downloaded, installed, or compatibility-tested by this website.

Source: panel/src/capsule-capper.c · tools/draw-shot-capper.c.

Fixture: Built-in sample package catalog and queue; third-party names identify examples only.

- [Application catalog](assets/native/capper.png) — SHA-256 b1c6535bb9769acec5794a7513776257b1e3bd175b2d7be6aabb13cd68697257
- [Install your own](assets/native/capper-own.png) — SHA-256 bb4dbef6f6417e4198a75c08badf29644aaaa5aa56f0bc703c27cd67213be170

### Encapsulator

Encapsulator is a distinct mode of the native Capper program. It exposes the bulk-import queue, identified systems, firmware information and per-item review. The sample queue does not import or distribute its named contents.

Source: panel/src/capsule-capper.c · draw_bulk · tools/capsule-import.

Fixture: Existing native harness bulk-queue fixture; metadata only. No game media or cover art.

- [Bulk import review](assets/native/encapsulator.png) — SHA-256 5470beb895574198807ae6ffcc386ea0f293ca8784a9a85c61a5cc2c908ebd69

### App properties

The native Properties window has more controls than the three-switch exercise. Compare its Permissions page with How it runs, which reads configurable options from the actual Wine runtime definition.

Source: panel/src/capsule-permissions.c · tools/capsule-prefs · runtime-defs/wine-11.15-staging.json.

Fixture: Fictional Sample Notes manifest requesting Documents and speakers; no payload, real signature, or runnable application.

- [Permissions](assets/native/permissions.png) — SHA-256 96023cdb4a997c79f2f1c051b229bbb7af092b8ae99cff7feab0a57e519be5fa
- [How it runs](assets/native/runtime-options.png) — SHA-256 8b3523597a278f5e072da9706d772770537a60952b41e8480a0c3b0a585cae20

### Gaming Mode

The actual Gaming Mode settings page exposes its current controls. Source implementation also interacts with power/idle behavior and application visibility. The image is not a performance benchmark.

Source: panel/src/capsule-settings.c · compositor/src/capsule-wm.c.

Fixture: Isolated preferences; the harness may populate demonstration capsule metadata for this page.

- [Gaming Mode](assets/native/gaming.png) — SHA-256 31f458fe48dd1690b02d1fd63fee572595873c7f88b2f15d83b6652c052ac3fd

### Displays & maintenance

Displays, Storage and Updates are real Settings pages. These captures show the UI in an offscreen environment; display/hardware availability and update discovery are not evidence about a physical machine.

Source: panel/src/capsule-settings.c.

Fixture: Isolated home in WSL; Storage lists the build environment’s virtual disks, Displays has no reported connectors, and Updates shows an environment without an installed-image identity. No settings or disks were changed.

- [Displays](assets/native/displays.png) — SHA-256 aee9e401e517064dc27926f9d3521139bfb317b078c1b7dfdfd2a8883d2c5991
- [Storage](assets/native/storage.png) — SHA-256 70f0b8ccc34d9e515e8f8d1626744c856a346948b16c3802e79cf4c6447db006
- [Updates](assets/native/updates.png) — SHA-256 64353088cb375d1a8c6727603f216addca9fc8fb0cea8c2e130e538dad55b041

### Files

Places and capsule storage share a sidebar. Grid and details views show the same fictional documents. The source also includes multi-selection, drag-and-drop, Trash, network locations and contextual file actions.

Source: panel/src/capsule-files.c.

Fixture: Three authored demonstration documents and two empty folders in a private fixture home; sidebar mount labels come from the build environment.

- [Grid view](assets/native/files.png) — SHA-256 00a2f36dda2281729e3638a43ab7e5e8f428cf52e83a1eb4bac4f5c932ecc480
- [Details view](assets/native/files-details.png) — SHA-256 fee0e932d9793b640224739fcdb3d515691ffc40cb9b52e6519892ed4cb1f784

### Sound

The actual Sound window has separate pages for mixer controls, equalization, routing, system sounds and keyboard sounds. The preview shows sample devices; it does not read or change your audio.

Source: panel/src/capsule-sound.c · tools/draw-shot-sound.c.

Fixture: Synthetic audio devices and levels from the existing native harness.

- [Mixer](assets/native/sound.png) — SHA-256 90c5bf916a01a6a150f3cdd3990e36c3c9a10faaa0907b9eb7344c730e1d112b
- [Equalizer](assets/native/equalizer.png) — SHA-256 d12ff5df38e80fe800560ac5c0a02e1e6d6151734508b774f8e477d299a052d4

### Network

The native Network window includes Wi-Fi, Bluetooth, wired connections and tests. These frames show the actual interface with invented networks and devices, not nearby equipment or measured connection results.

Source: panel/src/capsule-network.c · tools/draw-shot-network.c.

Fixture: Synthetic networks and Bluetooth devices; no scan or connection is made.

- [Wi-Fi](assets/native/network.png) — SHA-256 9a9f286f6b266828a37d5edb04336a8f6e468544e4a1165bae43e4e5f5a000a6
- [Bluetooth](assets/native/bluetooth.png) — SHA-256 20a2b62edc6264066868fb984ade86dd4cc73c6d363959b3ac97c86e742778a8

### Accessibility

This is the current Accessibility page from Settings. Text size and keyboard assistance are implemented in the shared UI/compositor paths. The native page and its limits matter more than a generic accessibility promise.

Source: panel/src/capsule-settings.c · shared/uiscale.h · shared/keyassist.h.

Fixture: Isolated preferences at normal text scale; no accessibility certification.

- [Accessibility controls](assets/native/accessibility.png) — SHA-256 7413e5834148d9a5841f735227e412e5cb06b83074a663887907f07f898e07f9

### Guided setup

The installer collects account and desktop setup before formatting. This is the real setup-page renderer with fixture values. No disk is selected, formatted, installed, or restarted by the website.

Source: panel/src/capsule-install.c · panel/src/install-profile-ui.h.

Fixture: Harness-generated account details; no credentials from this computer.

- [Account setup](assets/native/install.png) — SHA-256 1e7c4920b3de58f69c86575dfad4cdbe04d34c8c9dc794b9475ab244190f263e

### Diagnostics

Logs includes event views, application launch records and a report page. This frame shows the report explanation before collection. It does not contain a report from your computer.

Source: panel/src/capsule-logs.c · tools/status-report.sh.

Fixture: Report landing page only; no system report collected.

- [Report page](assets/native/logs.png) — SHA-256 fe939dca5c93c45a106661a9360a0b78bb5091839a65f428a26b7fef1ee28487

## Inspected source fingerprints

These fingerprints identify source files inspected after capture. They do not assert a reproducible binary build or an immutable whole-tree revision.

- shared/theme.c: d2baebec26f28f46a147388c5340887ea493ae50eb2e47c093a07705b97877ea
- shared/wallpaper-scenes.c: 54628efe3e6c7ce3e748ab98c51812c7fb1483162ec5fbb179966fff041ec53f
- panel/src/capsule-settings.c: 438c1f47105c3844dcd2a17afcb9f4129c43ab0e724c6dbd3e365778a10d1172
- panel/src/capsule-panel.c: f8913f5896dba8de3005ba25ba2aee5ab1a5ef431a4bfd4e8d094c480e413980
- panel/src/capsule-library.c: 429337b900d9af7a8a8019e9645682dd3dc95277cc9e82023cd9ea5e06b4087c
- panel/src/library-home-ui.h: 645e37d4acbeb0fc69ba9fd42006794cbc6874e01fae07d998e83f14b291a39a
- panel/src/capsule-capper.c: 81d292e1d22777eec1f52bca815f6d47ca81a1f9b0b8279ec9b0367cb69beb5c
- panel/src/capsule-files.c: ac52b4984c1ed871c3a937d9e620abced7d8b572c2db1476552c1b358053780d
- panel/src/capsule-sound.c: 02c7cdf7d26600f6ebb3df40f2978d9340d483b1a47135c0dac85a75e2d642a2
- panel/src/capsule-network.c: a32b788f88ef2cb9baee3c6ddcbc90ee53b7e72f5a818223f549d8f9bfca1ff5
- panel/src/capsule-install.c: 6c2384071d9f191f18a9a3275e6f424078776e764401ed5f759758241679d7fa
- panel/src/capsule-permissions.c: 1e0acd4c3bb10c04658c27893bedc3b7b9bff4f9141104b011e6766776a76949
- panel/src/capsule-logs.c: 00b3fe78495060d59bbaebf72de1de3f9025e91649f099356d3a29fae92a7c82
- design/settings-organization.md: d27ee07f6016172067c95880e2aae3806bc76651b41dc9bba1dd742336e5bd48

## Rights and accuracy

The drawing code is project code under the repository’s GPL-3.0-or-later policy. Third-party names in native fixture catalogs/devices are identification examples, not endorsements, downloads, verified compatibility, or bundled artwork. Monogram fallbacks are the native renderer’s output. No game cover, firmware, application payload, or private document is included. Fictional file contents were authored for the demo. Native on-screen wording is preserved even when a harness state is incomplete or old copy remains; captions explain the limits.

The Settings reorganization catalog describes a target design and is not presented as the current native navigation. The settings list below comes from the application’s actual PAGE_NAME table.

## Current Settings pages

- Appearance
- Wallpaper
- Fonts
- Accessibility
- Top bar
- Dock
- Desktop
- Displays
- Display Filters
- Keyboard & Pointer
- Hardware
- Storage
- Users
- Network
- Gaming Mode
- Systems
- Startup
- Power
- Security
- Screen Saver
- Date & Time
- Passwords
- Updates
- Reset
- About

## Runtime definitions (not compatibility results)

- deb-app — runtime-defs/deb-app.json
- dosbox-staging — runtime-defs/dosbox-staging.json
- gargoyle — runtime-defs/gargoyle.json
- java — runtime-defs/java.json
- libretro — runtime-defs/libretro.json
- pcsx2 — runtime-defs/pcsx2.json
- ruffle — runtime-defs/ruffle.json
- scummvm — runtime-defs/scummvm.json
- texlive — runtime-defs/texlive.json
- win31 — runtime-defs/win31.json
- wine-11.15-staging-mono — runtime-defs/wine-11.15-staging-mono.json
- wine-11.15-staging — runtime-defs/wine-11.15-staging.json
- xemu — runtime-defs/xemu.json
- xenia-canary — runtime-defs/xenia-canary.json
