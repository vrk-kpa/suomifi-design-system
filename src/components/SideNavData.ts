import { ReactNode } from 'react';

export interface SideNavData {
  title: string;
  icon: ReactNode;
  items: SideNavItemData[];
}

export interface SideNavItemData {
  to: string;
  showAsTo?: string;
  label: string;
  children?: SideNavItemData[];
}
