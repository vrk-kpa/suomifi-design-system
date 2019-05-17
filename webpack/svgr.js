const removeDefaultSVGRule = (existingConfig, replaceWebpackConfig) => {
  const rules = existingConfig.module.rules.map(rule => {
    if (
      String(rule.test) === String(/\.(ico|svg|jpg|jpeg|png|gif|webp)(\?.*)?$/)
    ) {
      return {
        ...rule,
        test: /\.(ico|jpg|jpeg|png|gif|webp)(\?.*)?$/
      }
    }

    return rule
  })

  replaceWebpackConfig({
    ...existingConfig,
    module: {
      ...existingConfig.module,
      rules
    }
  })
}

// gatsby-plugin-svgr didn't support complex webpack configuration so do it old school
exports.addSVGR = (
  existingConfig,
  { replaceWebpackConfig, setWebpackConfig }
) => {
  removeDefaultSVGRule(existingConfig, replaceWebpackConfig)

  setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.svg$/,
          oneOf: [
            {
              include: /staticIcons/,
              use: [
                {
                  loader: '@svgr/webpack',
                  options: { svgo: true, icon: true }
                },
                'url-loader'
              ]
            },
            {
              exclude: /staticIcons/,
              use: [
                {
                  loader: '@svgr/webpack',
                  options: {
                    svgo: true,
                    svgoConfig: {
                      plugins: [
                        { removeAttrs: { attrs: '(fill|stroke)' } },
                        { removeStyleElement: true }
                      ]
                    },
                    icon: true
                  }
                },
                'url-loader'
              ]
            }
          ]
        }
      ]
    }
  })
}
