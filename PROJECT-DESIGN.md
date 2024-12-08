# Project design

## Project layers

- root - combine project from pages
- pages - pages in project (combine page from modules)
- widgets - intended self-sufficient blocks (simple module)
- features - the main interactions in app (with store)
- entities - business layers
- shared - shared items

## Project module slice

- docs - documentation for module
- api - integration with REST API
- common - shared items
- domains - logic layer (rich and anemic models)
- store - compose logical
  - index.ts - Public API
  - store.context.tsx - React Context
  - store.
- ui - React render
  - index.ts - Public API
  - example - Component
    - example.component.tsx - Component
    - example.styles.tsx - Component
- index.ts - Public API
- module.component.tsx
- module.styles.tsx
