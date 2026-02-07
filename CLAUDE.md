# CLAUDE.md - AI Assistant Guide for Secure Flight Systems

## Project Overview

13 STORE Enterprise Drone Solutions platform - a React web application for DJI enterprise drone systems in Thailand. Serves as a marketing/showcase site for enterprise UAV solutions including an AI Command Platform, Altura VTOL drones, and system integration services. Built with Lovable.dev.

## Tech Stack

- **Framework:** React 18.3 + TypeScript + Vite (SWC compiler)
- **Styling:** Tailwind CSS 3.4 + shadcn/ui (Radix UI primitives)
- **Routing:** React Router DOM v6
- **State:** React hooks (local) + TanStack React Query (server state)
- **Animation:** Framer Motion
- **Forms:** React Hook Form + Zod validation
- **Backend:** Supabase (configured, schema currently empty)
- **Testing:** Vitest + React Testing Library + jsdom
- **Linting:** ESLint with typescript-eslint (flat config)

## Commands

```bash
npm run dev          # Start dev server on port 8080
npm run build        # Production build
npm run build:dev    # Development mode build
npm run lint         # Run ESLint
npm run test         # Run tests once (vitest run)
npm run test:watch   # Run tests in watch mode (vitest)
npm run preview      # Preview production build
```

## Project Structure

```
src/
├── main.tsx                       # Entry point
├── App.tsx                        # Root component with routes + providers
├── index.css                      # Global styles + Tailwind directives
├── pages/                         # Route pages (11 total)
│   ├── Index.tsx                  # Home (/)
│   ├── Enterprise.tsx             # Enterprise solutions (/enterprise)
│   ├── Platform.tsx               # UAV AI Platform (/platform)
│   ├── Altura.tsx                 # Altura VTOL showcase (/altura)
│   ├── Solutions.tsx              # Solutions library (/solutions)
│   ├── Contact.tsx                # Contact form (/contact)
│   ├── CaseStudies.tsx            # Case studies (/case-studies)
│   ├── ROICalculator.tsx          # ROI calculator (/roi-calculator)
│   ├── DroneRental.tsx            # Drone rental (/drone-rental)
│   ├── Resources.tsx              # Company resources (/resources)
│   └── NotFound.tsx               # 404 catch-all
├── components/
│   ├── layout/                    # Navbar, Footer, ThemeToggle
│   ├── home/                      # Index page sections (Hero, CTA, etc.)
│   ├── enterprise/                # Enterprise page diagrams
│   ├── platform/                  # Platform page diagrams
│   ├── altura/                    # Altura page components
│   ├── presentation/             # Presentation/slide layout components
│   ├── icons/                     # Custom icon components (DroneIcon)
│   ├── ui/                        # shadcn/ui components (90+ files)
│   └── NavLink.tsx                # Router NavLink wrapper
├── hooks/
│   ├── use-mobile.tsx             # Mobile breakpoint detection
│   └── use-toast.ts              # Toast notification hook
├── lib/
│   └── utils.ts                   # cn() utility (clsx + tailwind-merge)
├── integrations/
│   └── supabase/
│       ├── client.ts              # Supabase client setup
│       └── types.ts               # Auto-generated DB types
├── test/
│   ├── setup.ts                   # Test env setup (matchMedia polyfill)
│   └── example.test.ts            # Sample test
└── assets/                        # Static images (drones, products, heroes)
```

## Architecture & Routing

Routes are defined in `src/App.tsx`. The app wraps all routes in:
1. `QueryClientProvider` (TanStack React Query)
2. `TooltipProvider` (Radix UI)
3. `Toaster` + `Sonner` (toast notifications)
4. `BrowserRouter` (React Router)

New routes must be added **above** the `*` catch-all route in `App.tsx`.

## Code Conventions

### Imports
- Always use the `@/` path alias (maps to `src/`): `import { Button } from "@/components/ui/button"`
- Never use relative paths that go above the current directory

### Components
- Functional components only (no class components)
- PascalCase for component names and files
- Pages are default-exported; other components use named exports
- shadcn/ui components use `forwardRef` and CVA (class-variance-authority) for variants
- Use `cn()` from `@/lib/utils` to merge Tailwind classes

### TypeScript
- Strict mode is **disabled** (`noImplicitAny: false`, `strictNullChecks: false`)
- `@typescript-eslint/no-unused-vars` is turned off
- Loose typing is acceptable in this codebase

### Styling
- Tailwind CSS utility classes exclusively (no CSS-in-JS, no CSS modules)
- Color system uses CSS custom properties with HSL values (defined in `index.css`)
- Key color tokens: `navy-*` (authority), `slate-*` (neutral), `amber-*` (CTAs)
- Dark mode supported via class-based theme toggle with `next-themes`
- Font: IBM Plex Sans Thai (Thai language support)
- Custom gradients: `bg-gradient-hero`, `bg-gradient-card`, `bg-gradient-cta`

### Animation
- Use Framer Motion for all animations
- Common pattern: `initial` / `animate` / `whileInView` props
- Staggered animations use delay offsets on children
- Custom Tailwind animations defined in `tailwind.config.ts`

### Forms
- React Hook Form for state management
- Zod schemas for validation (via `@hookform/resolvers`)

### State Management
- Local state: `useState`, `useRef`
- Server state: TanStack React Query
- No global state management library (no Redux, Zustand, etc.)

## Testing

- Framework: Vitest with jsdom environment
- Test files: Place alongside source as `*.test.ts` or `*.test.tsx`, or in `src/test/`
- Pattern: `src/**/*.{test,spec}.{ts,tsx}`
- Setup file: `src/test/setup.ts` (polyfills `matchMedia` for responsive tests)
- Globals enabled: `describe`, `it`, `expect` available without imports
- Run `npm run test` before committing changes

## Environment Variables

- Prefix with `VITE_` for client-side access
- Supabase config: `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`
- Never commit secrets or private keys

## Key Files

| File | Purpose |
|------|---------|
| `src/App.tsx` | Route definitions and provider tree |
| `src/index.css` | Global styles, CSS variables, Tailwind config |
| `tailwind.config.ts` | Design system (colors, animations, shadows, gradients) |
| `vite.config.ts` | Build config (port 8080, path aliases) |
| `vitest.config.ts` | Test config (jsdom, globals, setup file) |
| `eslint.config.js` | Lint rules (flat config, typescript-eslint) |
| `components.json` | shadcn/ui component configuration |
| `src/lib/utils.ts` | `cn()` class merging utility |

## Common Tasks

### Adding a new page
1. Create the page component in `src/pages/NewPage.tsx` (default export)
2. Add a `<Route>` in `src/App.tsx` above the catch-all `*` route
3. Add navigation link in `src/components/layout/Navbar.tsx`

### Adding a new UI component
- Use shadcn/ui conventions: place in `src/components/ui/`
- Use `forwardRef`, CVA for variants, `cn()` for class merging

### Adding a new section to a page
- Create component in the relevant `src/components/<page>/` directory
- Import and place it in the page component

### Working with Supabase
- Client is at `src/integrations/supabase/client.ts`
- Types are auto-generated at `src/integrations/supabase/types.ts`
- Use TanStack React Query for data fetching patterns
