/* eslint-disable @typescript-eslint/no-var-requires */
const polyfillConfig = require('./webpack/polyfills');

exports.onCreateWebpackConfig = ({ stage, getConfig, actions, plugins }) => {
  switch (stage) {
    case 'build-javascript':
      polyfillConfig.addPolyfills(getConfig(), actions);
  }
  const dev = stage === 'develop';
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        fs: false,
      },
    },
    plugins: [
      plugins.define({
        process: dev,
        'process.env': dev,
        'process.env.NODE_ENV': dev ? 'development' : false,
      }),
    ],
  });
};
