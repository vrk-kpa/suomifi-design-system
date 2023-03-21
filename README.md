This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Features/ideas

## Folder structure

### Components

- Non-page level React components and their stylesheets live here

### Interfaces

- Common place to store general interfaces

### Layouts

- Components for NextJS layout pattern

### Pages

- NextJS pages folder for routing, works like magic!

### Styles

- Contains global CSS classes which can be used anywhere (like `.container`)
- Also contains utility CSS classes like margin helpers. Created from suomifi-tokens
- Breakpoints and their helper mixins

### Utils

- Misc stuff

---

## Patterns

- CSS Modules and utility classes for component styling (no CSS-in-JS)
- Use suomifi-ui-components wherever possible, even use `<Block>` instead of `<div>`
  - Caveat: Because of styled-components specificty issues, `<div>` is preferable in high lever wrappers

---

# Development

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser
