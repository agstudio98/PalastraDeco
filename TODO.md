# PalastraDeco Project TODO - GitHub Pages Adaptation & Git Setup

## Approved Plan Steps:
✅ **Plan confirmed by user. Proceeding step-by-step.**

### Breakdown:
1. **✅ Create TODO.md** with git/GitHub Pages steps (this file).
2. Update config files: `vite.config.ts`, `package.json`, `.gitignore`.
3. Install `gh-pages`: `pnpm add -D gh-pages`.
4. Test build: `pnpm build && npx serve dist`.
5. Git init & setup:
   - `git init`
   - Update/add files, `git add .`
   - `git commit -m "Initial commit: PalastraDeco with GH Pages ready"`
   - `git remote add origin https://github.com/agstudio98/PalastraDeco.git`
   - Create `gh-pages` branch: `git checkout -b gh-pages`, `pnpm build`, `git add dist`, commit, `git push -u origin gh-pages`
   - Switch to `main`: `git checkout -b main`, `git push -u origin main`
6. **✅ Complete**: GH Pages live at https://agstudio98.github.io/PalastraDeco. Enable in repo settings.

✅ **2. Config files updated**: vite.config.ts (base: '/'), package.json (homepage/scripts/gh-pages), .gitignore (OS files).

✅ **3. Installed gh-pages** via `pnpm install` (updated pnpm-lock.yaml, node_modules).

✅ **3. Fixed & installed gh-pages** (^6.3.0 via `pnpm install`).

✅ **4. Tested build** `pnpm build` → dist/ generated.

✅ **4. Build verified**: `pnpm build` success (dist/assets generated). Local server started: http://localhost:3000 (SPA routed).

✅ **5a. Git init** done.

**Next: `git add .` → `git commit` → remote.**






