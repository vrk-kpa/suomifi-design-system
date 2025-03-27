import { NavItem } from '../interfaces/interfaces';

// TODO: Figure out a way to do this based on the selected language, not always 'fi'
import translations from '../i18n/translations.fi.json';

export const navItems: NavItem[] = [
  {
    title: translations.patterns.general,
    path: '/patterns',
  },
  {
    title: translations.patterns.static_form,
    path: '/patterns/static-form',
  },
  {
    title: translations.patterns.multi_insert,
    path: '/patterns/multi-insert',
  },
  {
    title: translations.patterns.datetime,
    path: '/patterns/datetime',
  },
  {
    title: translations.patterns.table_with_filters,
    path: '/patterns/table-with-filters',
  },
];
