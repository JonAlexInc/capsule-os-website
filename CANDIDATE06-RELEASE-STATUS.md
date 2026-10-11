# Candidate06: actual release and acceptance status

Capsule OS **0.6**, build **202610111852**, frozen source **321d317f2372a42be2ec09385fa421dc2d331bba**.

The actual ISO and existing-key signed update are complete. Independent finite image inspection matched 412 package files, 49 runtime paths, 74 dependency mappings, 14 runtime definitions, and 10 capsule manifests; it checked product/base identity, inactive animated policy and BIOS/UEFI boot structures. Signature verification and independent Windows destination readback passed. These are image/content/delivery results; actual boot and installed acceptance are separate.

| Artifact | Bytes | SHA-256 |
|---|---:|---|
| capsule-os-0.6-202610111852.iso | 5,449,328,640 | 3ad1a563c0a89c4502e954b9c5883d1902e7c79f90b7573178f2e307d35d5bbe |
| capsule-os-202610111852.update | 3,379,640,320 | 40b50109d57880b0480dadca5a387e3fc97bc86f7d3c3af3b63eb761bd19f44e |

All 12 Appearance and three Media private cases retain their reviewed scope. Exact accepted Settings/WM/Panel/Player/worker builds are reused. Still wallpapers are included. Only animated wallpapers move to 0.7 by direct human decision. Ubuntu 26.04 base attribution is retained; experimental macOS and Microsoft 365 are not certified.

| Target gate | COS VMware VM | Capsule SSD |
|---|---|---|
| Verified rollback backup | Complete; full disk/configuration/EFI | Pending |
| Fresh read-only target inspection | Complete; accounts, store, trust and EFI inspected | Windows identity verified; Linux store inspection pending |
| C06 signed A/B update | Pending | Pending |
| Separate persistent app/runtime update | Pending | Pending |
| Installed readback | Pending | Pending |
| Actual boot and smoke | Pending | Pending |
| Capsule-to-Windows coldboot clock | Pending | Pending |

Existing accounts, files, credentials, grants and settings must remain preserved. The normal signed A/B updater and separate persistent payload transaction require exact target identity and rollback; a destructive fresh installer is not the update route. A package manifest merge does not establish persistent payload installation.

See [expected support](SUPPORT-STATUS.md) and [RC change history](RC-CHANGE-HISTORY.md).
