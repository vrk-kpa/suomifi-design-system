module.exports = {
  pathPrefix: '/suomifi-design-system',
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locale`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/examples`,
        name: `examples`,
      },
    },
    {
      resolve: `gatsby-transformer-code`,
      options: {
        name: `examples`,
      },
    },
    {
      resolve: `@wapps/gatsby-plugin-i18next`,
      options: {
        availableLngs: ['fi'],
        fallbackLng: 'fi',
        i18nextOptions: {
          returnObjects: true,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Source Sans Pro:300,400,600&display=swap'],
        },
      },
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
          examples: './examples',
        },
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'designsystem.suomi.fi',
        protocol: 'https',
        hostname: 'designsystem.suomi.fi',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/staticIcons/SuomiFi.svg`,
      },
    },
  ],
};
