export interface SideNavData {
  title: string
  items: SideNavItemData[]
}

interface SideNavItemData {
  to: string
  label: string
  children?: SideNavItemData[]
}
