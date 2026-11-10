# CLAUDE.md — swapnilb222.github.io

Personal portfolio site for **Swapnil Bhole**, hosted on GitHub Pages at
**https://swapnilb222.github.io/** (repo `swapnilb222/swapnilb222.github.io`, branch `main`, served from root).

## Goal

1. **Rank #1 on Google for "Swapnil Bhole".** This is the reason for the rewrite. The old site was a
   client-side React/Babel app whose HTML body was an empty `<div id="root">`, so crawlers saw almost nothing.
2. **Convert recruiters** hiring for real-time systems / 5G PHY / FPGA / embedded / GPU roles. A recruiter
   should know who Swapnil is, what Swapnil has done, and how to reach them within ~10 seconds.

Visual reference: https://anganab.github.io/ (AcademicPages/Jekyll): sidebar profile, top nav, short bio,
research tree, dated news. We keep that structure but fix its weaknesses (see "Improvements over the reference").

## Who Swapnil is (source of truth: `Resume_Swapnil_systems_I.pdf`)

- Real-time systems engineer: 6 years building and debugging 5G PHY and embedded systems on FPGA + ARM,
  plus GPU performance work. Integrates hardware, firmware and ML under strict latency limits.
- **Currently: Software Lead, OpenExo team, University of Michigan, Ann Arbor.** Leads the data-collection
  software for a wearable exoskeleton research platform: extends the open-source OpenExo C++ firmware (Teensy)
  and a Raspberry Pi Pico W sensor platform to stream IMU, EMG and FSR data to a Python/Qt GUI. **Sep 2026 – present.**
- M.S. Electrical & Computer Engineering, University of Michigan, Aug 2024 – May 2026, GPA 3.7/4.0.
- B.E. Electronics & Communication, VNIT Nagpur, 2014 – 2018, GPA 8.9/10.
- C-DOT (India's national telecom R&D lab), Bengaluru, Aug 2018 – Jul 2024:
  Senior Engineer (EII) 2021–2024 (5G O-RU PHY testbed on Zynq-7000 + Intel FlexRAN), Engineer (EI) 2018–2021 (LTE conformance/validation).
- 4 IEEE publications (COMSNETS 2020, SPCOM 2020, ICCMC 2020, SCEECS 2018).

When the resume and the old `src/data.jsx` disagree, **the resume wins** (e.g. CUDA speedup is **355×**,
13.5 s → 0.038 s on a Tesla V100, not 380×). Never invent metrics, titles, dates or employers. If a fact
isn't in the resume or this file, ask.

### Speed Demon 2026 (performance-engineering championship) — featured project

Source of truth: repo https://github.com/swapnilb222/sweet-dreams-demon-sub (public; each `track-*/PERF.md`
and `README.md`) and the event brief at `C:\SWAPNIL\SpeedDemon\challenge.md`.

