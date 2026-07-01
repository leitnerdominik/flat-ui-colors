# Flat UI Colors

[Live demo](https://leitnerdominik.github.io/flat-ui-colors/)

Flat UI Colors is a compact React app for browsing a fixed color palette and copying color values in common frontend formats. It is designed as a simple portfolio project: quick to understand, easy to run locally, and deployable to GitHub Pages.

## Features

- 20-color flat UI palette displayed as a responsive grid.
- Click a color tile to copy its current value to the clipboard.
- Copy format selector with `HEX(#AB11FF)`, `HEX(AB11FF)`, `RGB(240, 255, 0)`, and `RGBA(240, 255, 0, 1.0)` formats.
- Full-screen visual feedback after each copy action.
- Optional sound feedback toggle in the navigation bar.
- GitHub Pages deployment through the included npm scripts.

## Screenshot

Screenshot placeholder: add a final desktop or mobile screenshot here before portfolio publication.

Recommended path: `docs/screenshots/flat-ui-colors-demo.png`

## Tech Stack

- React 19
- Create React App / `react-scripts`
- CSS Modules
- `react-copy-to-clipboard`
- GitHub Pages via `gh-pages`

## Styling Workflow

Component styles use plain CSS Modules. Edit the `ComponentName.module.css`
file next to each component, for example
`src/components/ColorField/ColorField.module.css`. Sass files and CSS source
maps are not part of the active workflow and are ignored to keep one clear
style source of truth.

## Code Quality

Run `npm run lint` to check JavaScript files with the Create React App ESLint
configuration. The project does not currently use a formatter dependency;
follow the existing style when editing files: two-space indentation, semicolons,
double quotes in application code, and colocated `*.test.js` files for tests.

## Security and Tooling Status

As of the latest `npm audit`, the project reports 28 vulnerabilities
(9 low, 6 moderate, 13 high, 0 critical). The findings are transitive through
Create React App's `react-scripts` toolchain rather than the app's own color
palette runtime code.

- Runtime app: no separate production app dependency finding is currently
  identified outside the CRA dependency graph.
- Build-time tooling: findings include SVG processing, CSS minification,
  Workbox, PostCSS, and serialization packages used by `react-scripts`.
- Dev/test tooling: findings include Jest/jsdom and webpack dev-server related
  packages.

The current decision is to keep CRA for this portfolio version and document the
risk instead of applying `npm audit fix --force`, because the suggested fixes
would effectively replace or break the CRA toolchain. If this project needs a
longer-lived maintenance posture, handle that as a separate Vite migration goal
with its own dependency, build, test, and deployment validation.

## Local Setup

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

The app opens at `http://localhost:3000` by default.

## Available Commands

```bash
npm start
```

Runs the app locally with hot reload.

```bash
npm test
```

Runs the React Scripts test runner in watch mode.

```bash
npm run lint
```

Runs ESLint against JavaScript files in `src/`.

```bash
npm test -- --watchAll=false
```

Runs the test suite once, which is useful for CI or pre-commit checks.

```bash
npm run build
```

Creates an optimized production build in `build/`.

```bash
npm run deploy
```

Runs the `predeploy` build step and publishes `build/` to GitHub Pages.

## Usage Notes

Use the copy-format dropdown to choose the value format copied from each tile. The default format includes the hash prefix, for example `#55efc4`. The sound icon toggles the short audio cue that plays after successful copy feedback.

## Deployment

The app is configured for GitHub Pages through the `homepage` field in `package.json`:

```text
https://leitnerdominik.github.io/flat-ui-colors/
```

Before deploying, run:

```bash
npm test -- --watchAll=false
npm run build
```

Then publish with:

```bash
npm run deploy
```

`npm run deploy` runs `npm run build` first through the `predeploy` script, then
publishes the `build/` directory with `gh-pages`. If the live site still shows
an older bundle after deployment, hard-refresh the browser or wait a few minutes
for GitHub Pages and browser caches to update.
