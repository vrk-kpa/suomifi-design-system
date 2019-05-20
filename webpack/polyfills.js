// Add polyfills for IE11
// See https://gist.github.com/arnars/2bb1d81fc0955d57fe88a8348695f594
exports.addPolyfills = (existingConfig, { replaceWebpackConfig }) => {
  // We want to include the babel polyfills before any application code,
  // so we're inserting it as an additional entry point.  Gatsby does not allow
  // this in "setWebpackConfig", so we have to use "replaceWebpackConfig"
  const config = existingConfig

  const app =
    typeof config.entry.app === 'string' ? [config.entry.app] : config.entry.app

  config.entry.app = ['@babel/polyfill', ...app]
  replaceWebpackConfig(config)
}
