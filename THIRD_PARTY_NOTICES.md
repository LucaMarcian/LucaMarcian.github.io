# Licensing scope and provenance audit

This file records the review performed before adding CC0. It distinguishes known provenance from unresolved rights. It is not a statement that all repository contents belong to the website owner.

## Original code

The HTML layout, stylesheet, JavaScript renderer, and editable configuration structure were rewritten in this project during the customization session. The current files were inspected for external dependencies, copyright headers, copied libraries, and local asset references. No bundled Bootstrap implementation, Font Awesome library, or other JavaScript/CSS dependency was found. The current code uses browser-native APIs and local fonts/icons.

The CC0 dedication applies only to the website owner's rights in original code in `index.html`, `css/styles.css`, `js/scripts.js`, `content.js`, and `.nojekyll`. It excludes personal and research content embedded in those files and any third-party portions. It does not dedicate the original reference repository or assert ownership of other people's contributions. No local Git history was available to establish provenance of older revisions; this review covers the current working files and the available customization-session record.

## Included assets and exceptions

| Files | Provenance / licence | CC0 treatment and requirements |
| --- | --- | --- |
| `assets/fonts/belgrano.ttf`, `assets/fonts/Belgrano-OFL.txt` | Google Fonts distribution; Copyright (c) 2011 LatinoType Limitada; Reserved Font Name "Belgrano"; SIL OFL 1.1. | Excluded. Preserve copyright and OFL text on redistribution. The font cannot be relicensed under CC0. Observe the OFL restrictions on modified font names and selling fonts alone. |
| `assets/fonts/source-sans-3.ttf`, `assets/fonts/SourceSans3-OFL.txt` | Google Fonts distribution; Copyright 2010–2020 Adobe; Reserved Font Name "Source"; SIL OFL 1.1. | Excluded. Preserve copyright and OFL text on redistribution. The font cannot be relicensed under CC0. Observe the OFL restrictions on modified font names and selling fonts alone. |
| `assets/icons/linkedin.svg`, `assets/icons/github.svg` | Simple SVG drawings created during this customization session; no downloaded icon library. They identify third-party services. | Excluded as assets. No claim to ownership of LinkedIn/GitHub trademarks; the code dedication does not grant brand or trademark rights. |
| `assets/img/picture.jpg` | Supplied by the website owner as their photograph. Photographer ownership/permission was not independently established. | Excluded. Being the subject of a photograph does not establish ownership of its copyright. Confirm photographer permission for uses outside any existing authorization. |
| `assets/img/favicon-source.png`, `assets/img/favicon.png`, `assets/img/apple-touch-icon.png` | Adapted from “Italian traffic signs - icona scuola” by Gigillo83, Wikimedia Commons; CC BY-SA 3.0 Unported. | Excluded from CC0. These adapted images are distributed under CC BY-SA 3.0. Preserve the attribution, source/licence links, and change notice below, and follow ShareAlike for adaptations. |
| `assets/pdfs/Marcianò_CV.pdf` | Supplied CV; not independently rights-audited. | Excluded. No CC0 permission is granted for this document or any third-party elements it contains. |
| `assets/pdfs/Italy - Universal Right to Higher Education.pdf` | Supplied academic/policy document; not independently rights-audited. | Excluded. Coauthor, publisher, institution, illustration, and other third-party rights may apply. Separate permission or an explicit existing licence is needed for reuse. |
| Biography, contact details, paper titles, abstracts and other research text in `content.js` / `index.html` | Owner-supplied personal and academic content, potentially including coauthored material. | Excluded, even though stored in code files. No assertion of sole ownership or redistribution permission is made. |

The font licence files are preserved verbatim. Sources:

- https://github.com/google/fonts/tree/main/ofl/belgrano
- https://github.com/google/fonts/tree/main/ofl/sourcesans3

## Favicon attribution — CC BY-SA 3.0 Unported

**Original:** [Italian traffic signs - icona scuola](https://commons.wikimedia.org/wiki/File:Italian_traffic_signs_-_icona_scuola.svg), by [Gigillo83](https://commons.wikimedia.org/wiki/User:Gigillo83), 2010. Source page supplied by the website owner: https://it.wikipedia.org/wiki/File:Italian_traffic_signs_-_icona_scuola.svg. Author, title, and licence were verified using the Wikimedia Commons imageinfo/extmetadata API.

**Licence:** [Creative Commons Attribution-ShareAlike 3.0 Unported](https://creativecommons.org/licenses/by-sa/3.0/); [full legal text](LICENSES/CC-BY-SA-3.0.txt).

**Changes by Luca Emanuele Marcianò:** AI-assisted adaptation and recolouring to dark blue #23476A / pale blue-grey #d3dbe6, an accent border #81b1ce, PNG export, and resizing for browser and touch icons. The modified files `assets/img/favicon-source.png`, `assets/img/favicon.png`, and `assets/img/apple-touch-icon.png` are licensed under CC BY-SA 3.0 Unported. This does not imply endorsement by the original creator.

When redistributing these files, retain appropriate credit, the original title, the source and licence links, this change notice, and any other supplied notices. Distribute further adaptations under the same licence or an option permitted by its terms. No additional restrictions are imposed on the licensed images. The favicon's ShareAlike licence does not change the stated CC0 scope for the separate original website code.

The earlier unresolved source/licence warning for the favicon is superseded by this verified attribution. Photograph, document, and any other third-party rights remain separate.

## Earlier template and reference repository

The initial clone came from https://github.com/Pascuel/Pascuel.github.io and included Start Bootstrap Resume v7.0.5 and Bootstrap v5.1.3 copyright/licence headers. Their large theme and Bootstrap-specific script were replaced during customization. To preserve known upstream provenance and any obligations for inherited fragments, the upstream licence texts are retained:

- [Start Bootstrap Resume MIT notice](LICENSES/StartBootstrap-Resume-MIT.txt), Copyright (c) 2013–2022 Start Bootstrap LLC. Source: https://github.com/StartBootstrap/startbootstrap-resume/blob/v7.0.5/LICENSE
- [Bootstrap MIT notice](LICENSES/Bootstrap-MIT.txt), Copyright (c) 2011–2021 Twitter, Inc. and The Bootstrap Authors. Source: https://github.com/twbs/bootstrap/blob/v5.1.3/LICENSE

Any retained third-party template portions remain subject to their MIT notice requirements, not an attribution-free blanket dedication. The original code added here is covered by CC0 only to the extent of the owner's rights.

No repository-level licence was found in the reference repository's root listing during this review. Its public availability alone is not permission to relicense its author's custom material. No reference-author personal text, PDFs, photo, or analytics were found in the current working files; these were removed/replaced during customization. **If any custom material from that author is later identified or restored, obtain permission or establish a suitable licence before reuse or relicensing.**

## Practical redistribution rule

For an attribution-free CC0 code-only copy, omit personal/research content and excluded assets. If bundling the fonts, preserve their OFL notices and conditions. Preserve applicable MIT notices for any inherited template portions. Do not describe the entire repository, favicon, photo, PDFs, or fonts as public domain.
