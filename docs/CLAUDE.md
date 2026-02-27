# CLAUDE.md — Portfolio Project Context

## Project Description

Personal portfolio website for **André Alcantara**, a designer based in São Paulo, Brazil.
Currently a work in progress — the base layout and bio are live, but portfolio content sections are not yet built.

GitHub: https://github.com/andre-alcantara/portfolio

---

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | 18.2.0 | UI framework |
| Vite | 5.0.0 | Build tool and dev server |
| Plain CSS | — | All styling, no UI library |
| PP Editorial Sans | custom | Primary display font (WOFF2, self-hosted) |

Scripts:
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview production build

---

## Architecture & Conventions

### File Structure
```
portfolio/
├── public/
│   ├── fonts/         # PP Editorial Sans WOFF2 files (10 variants)
│   └── favicon.svg
├── src/
│   ├── main.jsx       # React entry point (renders <App /> into #root)
│   ├── App.jsx        # Single root component, all layout lives here
│   ├── index.css      # Global styles, layout, typography, responsive
│   └── fonts.css      # @font-face declarations for PP Editorial Sans
├── index.html         # HTML shell, title: "André Alcantara, Designer"
├── package.json
└── .github/
    └── copilot-instructions.md
```

### Design Decisions
- **Two-column layout** side by side, full viewport height (`100vh`), with `16px` gap and padding.
- **Left column** (`col-left`): terracotta background (`#bc4132`), role/status labels at top and bottom corners.
- **Right column** (`col-right`): cream background (`#faf9ed`), bio text + metadata (location + time).
- Columns are `flex: 1` — equal width split.
- At `≤ 880px`, layout stacks vertically (`flex-direction: column`).
- CSS custom properties defined in `:root`: `--bg: #faf9ed`, `--text: #0f172a`.
- No component splitting yet — everything is in a single `App.jsx`.
- No router, no state management, no external dependencies beyond React.

### Typography
- Hero bio uses `PPEditorialSans` at `font-weight: 500`, `clamp(26px, 6vw, 40px)`, `line-height: 1.3`.
- Muted inline spans (`className="muted"`) use `rgba(28,10,8,0.5)` to de-emphasize client names and keywords.
- Meta labels (location/time) use `font-size: 20px` with system-ui fallback stack.

### Color Palette
| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#faf9ed` | Page and right column background |
| Left column | `#bc4132` | Terracotta accent |
| Hero text | `#2a1510` | Dark warm brown |
| Muted text | `rgba(28,10,8,0.5)` | Dimmed inline spans |

---

## What Is Implemented

- [x] Vite + React scaffold
- [x] Two-column editorial layout (CSS Flexbox)
- [x] PP Editorial Sans self-hosted font (10 variants: Thin, Ultralight, Medium, Heavy, Ultrabold + italics)
- [x] Hero bio paragraph with muted inline spans
- [x] Responsive breakpoint at 880px
- [x] Git repository initialized, pushed to GitHub (`main` branch)
- [x] `.gitignore` configured (excludes `node_modules`, `dist`, `.env`)

---

## Known Issues / To Fix

- **Font paths in `fonts.css`**: URLs use `public/fonts/...` but Vite serves the `public/` directory as root — paths should be `/fonts/...`. Verify fonts are loading correctly in the browser.
- **`package.json` name** is still `setup_tools_createNewWorkspace` (the original scaffold name). Should be updated to `portfolio`.
- **README.md** still references the old scaffold name and is generic — needs to be rewritten to reflect the actual project.

---

## Pending / In Progress

- [ ] Live clock in the metadata label (currently hardcoded `19:28:35`)
- [ ] Portfolio work/case study sections
- [ ] Navigation (if needed)
- [ ] SEO meta tags (og:image, description, etc.)
- [ ] Deployment (Vercel, Netlify, or GitHub Pages)
- [ ] Update `README.md` with actual project description
- [ ] Fix `package.json` `name` field to `portfolio`
