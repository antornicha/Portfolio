# Ornicha Boonkratoke Portfolio — Plan

## Product direction
A bilingual (Thai/English), multi-page portfolio for Miss Ornicha Boonkratoke / Ant. Each main navigation item is a real HTML page, not a single-page landing page. The site is static-first so it can be uploaded directly to GitHub Pages, Netlify, or Vercel.

## Design
- **Movement:** editorial minimalism with a dark digital-studio mood.
- **Principles:** calm hierarchy, generous spacing, high-contrast reading, and small moments of interaction.
- **Color philosophy:** deep navy and near-black establish trust and focus; muted pink provides warmth and a personal signature without becoming loud.
- **Layout paradigm:** asymmetric editorial columns, project cards, and timeline rows rather than a generic centered grid.
- **Signature elements:** pink gradient accent line, numbered section labels, and soft glass panels with fine borders.
- **Interaction:** navigation is explicit and page-based; cards lift slightly on hover; focus states are visible and accessible.
- **Animation:** restrained fade-up reveals and gradient movement only; respects `prefers-reduced-motion`.
- **Typography:** Space Grotesk for English display/UI, Noto Sans Thai for Thai copy, with system fallbacks.
- **Brand essence:** a thoughtful creative-media student translating ideas into clear, interactive digital experiences. Personality: curious, precise, imaginative.
- **Brand voice:** direct, warm, and quietly confident. Example lines: “Designing interfaces with a human point of view.” / “ผลงานที่ทำให้ไอเดียใช้งานได้จริง”
- **Wordmark:** “ANT / ORNICHA” with a small orbit dot motif.
- **Signature brand color:** muted pink `#e8a0b8`.

## Structure
- `th/` — Thai pages: Home, Education, Portfolio, Activity, Contact.
- `en/` — English pages: Home, Education, Portfolio, Activity, Contact.
- `assets/styles.css` — shared responsive visual system.
- `assets/content.js` — editable links, image names, and optional media values.
- `assets/site.js` — shared navigation, year, reveal animation, and contact form helper.
- `assets/profile.svg`, `assets/p1.svg` … `assets/p6.svg` — safe visual placeholders; replace with JPG/PNG/JPEG/SVG using the same base names.
- `README.md` — editing and deployment guide.
- `AI-USE-DECLARATION.md` — filled draft for exporting as PDF.
