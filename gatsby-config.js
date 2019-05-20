module.exports = {
  pathPrefix: '/suomifi-design-system',
  plugins: [
    `gatsby-plugin-typescript`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/examples`,
        name: `examples`
      }
    },
    {
      resolve: `gatsby-transformer-code`,
      options: {
        name: `examples`
      }
    },
    {
      resolve: `@wapps/gatsby-plugin-i18next`,
      options: {
        availableLngs: ['fi', 'en'],
        fallbackLng: 'fi',
        i18nextOptions: {
          returnObjects: true
        }
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
    },
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src',
        aliases: {
          components: './components',
          icons: './icons',
          staticIcons: './staticIcons',
          config: './config',
          examples: './examples'
        }
      }
    }
  ]
}
