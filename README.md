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

Component styles use plain CSS Modules. Edit the `ComponentName.module.css` file next to each component, for example `src/components/ColorField/ColorField.module.css`. Sass files and CSS source maps are not part of the active workflow and are ignored to keep one clear style source of truth.

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
