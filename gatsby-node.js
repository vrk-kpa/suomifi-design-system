const { addPolyfills } = require('./webpack/polyfills')
const { addSVGR } = require('./webpack/svgr')

exports.onCreateWebpackConfig = ({ stage, getConfig, actions }) => {
  switch (stage) {
    case 'build-javascript':
      addPolyfills(getConfig(), actions)
  }

  addSVGR(getConfig(), actions)
}
