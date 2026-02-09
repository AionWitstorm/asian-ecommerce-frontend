# React Production Boilerplate

A modern React + TypeScript boilerplate for building production-ready web applications.

---

## 🚀 Badges

![CI](https://github.com/AionWitstorm/react-production-boilerplate/actions/workflows/ci.yml/badge.svg)

---

## 🧰 Tech Stack

This project is built using:

- **React 19**
- **TypeScript**
- **Vite**
- **Vitest**
- **ESLint + Prettier**
- **Husky + lint-staged**
- **GitHub Actions CI**
- **Vercel Deployment**

---

## 🚀 Project Setup

### Install dependencies

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

### Build

```bash
pnpm build
```

### Lint

```bash
pnpm lint
```

### Format

```bash
pnpm format
```

### Run tests

```bash
pnpm test
```

### Run tests in watch mode

```bash
pnpm test:watch
```

---

## ✅ Production Readiness (Implemented)

### ✔ Code Quality

- [x] TypeScript
- [x] ESLint (standard + TypeScript + React rules)
- [x] Prettier
- [x] lint-staged (formats + lints before every commit)
- [x] Husky (pre-commit hooks)

### ✔ Build & Optimization

- [x] Vite production build
- [x] TypeScript build check (`tsc -b`)
- [x] Code splitting & minification (default Vite)
- [x] Tree-shaking (default Vite)
- [x] Import alias support (`@/...`)

### ✔ CI/CD (GitHub Actions)

- [x] Runs lint
- [x] Runs tests
- [x] Runs build
- [x] Uses pnpm cache
- [x] Uses frozen lockfile

### ✔ Deployment

- [x] Deployed on **Vercel**
- [x] Preview deployments for PRs

---

## 🚧 Future Improvements (To Implement)

### 🧪 Testing & Quality

- [ ] Add **E2E testing** (Playwright)
- [ ] Add **Test coverage thresholds**
- [ ] Add **Snapshot testing**
- [ ] Add **Mutation testing** (Stryker)

### 🔐 Security

- [ ] Add **CSP (Content Security Policy)**
- [ ] Add **Sentry** for error monitoring
- [ ] Secure environment variables (use `.env.production`)
- [ ] Add **OWASP security checks**
- [ ] Add **Dependency vulnerability scanning**

### 🚀 Deployment & Reliability

- [ ] Add **CDN + caching**
- [ ] Add **Rollback strategy**
- [ ] Add **Blue/Green deployment** (if needed)
- [ ] Add **Health checks**
- [ ] Add **SLA monitoring**

### 📈 Monitoring & Analytics

- [ ] Add **Google Analytics / Plausible**
- [ ] Add **Performance monitoring**
- [ ] Add **Error tracking**
- [ ] Add **Uptime monitoring**

### 🌐 SEO & Accessibility

- [ ] Add **SEO meta tags**
- [ ] Add **Open Graph & Twitter cards**
- [ ] Add **Robots.txt**
- [ ] Add **Sitemap**
- [ ] Add **Accessibility checks** (axe-core)

### 📦 Release Process

- [ ] Add **semantic-release**
- [ ] Add **GitHub releases**
- [ ] Add **CHANGELOG**
- [ ] Add **Conventional commits**

### 🔥 Performance

- [ ] Image optimization
- [ ] Font optimization
- [ ] Bundle analysis
- [ ] Lighthouse checks
- [ ] Critical CSS & lazy loading

---

## 🧩 Project Structure

```text
.github/
├── workflows/                  → GitHub Actions CI/CD pipelines

├── .husky/                     → Git hooks (pre-commit, commit-msg, etc.)
├── coverage/                   → Test coverage reports (generated)
├── dist/                       → Production build output (generated)
├── node_modules/               → npm / pnpm dependencies (generated)
├── public/                     → Static assets served at root (favicons, robots.txt…)
└── src/
    ├── assets/                 → Images, fonts, icons, svgs, etc.
    ├── components/             → Reusable, generic UI components
    ├── features/               → Feature-based / domain modules (recommended structure)
    ├── hooks/                  → Custom React hooks
    ├── pages/                  → Page-level components (usually tied to routes)
    ├── routes/                 → Route definitions or route components
    ├── services/               → API clients, fetchers, external service logic
    ├── styles/                 → Global styles, themes, CSS variables, resets
    ├── test/                   → Test utilities, setup files, mocks
    |── utils/                  → Pure helper functions, formatters, constants
    ├── App.tsx                 → application component
    ├── main.tsx                → Entry point (ReactDOM.createRoot)
    └── env.ts                  → Type declarations for environment variables

Root files
├── .env                        → Environment variables (not committed)
├── .env.example                → Template for environment variables
├── eslint.config.js            → ESLint configuration
├── .prettierrc                 → Prettier configuration
├── .prettierignore             → Files to ignore by Prettier
├── commitlint.config.js        → Commit message linting rules
├── .gitignore                  → Git ignore rules
├── index.html                  → HTML entry point
├── package.json                → Project metadata & dependencies
├── pnpm-lock.yaml              → Lockfile (using pnpm)
├── tsconfig.json               → Base TypeScript config
├── tsconfig.app.json           → TypeScript config for app code
├── tsconfig.node.json          → TypeScript config for Vite/node files
└── vite.config.ts              → Vite configuration

---

## 🧰 Available Scripts

Run these commands with **pnpm** in the project root:

| Command               | Description                                      |
|-----------------------|--------------------------------------------------|
| `pnpm dev`            | Starts the development server (Vite + HMR)       |
| `pnpm build`          | Builds for production (outputs to `/dist`)       |
| `pnpm preview`        | Serves the production build locally              |
| `pnpm lint`           | Checks code with ESLint                          |
| `pnpm lint:fix`       | Runs ESLint and auto-fixes fixable issues        |
| `pnpm format`         | Formats all code using Prettier                  |
| `pnpm test`           | Runs unit/integration tests                      |
| `pnpm test:coverage`  | Runs tests + generates coverage report           |

---

## 📌 Notes

- The project uses **pnpm** as the package manager.
- The lockfile (`pnpm-lock.yaml`) is committed to the repo for deterministic installs.
- CI runs on **GitHub Actions**.
- Deployment is done on **Vercel**.

---

## 🧠 Contact

If you want to contribute or report issues, feel free to open a PR or issue on GitHub.

```
