export interface SideNavData {
  title: string
  items: SideNavItemData[]
}

export interface SideNavItemData {
  to: string
  label: string
  children?: SideNavItemData[]
}
