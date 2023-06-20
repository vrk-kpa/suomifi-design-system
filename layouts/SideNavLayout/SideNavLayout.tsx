import { ReactNode, ReactElement } from 'react';
import {
  Block,
  RouterLink,
  ServiceNavigation,
  ServiceNavigationItem,
  IconMagicWand,
  IconBook,
  IconPuzzle,
} from 'suomifi-ui-components';
import { NavItem } from '../../interfaces/interfaces';
import styles from './SideNavLayout.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

type NavIcon = 'book' | 'puzzle' | 'magicWand';

interface SideNavLayoutProps {
  navItems: NavItem[];
  children?: ReactNode;
  navIcon: NavIcon;
  navHeaderText: string;
}

const getIcon = (icon: NavIcon, className: string): ReactElement | null => {
  switch (icon) {
    case 'book':
      return <IconBook className={className} />;
    case 'puzzle':
      return <IconPuzzle className={className} />;
    case 'magicWand':
      return <IconMagicWand className={className} />;
    default:
      return null;
  }
};

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
                {getIcon(navIcon, styles.navStaticIcon)}
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
              {getIcon(navIcon, styles.navStaticIcon)}
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
