module.exports = {
  siteMetadata: {
    title: `Suomi.fi Design System`,
    description: `Suomi.fi Design System`,
    author: `Suomi.fi`
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-ts-loader`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-stylelint`,
      options: { files: ['src/**/*.{js,jsx,ts,tsx,css,scss}'] }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locale`,
        name: `locale`
      }
    },
    {
      resolve: `@wapps/gatsby-plugin-i18next`,
      options: {
        availableLngs: ['en', 'fi'],
        fallbackLng: 'en'
      }
    }
  ]
}
