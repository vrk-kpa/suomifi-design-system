import { ReactNode } from "react";
import { Block } from "suomifi-ui-components";
import { NavItem } from "../../interfaces/interfaces";
import styles from "./CardLayout.module.scss";
import SideNav from "./SideNav/SideNav";

interface CardLayoutProps {
  navItems: NavItem[];
  children?: ReactNode | ReactNode[];
}

const CardLayout: React.FunctionComponent<CardLayoutProps> = ({
  navItems,
  children,
}: CardLayoutProps) => {
  return (
    <Block className="container">
      <Block variant="section" className={styles.cardLayout}>
        <Block className={styles.left}>
          <SideNav items={navItems}></SideNav>
        </Block>
        <Block variant="main" className={styles.right}>
          {children}
        </Block>
      </Block>
    </Block>
  );
};

export default CardLayout;
