 Raja Chatterjee — Portfolio Site (Redesign)

React 18 + MUI v5, redesigned with a Navy & Gold visual identity.

## What changed from your original code

- **React 17 → 18**, **MUI v4 → MUI v5** (`@mui/material`, `@mui/icons-material`), `makeStyles` replaced with the `sx` prop + a shared theme (`src/theme.js`)
- Removed unused dependencies: `react-router-dom`, `react-animate-on-scroll`, `react-typed`, `web-vitals`, duplicate `react-script`
- `cover.JPG` / `cover1.JPG` compressed from ~3.3–3.5MB each down to ~270–300KB (resized + re-encoded, same visual quality at web resolution). Old uppercase, space-containing filenames replaced with lowercase hyphenated ones (`oracle-cert-1.jpg` etc.) — better practice for web assets and URLs.
- Fixed a broken image import (`techcover.jpg` didn't exist in your uploaded assets) — replaced with a clean gradient + icon treatment for the Work Samples cards
- Restructured the flat technology bullet list into four categorized cards (Delivery & Program Management / Enterprise Platforms / Engineering Background / Cloud & DevOps)
- Added a dedicated **Certifications** section showcasing your 3 Oracle certificate images, plus your other 3 certifications as badge cards
- Gave the Chatbase AI assistant its own framed section ("Ask About My Experience") instead of a bare plugin — see note below
- Moved secondary profile links (Salesforce Trailblazer, Docker Hub) out of the busy hero into the Contact section
- Chatbase integration logic in `App.js` is functionally identical to your original — still reads `REACT_APP_CHATBASE_ID` from `.env`, no keys touched

### One honest limitation — Chatbase widget styling
Chatbase's embed script (`embed.min.js`) renders its own chat bubble inside a cross-origin iframe hosted by Chatbase — the page can't restyle it directly. To actually recolor the bubble to match Navy & Gold, or make it a static inline window instead of a floating launcher, you'd need to change it from Chatbase's own dashboard (**Settings → Interface/Appearance**) or switch to their iframe-embed method with `?theme=` params, if they still offer that. I added an on-page "Ask About My Experience" section to properly introduce and frame the assistant regardless.

### Not included (wasn't in what you uploaded)
Your `public/` folder (`favicon.ico`, `manifest.json`, `logo192.png`, etc.) wasn't part of the files you shared, so it isn't in this package — keep using your existing versions of those. I only touched `public/index.html`, which references them the same way your original did (`%PUBLIC_URL%/favicon.ico`, `%PUBLIC_URL%/manifest.json`). If you'd like, you can also drop the new `src/images/cover1.jpg` into `public/` to replace the old apple-touch-icon reference with the compressed version.

I could not run `npm install` / `npm run build` in this sandbox (no network access here), so **please run a local build before deploying** — see steps below. I did syntax-check every file and manually verified all imports resolve to files that exist in this package.

---

## 1. Apply these files to your project

Unzip this into your existing project folder, replacing `src/`, `public/index.html`, and `package.json`. Keep your existing `.env`, `.git`, and the rest of `public/` untouched.

## 2. Install & test locally

```bash
npm install
npm start
```

Open `http://localhost:3000` and check every section, especially the Certifications images and the Chatbase widget (needs `REACT_APP_CHATBASE_ID` set in your `.env`).

If you hit an OpenSSL/webpack error on `npm start` (common on Node 17+ with `react-scripts` 5), either:
- switch to Node 18 LTS, or
- run `NODE_OPTIONS=--openssl-legacy-provider npm start` (Mac/Linux) or set it via `set NODE_OPTIONS=--openssl-legacy-provider` (Windows) before `npm start`.

## 3. Commit and push to GitHub

```bash
git add .
git commit -m "Redesign: Navy & Gold visual identity, MUI v5, React 18, performance cleanup"
git push origin main
```
(replace `main` with your actual default branch name if different)

## 4. Deploy to GitHub Pages

Your `package.json` already has `gh-pages` configured:

```bash
npm run deploy
```

This runs `predeploy` (build) automatically, then publishes the `build/` folder to your `gh-pages` branch. Give it a minute or two, then check `https://InquisitiveAboutReact.github.io/myprofile`.

## 5. Hosting notes

Since this is a fully static site (no backend, Chatbase runs client-side), **GitHub Pages alone is sufficient** — you don't need Heroku, Render, or any backend hosting. If you ever add a real backend (contact form handler, custom API, etc.), free tiers worth considering then: **Render** or **Railway** (both have generous free/hobby tiers and are simpler than Heroku's current pricing model), or **Vercel/Netlify** if you want serverless functions alongside a static frontend.
