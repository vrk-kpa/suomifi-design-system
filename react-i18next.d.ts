// import the original type declarations
import 'react-i18next'
// import all namespaces (for the default language, only)
import { Resources as MyResources } from './interfaces/interfaces';

declare module 'react-i18next' {
  // and extend them!
  interface Resources extends MyResources {}
}