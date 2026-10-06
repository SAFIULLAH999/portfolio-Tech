# Muhammad Saifullah's portfolio

A responsive React/Vite portfolio with white background, black typography, a single cobalt accent, and subtle morphing and raised-surface effects.

## Run locally

```sh
npm install
npm run dev -- --host 127.0.0.1
```

Open the URL Vite reports. Production verification: `npm run build`. Preview the production build with `npm run preview`.

## Content and assets

`src/portfolio.js` holds résumé-based projects, experience, concurrent leadership, skills, education, and certifications. `src/App.jsx` holds the layout and contact details; `src/index.css` holds the responsive design. Career content comes from `MD_Saif_FullStack.pdf`, copied to `public/resume/MD_Saif_FullStack.pdf` for download. Update both data and PDF when the résumé changes.

Project visuals are explicitly labeled conceptual illustrations, not screenshots. External project links use the domains supplied by the résumé; Nav is marked as in development. Contact uses email, telephone, and LinkedIn links with a clipboard action. No email delivery service is configured or required. Reduced-motion preferences and keyboard focus are supported.

The prior 3D portfolio components and assets remain in the repository for reference, but are not imported by the current application. No deployment changes are included.
