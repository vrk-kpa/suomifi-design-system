exports.onCreateWebpackConfig = ({ stage, getConfig, actions, plugins }) => {
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
