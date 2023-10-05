import { NavItem } from '../interfaces/interfaces';

// TODO: Figure out a way to do this based on the selected language, not always 'fi'
import translations from '../i18n/translations.fi.json';

export const navItems: NavItem[] = [
  {
    title: translations.components.component_usage_info,
    path: '/components',
  },
  {
    title: translations.components.actionmenu,
    path: '/components/actionmenu',
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
    title: translations.components.date_input,
    path: '/components/dateinput',
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
    title: translations.components.multiselect,
    path: '/components/multiselect',
  },
  {
    title: translations.components.notification,
    path: '/components/notification',
  },
  {
    title: translations.components.pagination,
    path: '/components/pagination',
  },
  {
    title: translations.components.radio_button,
    path: '/components/radiobutton',
  },
  {
    title: translations.components.search_input,
    path: '/components/searchinput',
  },
  {
    title: translations.components.service_navigation,
    path: '/components/servicenavigation',
  },
  {
    title: translations.components.side_navigation,
    path: '/components/sidenavigation',
  },
  {
    title: translations.components.singleselect,
    path: '/components/singleselect',
  },
  {
    title: translations.components.text,
    path: '/components/text',
  },
  {
    title: translations.components.textarea,
    path: '/components/textarea',
  },
  {
    title: translations.components.text_input,
    path: '/components/textinput',
  },
  {
    title: translations.components.toast,
    path: '/components/toast',
  },
  {
    title: translations.components.toggle,
    path: '/components/toggle',
  },
  {
    title: translations.components.tooltip,
    path: '/components/tooltip',
  },
  {
    title: translations.components.wizard_navigation,
    path: '/components/wizardnavigation',
  },
];