- Event: 72-hour online performance championship by Hackathon Raptors, Oct 30 – Nov 2, 2026
  (https://speeddemon.dev). Every team gets the same task, the same data and the same scoring machine
  (Intel i5-13500, 12 threads, 8 GB cap). Output must match the reference byte for byte (sha256).
  Score rewards wall time, peak memory and fewer lines of code.
- **Solo entry** (team name "sweetdreams", one person). Entered **all four tracks**, each a dependency-free C++20 rewrite of a Python reference.
- Results measured on the live board (best recorded run per track; use these exact figures):

| Track | Task | Python reference | Our best board run | Speedup | Notes |
|---|---|---|---|---|---|
| A · Ingest | 3.1M log lines → per-endpoint p50/p95/p99 + error rates per hour | 32.05 s | **0.020 s, 24 MB** | ~1,600× | rank 11 when recorded |
| B · Index | 50,000 boolean + phrase queries over a 250 MB corpus | 56.35 s, 2.2 GB | **0.217 s, 41 MB** | ~260× | rank 29 when recorded (v12) |
| C · Join | CSV join + per-country aggregates/distinct counts | 14.44 s, 367 MB | **0.024 s, 9 MB** | ~600× | 83.75 points |
| D · Traverse | 2,000 shortest-path queries, 1.74M-node / 5M-edge road graph | 72.69 s, 893 MB | **0.0849 s, 56.6 MB** | ~850× | **top 3 on the Track D leaderboard** |

- Techniques to mention (pick 3–4 for the card, full list on the project page):
  AVX2 SIMD parsing, carry-less-multiply quote masks, AES-NI hashing, lock-free shared hash tables,
  branch-free selection for percentiles, bidirectional Dijkstra with bucket queues, chain contraction +
  locality-preserving BFS renumbering, profile-guided static builds, memory-peak engineering
  (THP control, `MADV_DONTNEED`), and verification with ASan/UBSan/TSan plus sha256 checks on every run.
- Placement: write it as **"top 3 of the Track D (Traverse) leaderboard"**, solo entrant (Swapnil's wording; do not write "3rd" or "placed 3rd"). That is the
  headline result. Don't claim a prize or an overall rank. Track A/B ranks above are mid-event board
  positions; leave them off the site.
- Write-up (Track D, on DEV): https://dev.to/swapnilb/23-minutes-before-the-freeze-shortest-paths-at-hackathon-raptors-speed-demon-2kj0
  (linked from the project meta line, the Track D bullet, and the Nov 2026 news item).
- Focus-area branch: **Performance & ML Systems** (listed first in that branch).

## Architecture

**Plain static HTML + one CSS file. No build step, no framework, no JavaScript required to read any content.**

- Every page must contain its full content in the served HTML. Crawlers and `curl` must see the text.
- JS is allowed only for optional enhancement (e.g. mobile nav toggle) and the page must work with it off.
- No CDN dependencies (no jQuery, Font Awesome, React, Babel, MathJax, analytics). Icons are inline SVG.
- Fonts: system font stack. At most one self-hosted webfont if it clearly earns its weight.
- Preview locally by opening the HTML file in a browser, or `python -m http.server` from the repo root.

### Layout

```
index.html            Home: name, headline, bio, focus-area tree, recent news (5–6 items)
projects.html         All projects grouped by focus area
experience.html       Work + education timeline
publications.html     4 IEEE papers
news.html             Full news archive
404.html
assets/
  css/site.css
  img/swapnil-bhole-{320,640}.{webp,jpg}   profile photo, generated from /me.jpeg (gitignored source)
  img/og.jpg                               1200×630 social preview (photo + name + headline)
  img/favicon-32.png, img/apple-touch-icon.png
  Swapnil_Bhole_Resume.pdf (copy of /Resume_Swapnil_systems_I.pdf; exact case, links must match it character for character)
robots.txt
sitemap.xml
```

Shared header/sidebar/footer are copied into each page (no includes without a build). When editing one,
update all pages. Keep the page count small so this stays manageable.

The old React app (`src/`) has been removed; it remains in git history.
`me.jpeg` and `Resume_Swapnil_systems_I.pdf` in the root are gitignored sources; re-export into `assets/` when they change.
404.html uses root-absolute links (`/assets/...`) because GitHub Pages serves it at any path.
`scraps/` and `uploads/` are gitignored working folders, so don't publish from them.

### Page structure (every page)

- **Sidebar** (sticky on desktop, collapses to a top card on mobile): photo, name, one-line title,
  "Ann Arbor, Michigan", links: Email, LinkedIn, GitHub, Google Scholar, Resume (PDF).
- **Top nav**: Swapnil Bhole (home) · Projects · Experience · Publications · Resume.
- **Footer**: © year Swapnil Bhole, links repeated, last-updated date.

### Home page content order (recruiter-first)

1. `<h1>Swapnil Bhole</h1>` + headline: "Real-time systems engineer: 5G PHY, FPGA/SoC, embedded & GPU".
2. Bio paragraph (3–4 sentences): current role as OpenExo Software Lead at U-M, 6 years at C-DOT on 5G/LTE, M.S. ECE from U-M,
   what kinds of roles Swapnil is open to. Include a clear call to action with email + resume link.
3. **Focus-area tree** (our version of the reference site's research tree): root "Hardware for wireless &
   ML systems" → branches, each listing its projects with a short metric:
   - RTL & Computer Architecture: RISC-V 2-way OoO superscalar, DVB-RCS turbo decoder
   - 5G / Wireless PHY: 5G O-RU PHY on Zynq-7000, LTE eNodeB 3GPP validation, ML joint coded modulation for LoRa
   - Performance & ML Systems: Speed Demon 2026 (top 3 on Track D, solo; up to ~1,600× faster than reference), CUDA CNN inference (355×), GPU novelty metric for MLIPs, assistive vision system
   - Embedded & Products: OpenExo data-collection software, SIM908 fuel-notification device, ESP32 IoT, SmartQRX
4. Selected highlights (3–4 hard numbers, e.g. 355× CUDA speedup, 1.6M+ packets zero drops at 245.76 Mbps,
   Speed Demon: top 3 on Track D, 72.69 s → 0.085 s, 6 yrs 5G/LTE).
5. **News**: newest first, 5–6 items, "All news →" link to `news.html`.

## Design system (light theme)

- Light by default. Automatic dark mode via `prefers-color-scheme: dark` (same layout, inverted tokens).
- Calm, academic, high readability, close to the reference's restraint but more polished.
  - Background near-white (`#fbfbfa`), text near-black (`#1a1a1a`), muted gray for metadata.
  - One accent color (a deep blue, e.g. `#1f4fd1`) for links and focus rings only. Don't use gradients.
  - Body 17px/1.65, max line length ~70ch. Clear heading scale.
  - Generous whitespace, thin 1px dividers, no heavy shadows, no animations beyond subtle hover.
- Accessibility: WCAG AA contrast, visible `:focus-visible`, semantic landmarks (`header/nav/main/aside/footer`),
  meaningful `alt` text, skip-to-content link, tap targets ≥ 44px.
- Print stylesheet: hides nav, prints the page as a clean one-column document with link URLs.
- Must look right at 360px, 768px and 1280px wide.

## SEO checklist (every page must pass)

- `<title>` with the name first on the home page: `Swapnil Bhole: Real-Time Systems Engineer (5G PHY, FPGA, GPU)`;
  subpages: `Projects | Swapnil Bhole`, etc.
- Exactly one `<h1>`; on the home page it is the literal text "Swapnil Bhole".
- Unique `<meta name="description">` (150–160 chars) per page, mentioning the name.
- `<link rel="canonical" href="https://swapnilb222.github.io/...">` (lowercase host, trailing slash on home).
- Open Graph + Twitter card tags with `og:image` = `assets/img/og.jpg` (absolute URL).
- JSON-LD `Person` on the home page: `name`, `url`, `image`, `jobTitle`, `worksFor` (University of Michigan),
  `alumniOf` (University of Michigan, VNIT Nagpur), `knowsAbout`, and `sameAs` with LinkedIn, GitHub
  and Google Scholar. Never leave `sameAs` null.
- `robots.txt` allowing all and pointing to the sitemap; `sitemap.xml` listing every page with `lastmod`.
- Images: explicit `width`/`height`, `loading="lazy"` below the fold, photo `alt="Swapnil Bhole"`.
- Run a link check before committing; every internal link (especially the resume PDF) must resolve with exact case.

After deploy (manual, by Swapnil): verify the site in Google Search Console, submit `sitemap.xml`,
request indexing for the home page; put the URL on the LinkedIn profile, GitHub profile website field, and email signature.

## Improvements over the reference site (keep these)

- Name in `<h1>` and title (theirs says "About Me"); real meta description (theirs is "About me"); populated `sameAs`.
- No JS/CDN weight; page should be well under 150 KB total including the photo.
- News capped on the home page, with an archive page (theirs is one very long scroll).
- Dark mode, print stylesheet, social preview image, optimized photo.

## Contact details

- Public email: **`swapbhole22@gmail.com`** (Swapnil's choice; the resume PDF itself lists `swapnilb@umich.edu`, which is fine).
- LinkedIn: https://www.linkedin.com/in/swapnilbhole22/
- GitHub: https://github.com/swapnilb222
- Google Scholar: https://scholar.google.com/citations?user=9-59zuwAAAAJ&hl=en
  (link it from the sidebar, footer, JSON-LD `sameAs`, and a "Google Scholar →" link on publications.html;
  in HTML attributes the `&` must be written `&amp;`)
- Do **not** put the phone number in page HTML (scraper bait). It is in the resume PDF only.

## News (newest first)

- Nov 2026: Finished in the top 3 of the Track D (graph traversal) leaderboard at Speed Demon 2026, a 72-hour
  performance-engineering championship, competing solo. Rewrote all four tracks in dependency-free C++;
  up to ~1,600× faster than the Python reference on the official scoring machine. Link the repo and the write-up.
- Sep 2026: Started as Software Lead, OpenExo team, University of Michigan.
- May 2026: Graduated with M.S. in ECE from the University of Michigan.
- 2026: LeaderShape Institute, University of Michigan.
- 2026: Semifinalist, Munger Case Competition (PathForward).
- 2025: Semifinalist, Michigan Business Challenge (SmartQRX).
- 2025: Presented Assistive Vision System at the 4th Annual Disability Visibility in Engineering Symposium, U-M.

Format: `<li><time datetime="2026-05">May 2026</time> text</li>`. Swapnil will add more items later.

## Open items (ask Swapnil, don't guess)

- Exact dates for the news items marked with a year only.

## Working conventions

- Commit only when asked. Commit messages in imperative mood, short subject line.
- Keep content edits and design edits in separate commits where practical.
- After any change, check: HTML validates, no broken links, page readable with JS disabled, Lighthouse
  SEO/Accessibility = 100 and Performance ≥ 95 on mobile.
