const rimraf = require('rimraf')

const cleanUp = () => {
  ;[`${__dirname}/.cache`, `${__dirname}/public`].forEach(path => {
    console.log(`Cleaning '${path}'`)
    rimraf.sync(path)
  })
}

exports.onPreInit = () => {
  cleanUp()
}
