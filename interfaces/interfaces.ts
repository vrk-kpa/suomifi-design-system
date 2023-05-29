import { ColorDesignTokens } from 'suomifi-design-tokens';

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

export type ColorTypes = { [key in ColorKeys]?: ColorItem };
