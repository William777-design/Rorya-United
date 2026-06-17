# Sanity Clean Content Studio

This studio is configured to manage the Rorya United landing page content.

## How to run locally

```bash
cd rorya-united-page
npm install
sanity dev
```

Then open the local Studio URL shown in the terminal.

## What is configured

- `schemaTypes/landingPage.js` defines a `Landing Page` document type
- `sanity.config.js` loads the schema and enables the structure tool
- The frontend at `../index.html` fetches landing page content from this Studio

## How the frontend routing works

- The page loads the most recently published `landingPage` document by default
- To load a specific page, use `?slug=your-slug` in the browser URL, for example:

```text
http://localhost:5500/index.html?slug=home
```

## What to create in Studio

1. Create a new `Landing Page` document
2. Set `title` and `slug`
3. Add hero text, intro text, CTA button text and URL
4. Add page sections as needed
5. Publish the document

## Deployment

Use the existing scripts in `package.json`:

```bash
sanity build
sanity deploy
```
