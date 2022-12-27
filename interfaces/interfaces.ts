import { ColorDesignTokens } from "suomifi-design-tokens";
import { baseIcons, illustrativeIcons, doctypeIcons } from 'suomifi-icons';

export interface NavItem {
    title: string;
    path: string;
}

type ColorKeys = keyof ColorDesignTokens;

export interface ColorItem {
  name: string;
  value: string;
  border: string;
}

export interface IconCategories {
  id: string
  title: string,
  icons: typeof baseIcons | typeof illustrativeIcons | typeof doctypeIcons,
  linkTitle: string,
  linkUrl: string,
}

export type ColorTypes = { [key in ColorKeys]?: ColorItem };