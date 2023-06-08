# Suomi.fi Design System Development

## Development server

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser


## Linting

Staged files are linted with `lint-staged` when committing

Lint files:
```bash
yarn lint
```

## Testing build

Build and export:
```bash
yarn build
```

Serve folder out:
```bash
npx serve out
```

## Deployment

Branch `develop` is deployed automatically to `github-pages` with CircleCI config

## Development

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Public

- Images should be stored in folder public, and used with `next/image` component

- Images in scss should be referenced with `url('~/public/...')`

### Pages

- NextJS pages folder for routing, works like magic!

#### Patterns

- CSS Modules and utility classes for component styling (no CSS-in-JS)
- Use suomifi-ui-components wherever possible, even use `<Block>` instead of `<div>`
  - Caveat: Because of styled-components specificty issues, `<div>` is preferable in high lever wrappers

### Components

- Non-page level React components and their stylesheets live here

### Interfaces

- Common place to store general interfaces

### Layouts

- Components for NextJS layout pattern

### Styles

- Contains global CSS classes which can be used anywhere (like `.container`)
- Also contains utility CSS classes like margin helpers. Created from suomifi-tokens
- Breakpoints and their helper mixins

### Utils

- Misc stuff
