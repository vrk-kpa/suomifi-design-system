import { NavItem } from "../interfaces/interfaces";

// TODO: Figure out a way to do this based on the selected language, not always 'fi'
import translations from '../i18n/translations.fi.json';

export const navItems: NavItem[] = [
    {
        title: translations.info.info,
        path: "/info",
    },
    {
        title: translations.info.accessibility,
        path: "/info/accessibility",
    }
]
