import { NavItem } from "../interfaces/interfaces";

// TODO: Figure out a way to do this based on the selected language, not always 'fi'
import translations from '../locales/fi/components.json'

export const navItems: NavItem[] = [
    {
        title: translations.component_usage_info,
        path: "/components",
    },
    {
        title: translations.button,
        path: "/components/button",
    },
]