// Localisation stuff
// Import all namespaces for default language only
import common from '../locales/fi/common.json'
import buttonPage from '../locales/fi/buttonPage.json';
export interface Resources {
  common: typeof common,
  buttonPage: typeof buttonPage
  // .. Add others as they come
}

//////////////////////////////////
export interface NavItem {
    title: string;
    path: string;
}