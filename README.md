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

## Motion and interaction

The interface uses the installed Framer Motion dependency for staggered hero entrances and one-time viewport reveals. Content remains readable before reveal, and deep links skip the hero entrance. Navigation tracks the active section, compacts on scroll, and provides a decorative reading-progress line. The mobile menu opens with a short transition, closes on selection or Escape, and excludes closed links from keyboard navigation.

The hero uses a dimensional stack of interface, data, and system layers on a blueprint stage. Project previews are browser-framed conceptual schematics, with a visible disclosure that they are not live screenshots. `src/effects.css` defines this gallery treatment; the prior ring and project-mark styling has been removed.

Hero and project surfaces respond gently to fine-pointer movement with local spotlights and depth, using requestAnimationFrame and CSS properties rather than application renders. Magnetic link effects move their inner visual content while keeping the hit target stable. Touch devices skip pointer effects. All listeners and pending frames are cleaned up.

Motion controls in the header and footer pause decorative CSS animation and disable JavaScript pointer/transition effects. The preference persists locally when storage is available. The operating system's reduced-motion setting takes precedence and disables those controls with an accessible explanation. Text remains at full opacity before and during every reveal. No custom cursor, scroll interception, counters, or external animation services are used.

## Exploring projects

The curated gallery filters the six résumé projects by business websites, talent platforms, commerce, or personal work. Counts and result announcements reflect the displayed projects. Layout motion follows the global motion preference.

Each card offers both a direct website link and an Explore project button. The native project dialog shows the existing description, tags, status, and conceptual preview. It traps focus, closes with Escape or its close button, restores focus to the opener, and locks background scrolling while open. A motion control is also available inside the dialog. `src/gallery.css` styles the gallery and detail view; `ProjectGallery.jsx` and `ProjectDialog.jsx` manage their interactions.
