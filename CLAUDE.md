@AGENTS.md

# André Alcantara – Design Portfolio
## Claude Code Project Memory

---

## 👤 Owner
- **Name:** André Alcantara
- **Role:** UI/UX Designer
- **Goal:** Get a job, attract freelance clients, and show personal projects

---

## 🛠️ Tech Stack
- **Framework:** Next.js 14 with TypeScript
- **Styling:** CSS Modules + CSS Variables (no Tailwind)
- **Animations:** Framer Motion
- **CMS:** Sanity.io
- **Hosting:** Vercel
- **Design source:** Figma (via Figma MCP)

---

## 🌐 Language
- **Primary:** English
- **Secondary:** Portuguese (BR)
- All UI text should be in English by default
- Keep text content easy to translate later

---

## 🗂️ Pages & Routes

| Page | Route | Description |
|------|-------|-------------|
| Index | `/` | Homepage / landing |
| Work | `/work` | UI/UX projects list |
| Craft | `/craft` | Explorations, motion, UI experiments |
| Info | `/info` | Bio, experience timeline, contact |
| Project detail | `/work/[slug]` | Individual case study page |

---

## 📐 Project Structure

```
/app
  /work
    /[slug]       → individual case study
    page.tsx      → work listing page
  /craft
    page.tsx
  /info
    page.tsx
  layout.tsx      → global layout (NavBar + Footer)
  page.tsx        → index page

/components
  /ui             → base components (Button, Tag, etc.)
  /sections       → page sections (Hero, ProjectCard, etc.)
  /layout         → NavBar, Footer

/styles
  globals.css     → CSS variables (colors, typography, spacing)
  reset.css       → CSS reset

/sanity
  /schemas        → content schemas (added when Sanity phase begins)

/lib
  sanity.ts       → Sanity client + GROQ queries
  types.ts        → TypeScript interfaces

/public
  /fonts          → local font files
  /sounds         → sound effect files
```

---

## 🎨 Design
- All visual design is defined in Figma
- Components and styles are generated via Figma MCP
- Do NOT invent colors, spacing or typography — always follow Figma
- **Theme:** Dark mode only (no light mode toggle needed)

---

## 🌿 Branch Strategy
- **main** → stable only, merge when a full page is complete
- **dev** → daily work, all commits go here

```
# daily work
git add .
git commit -m "feat: your message"
git push origin dev

# when a page is complete → merge to main
git checkout main
git merge dev
git push origin main
git checkout dev
```

Merge moments:
- Index page complete → merge to main
- Work page complete → merge to main
- Craft page complete → merge to main
- Info page complete → merge to main
- Sanity connected → merge to main
- Final polish → merge to main

---

## ✅ Coding Rules
- Always use **TypeScript** — no plain JS files
- Use **CSS Modules** for all component styling (e.g. `NavBar.module.css`)
- Use **CSS Variables** in `globals.css` for all design tokens
- **No inline styles** — always use CSS Modules classes
- **No Tailwind** — never use Tailwind utility classes
- Use **Framer Motion** for all animations
- Fetch all Sanity data in `page.tsx` files, not inside components
- Components must be **reusable and isolated**
- Use **named exports** for components
- File names in **PascalCase** for components (e.g. `ProjectCard.tsx`)
- Each component has its own `.module.css` file in the same folder
- File names in **kebab-case** for pages (Next.js default)
- Always define **TypeScript interfaces** in `/lib/types.ts`

---

## 🚫 Rules for Claude Code
- Do NOT change the folder structure without asking first
- Do NOT add new libraries without asking first
- Do NOT invent design decisions — follow Figma always
- Do ONE task per session — keep it small and focused
- After each task, remind me to test in browser and commit

---

## 💡 Session Starter Template
> Copy and paste this at the beginning of every Claude Code session:

```
I'm building André Alcantara's design portfolio.
Tech stack: Next.js 14, TypeScript, CSS Modules + CSS Variables (no Tailwind), Framer Motion, Sanity CMS.
Pages: Index (/), Work (/work), Craft (/craft), Info (/info), Project detail (/work/[slug]).
Theme: dark mode only.
Design comes from Figma via Figma MCP.
All TypeScript interfaces live in /lib/types.ts.
Each component has its own .module.css file.

Current task: [DESCRIBE YOUR TASK HERE]
```