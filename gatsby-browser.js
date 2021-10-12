require('./src/pages/styles/styles.css');
require('suomifi-ui-components/dist/main.css');
exports.onClientEntry = () => {
  // cleanup detected language at least for now when availableLngs evolves
  typeof window !== 'undefined' && window.localStorage.removeItem('@wappsLng');
};
