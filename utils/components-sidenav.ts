import { NavItem } from "../interfaces/interfaces";

// TODO: Figure out a way to do this based on the selected language, not always 'fi'
import translations from '../i18n/translations.fi.json';

export const navItems: NavItem[] = [
    {
        title: translations.components.component_usage_info,
        path: "/components",
    },
    {
        title: translations.components.button,
        path: "/components/button",
    },
]