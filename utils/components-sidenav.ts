import { NavItem } from '../interfaces/interfaces';

// TODO: Figure out a way to do this based on the selected language, not always 'fi'
import translations from '../i18n/translations.fi.json';

export const navItems: NavItem[] = [
  {
    title: translations.components.component_usage_info,
    path: '/components',
  },
  {
    title: translations.components.alert,
    path: '/components/alert',
  },
  {
    title: translations.components.block,
    path: '/components/block',
  },
  {
    title: translations.components.breadcrumb,
    path: '/components/breadcrumb',
  },
  {
    title: translations.components.button,
    path: '/components/button',
  },
  {
    title: translations.components.checkbox,
    path: '/components/checkbox',
  },
  {
    title: translations.components.dropdown,
    path: '/components/dropdown',
  },
  {
    title: translations.components.expander,
    path: '/components/expander',
  },
  {
    title: translations.components.heading,
    path: '/components/heading',
  },
  {
    title: translations.components.icon,
    path: '/components/icon',
  },
  {
    title: translations.components.language_menu,
    path: '/components/languagemenu',
  },
  {
    title: translations.components.link,
    path: '/components/link',
  },
  {
    title: translations.components.loading_spinner,
    path: '/components/loadingspinner',
  },
  {
    title: translations.components.modal,
    path: '/components/modal',
  },
  {
    title: translations.components.wizard_navigation,
    path: '/components/wizardnavigation',
  },
];
