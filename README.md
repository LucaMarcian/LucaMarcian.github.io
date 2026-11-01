# Your academic website

Static HTML, CSS, and JavaScript. No installation or build needed. Nothing has been published.

## License: original website code only

Luca Emanuele Marcianò dedicates the original website code to the public domain under **CC0 1.0 Universal**, to the extent of his copyright and related rights. The complete, unmodified [official CC0 legal text](https://creativecommons.org/publicdomain/zero/1.0/legalcode.txt) is in [LICENSE](LICENSE).

Anyone may freely copy, modify, reuse, and redistribute the original code, including commercially, without attribution. This covers original HTML layout, CSS, JavaScript logic, and configuration structure in `index.html`, `css/styles.css`, `js/scripts.js`, `content.js`, and `.nojekyll`. In files mixing code and content, only the code is covered.

**Excluded unless explicitly stated otherwise:** academic papers, reports, abstracts and other research content, CVs, photographs, personal biography/contact content, all third-party assets, and all files under `assets/`. Their presence in this repository does not grant permission to copy, redistribute, or relicense them. In particular, the font files retain their SIL Open Font Licenses; the favicon images are not dedicated under CC0.

Existing third-party licence, copyright, and attribution requirements must be preserved. CC0 applies only to rights held by the affirmer and does not remove other people's rights or licence conditions. It does not grant trademark or patent rights. See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for the asset inventory, inherited template notices, and unresolved permissions. Keep the relevant notices with any third-party material you redistribute.

The favicon is adapted from **“Italian traffic signs - icona scuola” by Gigillo83**, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Italian_traffic_signs_-_icona_scuola.svg), licensed under [CC BY-SA 3.0 Unported](https://creativecommons.org/licenses/by-sa/3.0/). Changes by Luca Emanuele Marcianò: AI-assisted adaptation/recolouring to the website palette, an accent border, PNG export, and resizing. The three favicon image files remain under **CC BY-SA 3.0**, not CC0. Anyone redistributing or adapting them must preserve the attribution, source and licence links, identify changes, and follow the ShareAlike terms. See [the full licence](LICENSES/CC-BY-SA-3.0.txt) and [the notices](THIRD_PARTY_NOTICES.md).

The review supports a scoped dedication of original code; it does **not** certify ownership or clearance of every item in the repository. The photograph and PDFs need their respective rights holders' permission for reuse outside any existing authorization. The favicon source and licence have now been verified through Wikimedia Commons file metadata.

## Files

- **content.js**: your name, biography, contact details, CV, social URLs, and all research.
- **index.html**: page layout and section headings.
- **css/styles.css**: colours, fonts, spacing, and mobile layout.
- **js/scripts.js**: displays your content and highlights the current section.
- **assets/img/picture.jpg**: your photo, preserved.
- **assets/pdfs/**: put your CV and papers here.
- **assets/fonts/**: locally hosted fonts and their licenses.
- **assets/icons/**: original simple SVG social icons.

## Edit your information

1. Make a backup copy of `content.js`.
2. Open `content.js` in a plain-text editor such as Notepad.
3. Replace the text **inside the double quotes**. Keep the quotes, commas, and brackets around it. Every `[square-bracketed phrase]` is a placeholder to replace.
4. Save the file. Double-click `index.html` to preview, or refresh your browser if it is already open.

Example: change `name: "[Your name]",` to `name: "Alex Smith",`.

In biography text, write links as `[University name](https://example.org/)`. They open in a new tab. Use `\n` for a line break within a paragraph; use a separate quoted item in the biography list for a new paragraph. Biography paragraph spacing is controlled by `.biography p` in `css/styles.css` (currently 20px).

Apostrophes can be typed normally. For double quotes inside text use `\"`, for example `"Research on \"education\""`. Keep each paragraph on one line in the file; the browser wraps it automatically. Add paragraphs as additional quoted lines, separated by commas, in the biography list.

### CV and papers

Copy PDFs into `assets/pdfs/`. Use simple filenames such as `my-cv.pdf`.
Change `cv: "",` to `cv: "assets/pdfs/my-cv.pdf",`.
Within a paper, change `pdf: "",` to `pdf: "assets/pdfs/paper-one.pdf",`.
External PDF URLs beginning with `https://` also work. Filenames are case-sensitive on GitHub Pages.

Until supplied, PDF and CV fields display labelled, non-clickable placeholders to avoid broken links. Replace these before publishing.

### Email and social profiles

Fill the `email`, `linkedin`, and `github` fields with your email and full profile URLs. Example: `github: "https://github.com/YOUR-USERNAME",`.
Social icons remain non-clickable until their URLs are supplied. External websites, CVs, PDFs, and slides open in a new tab so your website stays open. Section navigation stays on the current page. Email links launch the visitor's configured email application.

### Research entries

Each section has one example paper with title, coauthors, status, PDF, and abstract. Replace these fields with your own information.
Work in Progress now contains your four supplied projects. Blank status and abstract fields are hidden, and no PDF placeholder is shown for these projects.
To link coauthors, use a list of name/URL pairs, for example `coauthors: [{ name: "Kelly S. Ragan", url: "https://sites.google.com/site/kellysragan/" }],`. Separate multiple pairs with commas. Plain coauthor text is also supported.
The last project has a `slides: ""` field. Add your slides file path or URL there to activate its link. The CV sentence becomes clickable when you fill in the `cv` field.
For a single-author paper use `coauthors: "",`.
To add a paper, copy its entire block from opening `{` through closing `},`, and paste it underneath in the same section's square brackets. Keep a comma between blocks.
To empty a section use `[]`; the whole section and any navigation link to it will be hidden.

### Temporarily hide Publications and Working Papers

At the top of `content.js`, `visibleSections` has `publications: false` and `workingPapers: false`. These settings hide the entire sections, including headings and separators. To show one later, change its `false` to `true` and add its papers (uncomment the relevant content block by removing its leading `//` markers). No HTML edits are needed. Sections with no entries stay hidden even when set to `true`.
Click or tap “Abstract” to expand/collapse. The native disclosure also supports Enter/Space with keyboard focus.

## Palette and typography

Edit `--background`, `--accent`, and `--text` at the top of `css/styles.css` to recolour the website. The current palette is #d3dbe6 / #81b1ce / #23476a. Accent blue highlights navigation; primary text stays dark for readability.

Body text uses Belgrano, designed by LatinoType. Headings use Source Sans 3. Alternatives for a more traditional heading style are Libre Baskerville or Lora; download the font and its license before changing `--heading-font`.

Both installed fonts use the SIL Open Font License; full license files are in `assets/fonts/`. Sources:

- https://github.com/google/fonts/tree/main/ofl/belgrano
- https://github.com/google/fonts/tree/main/ofl/sourcesans3

The social icons are original simple SVG drawings. Your supplied photo is retained. The reference author's text, PDFs, tracking code, favicon, and profile links have been removed.

## Local preview

Double-click `index.html` to view it. For an HTTP preview, run this command from the project folder:

```text
python -m http.server 8000 --bind 127.0.0.1
```

Visit http://127.0.0.1:8000. Stop the server with Ctrl+C in that terminal.

## GitHub Pages later

The site works at a domain root or repository subpath using relative asset paths. There are no build dependencies, analytics, cookies, or external font requests. The `.nojekyll` file tells GitHub Pages to serve the static files directly. No publishing or GitHub operation has been performed.
