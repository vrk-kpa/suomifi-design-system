import styles from "./Navbar.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";
import { Block } from "suomifi-ui-components";
import { NavItem } from "../../../interfaces/interfaces";

const Navbar: React.FunctionComponent = () => {
  const router = useRouter();
  const navItems: NavItem[] = [
    {
      title: "Etusivu",
      path: "/",
    },
    {
      title: "Tyylit",
      path: "/styles",
    },
    {
      title: "Komponentit",
      path: "/components",
    },
    {
      title: "Taustatietoa",
      path: "/info",
    },
  ];

  const isRouteActive = (path: string): boolean => {
    if (path === "/") {
      return router.pathname === "/";
    }
    return router.pathname.includes(path);
  };

  return (
    <div className={styles.navbar}>
      <Block className="container">
        <Block variant="nav">
          <ul>
            {navItems.map((item) => (
              <li
                className={isRouteActive(item.path) ? styles.active : ""}
                key={item.title}
              >
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </Block>
      </Block>
    </div>
  );
};

export default Navbar;
