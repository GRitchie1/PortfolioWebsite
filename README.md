# Gregor Ritchie Portfolio

A React portfolio site for professional experience, education, and personal projects. It is hosted on GitHub Pages at [gregor-ritchie.co.uk](https://gregor-ritchie.co.uk/).

## Local Development

Requirements: Node.js and npm.

```sh
npm ci
npm start
```

The development site runs at [http://localhost:3000](http://localhost:3000). Stop it with `Ctrl+C`.

Before deploying, run the tests and production build:

```sh
npm test -- --watchAll=false
npm run build
```

## Updating Content

- **Experience:** edit the `companies` data in `src/sections/Experience/Experience.js`. Each company contains its roles, dates, summaries, and responsibilities.
- **Education and training:** edit `src/sections/Qualifications/Qualifications.js`.
- **Personal projects:** edit the `projectslist` entries in `src/sections/Projects/ProjectsList.js`. Project images are stored in `src/sections/Projects/Images/`.
- **About text:** edit `src/sections/About/About.js`.
- **Navigation:** edit the `pages` list in `src/components/Nav/Nav.js` when adding or renaming a section.

For project entries, update the title, overview, detailed content, image, and destination link together. Keep image imports at the top of `ProjectsList.js` in sync with the entries that use them.

## Deploying

1. Make and review your changes locally.
2. Run `npm test -- --watchAll=false` and `npm run build`.
3. Commit and push the source changes to the repository's source branch.
4. Run:

	```sh
	npm run deploy
	```

The `predeploy` script builds the site, and `gh-pages -d build` publishes the generated site to the `gh-pages` branch. GitHub Pages should be configured to serve the `gh-pages` branch from its root. The custom domain is configured by `public/CNAME`; keep this file unless the domain is changing.

## Public Content and Privacy

This repository and the deployed site are public. Treat everything committed here, including source files, images, PDFs, and other imported assets, as publicly accessible. Do not add passwords, API keys, tokens, private contact details, confidential employer information, or documents that contain information you do not want public. Review linked transcripts and downloadable files before publishing them.
