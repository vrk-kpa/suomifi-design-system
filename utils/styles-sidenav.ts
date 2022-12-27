import { NavItem } from "../interfaces/interfaces";

// TODO: Figure out a way to do this based on the selected language, not always 'fi'
import translations from '../i18n/translations.fi.json';

export const navItems: NavItem[] = [
    {
        title: translations.styles.styles_usage_info,
        path: "/styles",
    },
    {
        title: translations.styles.colors,
        path: "/styles/colors",
    },
    {
        title: translations.styles.icons,
        path: "/styles/icons",
    },
]