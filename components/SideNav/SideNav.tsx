import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button, Icon, StaticIcon } from "suomifi-ui-components";
import { Block } from "suomifi-ui-components";
import { NavItem } from "../../interfaces/interfaces";
import styles from "./SideNav.module.scss";

type SideNavVariant = "normal" | "smallScreen";

interface SideNavProps {
  items: NavItem[];
  variant?: SideNavVariant;
}

const SideNav: React.FunctionComponent<SideNavProps> = ({ items, variant }) => {
  const router = useRouter();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      {variant === "smallScreen" ? (
        <div
          className={styles.sideNavSmallScreen}
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          <Block variant="nav">
            <Button
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              fullWidth
              style={{
                background: "none",
                padding: 0,
                border: 0,
                lineHeight: "1em",
              }}
            >
              <Block className={styles.navHeader}>
                <div className="flex align-center">
                  <StaticIcon
                    style={{ width: "40px", height: "40px" }}
                    icon="puzzle"
                  />
                  <Block className={styles.navHeadertext}>Komponentit</Block>
                </div>
                <div>
                  <Icon
                    icon={mobileNavOpen ? "chevronUp" : "chevronDown"}
                    style={{ width: "23px", height: "23px" }}
                  />
                </div>
              </Block>
            </Button>
            {mobileNavOpen && (
              <Block>
                <ul>
                  {items.map((item) => (
                    <li
                      key={item.title}
                      className={
                        router.pathname === item.path ? styles.active : ""
                      }
                      aria-current={
                        router.pathname === item.path ? "page" : undefined
                      }
                    >
                      <Link href={item.path}>{item.title.toUpperCase()}</Link>
                    </li>
                  ))}
                </ul>
              </Block>
            )}
          </Block>
        </div>
      ) : (
        <div className={styles.sideNav}>
          <Block className={styles.navHeader}>
            <StaticIcon
              style={{ width: "40px", height: "40px" }}
              icon="puzzle"
            />
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
      )}
    </>
  );
};

export default SideNav;
