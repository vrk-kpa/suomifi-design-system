import { ReactNode } from 'react';
import {
  Block,
  RouterLink,
  ServiceNavigation,
  ServiceNavigationItem,
  StaticIcon,
  IllustrativeIconKeys,
} from 'suomifi-ui-components';
import { NavItem } from '../../interfaces/interfaces';
import styles from './SideNavLayout.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface SideNavLayoutProps {
  navItems: NavItem[];
  children?: ReactNode;
  navIcon: IllustrativeIconKeys;
  navHeaderText: string;
}

const SideNavLayout: React.FunctionComponent<SideNavLayoutProps> = ({
  navItems,
  children,
  navIcon,
  navHeaderText,
}: SideNavLayoutProps) => {
  const router = useRouter();
  return (
    <>
      <Block className="container">
        <Block variant="section" className={styles.smallScreenNavContainer}>
          <ServiceNavigation
            aria-label="Sivunavigaatio"
            id="sidenav"
            variant="smallScreen"
            smallScreenExpandButtonText={
              <Block variant="div" className="flex align-center">
                <StaticIcon className={styles.navStaticIcon} icon={navIcon} />
                <Block className={styles.navHeadertext}>{navHeaderText}</Block>
              </Block>
            }
            initiallyExpanded={false}
          >
            {navItems.map((ni) => (
              <ServiceNavigationItem
                selected={router.pathname === ni.path}
                key={ni.title}
              >
                <Link href={ni.path} passHref>
                  <RouterLink
                    aria-current={
                      router.pathname === ni.path ? 'page' : undefined
                    }
                  >
                    {ni.title}
                  </RouterLink>
                </Link>
              </ServiceNavigationItem>
            ))}
          </ServiceNavigation>
        </Block>
        <Block variant="section" className={styles.SideNavLayout}>
          <Block className={styles.left}>
            <Block variant="div" className={styles.navHeader}>
              <StaticIcon className={styles.navStaticIcon} icon={navIcon} />
              <Block className={styles.navHeadertext}>{navHeaderText}</Block>
            </Block>
            <ServiceNavigation aria-label="Sivunavigaatio" id="sidenav">
              {navItems.map((ni) => (
                <ServiceNavigationItem
                  selected={router.pathname === ni.path}
                  key={ni.title}
                >
                  <Link href={ni.path} passHref>
                    <RouterLink
                      aria-current={
                        router.pathname === ni.path ? 'page' : undefined
                      }
                    >
                      {ni.title}
                    </RouterLink>
                  </Link>
                </ServiceNavigationItem>
              ))}
            </ServiceNavigation>
          </Block>
          <Block variant="main" id="main" className={styles.right}>
            {children}
          </Block>
        </Block>
      </Block>
    </>
  );
};

export default SideNavLayout;
