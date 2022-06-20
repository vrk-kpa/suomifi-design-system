import Link from "next/link";
import { useRouter } from "next/router";
import { StaticIcon } from "suomifi-ui-components";
import { Block } from "suomifi-ui-components";
import { NavItem } from "../../../interfaces/interfaces";
import styles from "./SideNav.module.scss";

interface SideNavProps {
  items: NavItem[];
}

const SideNav: React.FunctionComponent<SideNavProps> = ({ items }) => {
  const router = useRouter();

  return (
    <div className={styles.sideNav}>
      <Block className={styles.navHeader}>
        <StaticIcon style={{ width: "40px", height: "40px" }} icon="puzzle" />
        <Block className={styles.navHeadertext}>Komponentit</Block>
      </Block>
      <Block variant="nav">
        <ul>
          {items.map((item) => (
            <li
              key={item.title}
              className={router.pathname === item.path ? styles.active : ""}
            >
              <Link href={item.path}>{item.title.toUpperCase()}</Link>
            </li>
          ))}
        </ul>
      </Block>
    </div>
  );
};

export default SideNav;
