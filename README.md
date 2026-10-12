# Vue Dictionary

A small Vue 3 dictionary web app that searches for English words using the free Dictionary API and displays the results in a readable, card-based layout.

## What it does

The app currently provides:

- A search box for entering English words
- A submit action via both the Enter key and the search button
- Live fetches to the public Dictionary API at `https://api.dictionaryapi.dev/api/v2/entries/en/{word}`
- A friendly fallback message when no definition is found
- A result view showing:
  - the queried word
  - pronunciation/phonetic text
  - available audio pronunciations
  - part of speech groups
  - definitions and examples
  - synonyms and antonyms when available
  - source URLs and dictionary license details
- Simple navigation between the Home page and the About page

## Tech stack

- Vue 3
- Vite
- Vue Router
- Tailwind CSS
- ESLint + Prettier

## Project structure

```text
src/
├── App.vue
├── main.js
├── assets/
├── components/
│   ├── DefinitionComponent.vue
│   ├── FooterComponent.vue
│   ├── HeaderComponent.vue
│   ├── LicenseComponent.vue
│   ├── MeaningComponent.vue
│   ├── PhoneticComponent.vue
│   ├── ResultComponent.vue
│   ├── SearchComponent.vue
│   ├── SectionComponent.vue
│   ├── SourceUrlComponent.vue
│   └── WordNotFoundComponent.vue
├── router/
│   └── index.js
└── views/
    ├── AboutView.vue
    └── HomeView.vue
```

## Getting started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the local URL shown in the terminal (typically `http://localhost:5173`).

## Production build

```bash
npm run build
```

This creates a production bundle in the `dist/` folder.

## Linting and formatting

```bash
npm run lint
npm run format
```

## Notes

- The app does not include a local dictionary database or backend; it relies on the public Dictionary API for word lookups.
- Network errors and missing results are handled gracefully by clearing the output and showing the “word not found” state.
- This project is intentionally a lightweight frontend-only dictionary viewer rather than a full dictionary management system or offline dictionary application.
