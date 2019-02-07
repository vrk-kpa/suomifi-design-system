module.exports = {
  pathPrefix: '/suomifi-design-system',
  siteMetadata: {
    title: `Suomi.fi Design System`,
    description: `Suomi.fi Design System`,
    author: `Suomi.fi`
  },
  plugins: [
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
    },
    `gatsby-plugin-emotion`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Source Sans Pro:400,600']
        }
      }
    }
  ]
}
