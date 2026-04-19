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
  /globals.css    → CSS variables (colors, typography, spacing)
  /reset.css      → CSS reset
  /components     → shared CSS module files if needed
 
/sanity
  /schemas        → content schemas
 
/lib
  /sanity.ts      → Sanity client + GROQ queries
  /types.ts       → TypeScript interfaces
 
/public
  /fonts          → local fonts if needed
```
 
---
 
## 🎨 Design
- All visual design is defined in Figma
- Components and styles are generated via Figma MCP
- Do NOT invent colors, spacing or typography — always follow Figma
- **Theme:** Dark mode only (no light mode toggle needed)
---
 
## 🧩 Sanity CMS Schemas
 
### Project (for Work page)
- `title` (string)
- `slug` (slug)
- `description` (text)
- `coverImage` (image)
- `tags` (array of strings)
- `year` (number)
- `link` (url, optional)
- `caseStudy` (rich text / block content)
### Craft
- `title` (string)
- `slug` (slug)
- `type` (string: exploration | motion | ui)
- `coverImage` (image)
- `description` (text)
- `year` (number)
### Info
- `bio` (rich text)
- `photo` (image)
- `experience` (array of: role, company, year start, year end, description)
- `email` (string)
- `resumeUrl` (file or url)
---
 
## 🔗 Social Links
- LinkedIn
- Twitter/X
- GitHub
- Savee
- Resume (downloadable file)
---
 
## ✅ Coding Rules
- Always use **TypeScript** — no plain JS files
- Use **CSS Modules** for all component styling (e.g. `NavBar.module.css`)
- Use **CSS Variables** in `globals.css` for all design tokens (colors, fonts, spacing)
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
## 🎨 CSS Variables Structure
All design tokens must be defined in `/styles/globals.css`:
```css
:root {
  /* Colors — exact values from Figma */
  --color-background: ;
  --color-surface: ;
  --color-accent: ;
  --color-text-primary: ;
  --color-text-secondary: ;
 
  /* Typography — exact values from Figma */
  --font-family: ;
  --font-size-display: ;
  --font-size-heading: ;
  --font-size-body: ;
  --font-size-caption: ;
 
  /* Spacing — exact values from Figma */
  --spacing-xs: ;
  --spacing-sm: ;
  --spacing-md: ;
  --spacing-lg: ;
  --spacing-xl: ;
 
  /* Border radius */
  --radius-sm: ;
  --radius-md: ;
  --radius-lg: ;
}
```
> Fill in values from Figma before starting Phase 3
 
---
 
## 🚫 Rules for Claude Code
- Do NOT change the folder structure without asking first
- Do NOT add new libraries without asking first
- Do NOT invent design decisions — follow Figma always
- Do ONE task per session — keep it small and focused
- After each task, remind me to test in browser and commit