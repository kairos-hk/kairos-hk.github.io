# Allan Lab template adaptation — design QA

final result: passed

## Latest revision: English-only content and plain lists

The site now has eight pages. All rendered page text, titles, descriptions,
image alt text, navigation labels, search messages, and accessibility labels
are English. The Research source page, generated route, navigation entry and
homepage link have been removed. Homepage research interests remain a short list.

Talks, Teaching & Community contains four plain list entries; Entrepreneurship
& Global Commercialization contains three. Awards are fully expanded lists by
year, and Contact uses a vertical list. Card styles and Research-only CSS were
removed. The Allan Lab typography, navigation and homepage News layout remain.

Current browser evidence:
`/tmp/kairos-portfolio-redesign/english-activities-desktop.jpg` (1280 × 900,
1 CSS pixel per image pixel, About scrolled to teaching-and-service).
The screenshot confirms ordinary bullets, no card backgrounds/borders/shadows,
and the five remaining navigation links. At 320px, About and Publications have
no horizontal overflow. English menu navigation, the single-result Talks filter,
and zero-result search messages were verified in Chrome.

Strict production/preview builds, JavaScript syntax and Git whitespace checks
passed. Static checks confirmed no Korean text in any of the eight rendered
HTML pages, no Research output or links, valid internal links/assets/anchors,
nine publication records and sixteen awards. Original source data translations
remain unused in `_data`; they are not published. No deployment was performed.

The following evidence documents the earlier template comparison, before this
English-only/list revision. Its former Research route and Korean copy checks
are historical, rather than descriptions of the current site.

## Earlier template comparison: visual truth and evidence

Source: https://www.allanlab.org/ (captured in Chrome, 2026-10-12).
Implementation: http://127.0.0.1:4000/.
The user requested the source template's appearance with their own CV content;
this is a personal academic adaptation, not a copy of the lab's research content.

All captures are content-only browser screenshots at 1 CSS pixel per image pixel.
No density normalization was needed. Default theme, home route, menu closed.
The source carousel is in different slide states on desktop and mobile; its
scientific imagery is intentionally not reused in this personal portfolio.

| Evidence | Path | CSS viewport / image pixels |
| --- | --- | --- |
| Source desktop | `/tmp/kairos-portfolio-redesign/allan-desktop.jpg` | 1280 × 900 |
| Implementation desktop | `/tmp/kairos-portfolio-redesign/allan-style-desktop.jpg` | 1280 × 900 |
| Source mobile | `/tmp/kairos-portfolio-redesign/allan-mobile.jpg` | 390 × 844 |
| Implementation mobile | `/tmp/kairos-portfolio-redesign/allan-style-mobile.jpg` | 390 × 844 |
| Combined desktop comparison | `/tmp/kairos-portfolio-redesign/comparison-desktop.jpg` | 2560 × 930 including labels |
| Combined mobile comparison | `/tmp/kairos-portfolio-redesign/comparison-mobile.jpg` | 780 × 874 including labels |
| Focused typography/navigation comparison | `/tmp/kairos-portfolio-redesign/comparison-type-v1.jpg` | two 1000 × 190 crops |

The combined images were opened and visually reviewed. The focused comparison
makes heading weight, navigation size, panel borders and alignment readable.

## Required fidelity surfaces

- **Fonts and typography:** the same Source Sans Pro family, normal and bold
  weights, 16px body, 20px brand, 41px regular h1, and 1.42857 body line height.
  Fonts are locally hosted with their OFL license. Korean explanatory copy uses
  system fallback. Long publication titles wrap without clipping.
- **Spacing and layout:** the source's 1000px container, 70px body top padding,
  two-thirds main / one-third News grid, 16px main gutters and 26px News gutters
  are reproduced. Both home h1 positions are x=156, y=92 at 1280px. The News
  panel begins at x=832.66, y=70 and measures 281.33px in both captures.
- **Colors and tokens:** original Bootstrap/Lumen white background, #555 body,
  #333 headings, #158cba links, #f8f8f8 navigation and #fafafa wells. Borders and
  inset panel shadow match the source. Current-page navigation has a darker
  text state to indicate location.
- **Image quality:** the existing real 460px portrait is displayed at 200px on
  desktop and 180px on narrow mobile. Its aspect ratio is preserved. Research
  carousel images and institutional logos are replaced by the individual's
  biography and research list, as required by the CV adaptation. No substitute
  illustrations, fake research images or generated logos were added.
- **Copy/content:** academic labels and factual sections replace promotional
  headings. Nine publication/talk records and sixteen awards remain intact.
  MITx is described as coursework, and patents remain applications. The source
  site's lab recruiting text and scientific claims are not reused.

## Findings and comparison history

1. Initial home desktop/mobile comparison: shared typography, colors, grid and
   navigation match the template. Expected differences are the shorter personal
   brand, portrait, CV text, research list and individual News entries. Mobile
   branding fits one row; the source's wrapped brand overlaps the heading,
   which is intentionally corrected in the implementation.
2. **[P2, resolved] About portrait detached from biography.** Secondary-page
   review found the old `profile-banner` class had no matching layout after the
   theme change, putting the photo below the biography with excessive empty
   space. Initial evidence: `/tmp/kairos-portfolio-redesign/about-v1.jpg`.
   Fixed the include to use `profile-intro` and correct square image dimensions.
   Rebuilt and captured `/tmp/kairos-portfolio-redesign/about-v2.jpg` at the same
   1280 × 900 viewport. The combined before/after image
   `/tmp/kairos-portfolio-redesign/comparison-about-fix.jpg` confirms the portrait
   and biography are aligned and education follows without the empty region.
3. Final home comparison recaptured after that fix; the shared layout remained
   unchanged. No actionable P0/P1/P2 fidelity issues remain.

## Verification and implementation checklist

- [x] Strict-front-matter Jekyll production and preview builds.
- [x] JavaScript syntax check and `git diff --check`.
- [x] All nine page routes, unique h1/main, internal assets/links/hash targets.
- [x] Mobile menu open, close, navigation and Escape focus restoration.
- [x] Publication filters: six papers, one talk, two other records.
- [x] Search result, zero-result message and native abstract expansion.
- [x] 320px mobile overflow checks on About, Research, Publications, Awards,
  Contact; 390px home and 768px navigation.
- [x] Desktop About and Research visual inspection.
- [x] Browser console checked: no captured errors or warnings.
- [x] Original publication fields unchanged; source CV excluded from output.

## Follow-up polish / limits

The original link color is retained for visual fidelity; this report is not a
full WCAG conformance audit. Source carousel, hover states and recruiting flows
are intentionally outside the personal site's scope. No production deployment
was performed.
