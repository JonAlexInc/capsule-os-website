# Capsule OS website

Public showcase for the Capsule OS project.

Website: https://jonalexinc.github.io/capsule-os-website/

This repository contains only the static website, deterministic native UI captures and a labeled material review sheet. Current Paper/Jelly Material Studio and Files source renders run through Capsule OS commit `5b2cb22`; physical material construction through `35ed04c`; shell interaction source through `422901a`; and Material World 06 was installed from source `22d7254977f09eb8e341776b31cf7cc4d898fc96` and independently checked read-only in a powered-off COS VM. Native captures show real drawing code with documented sample state. Approved concept art appears only where it is visibly labeled as art direction, never as a running screenshot. The offline verification does not replace a guest visual or interaction pass, and none of these images is a compatibility certification or a released ISO.

## Publishing

GitHub Pages publishes the main branch at its root. The .nojekyll file preserves the authored HTML, JavaScript, CSS, Markdown references, and images without a site-generator conversion. Updating these files on main updates the website.

## Content

See SOURCES.md and NATIVE-CAPTURES.md for provenance, fixtures, and limitations. Project code is GPL-3.0-or-later; see LICENSE.txt. No OS images, application payloads, firmware, game media, or third-party cover artwork are included.
