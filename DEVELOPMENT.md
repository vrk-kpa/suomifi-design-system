# Development

## Prerequisites for development

You need to have [Yarn](https://yarnpkg.com/lang/en/) and [Node.js](https://nodejs.org) installed.

## Installing and building

To get started working with this site, clone the repository and install dependencies by running `yarn` or `yarn install`

This project uses Gatsby, so to start a development server, run:

```
yarn develop
```

Alternatively you can run the built version by first running

```
yarn build
```

and then serving it by running

```
yarn start
```

When you're done, simply open the site on the specified localhost port and you're good to go!

### Other commands

- `yarn prettier` write code style fixes to all files in src.

- `yarn prettier:check` checks the code style

- `yarn lint:code` checks the code style using eslint.

- `yarn format:style` write the code style fixes to all src-files.

- `yarn lint:style` check styling for formatting errors.

- `yarn validate` runs the complete test suite.

- `yarn build` clears `.cache` and `public` folder, compiles the code and outputs it to the `public` folder

## Built using

- [React](https://reactjs.org/)
- [Gatsby](https://www.gatsbyjs.org/)
- [i18Next](https://www.i18next.com/)
- [Suomi.fi UI-components](https://github.com/vrk-kpa/suomifi-ui-components)

## Implementation

- `gatsby-plugin-i18next` handles page creation for each locale and provides components for handling localized urls

## Resources

- JSON resources for `i18next` are under `locale/<lang>/`
- Separate resources logically for page/context so that one file doesn't grow too big
- Role of resource is just to provide translation, no HTML or styling allowed

## Transifex

- [Transifex](https://www.transifex.com/) is used to provide possibility to update translations by other parties
- Source language is something dummy and not visible to user because:
  - it cannot be modified and all visible languages need to be translatable
  - it defines structure/placeholders for translations
  - it is `Afrikaans (af)` which is not planned to be supported language anytime soon

### Transifex updates

- Preparations

  1. Install [CLI](https://docs.transifex.com/client)
  1. Create [API token](https://www.transifex.com/user/settings/api/) for your account
  1. Authenticate client: `tx init --skipsetup`
     - execute somewhere else than under this project because `init` overrides `config` file too

- Add new source file

  1. `tx config`

     - Follow instructions
     - See existing `.tx/config` for hints

  1. `tx push -s` (upload source)

  1. `tx push -t` (upload any existing translations)

- Modify source file

  1. `tx push -s`

  - Be extra careful when modifying existing keys/structure, it destroys translations in Transifex and cannot be undone. In such case:

    1. `tx pull` (download first latest translations and update them locally to follow new structure)

    1. `tx push -s` (upload source)

    1. `tx push -t` (upload updated translations)

- Get updated translations

  1. `tx pull --mode <mode>`

  - Use mode:
    - `onlytranslated` so that those will contain empty value instead of source placeholder value
    - or `onlyreviewed` if review practice is in use.

- Notes

  - With `pull` and `push` commands it might be useful to use `-r <resources>` to avoid accidental changes for any other resources.

### Deployment updates

- Transifex configuration `.tx/config` and all resources `locale/<lang>/` are stored in version control
- Whenever new translations are needed for deployment they will be downloaded and updated in version control for new deployment
