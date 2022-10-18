import { ReactNode } from 'react';
import {
  Block,
  RouterLink,
  ServiceNavigation,
  ServiceNavigationItem,
  SkipLink,
  StaticIcon,
} from 'suomifi-ui-components';
import { NavItem } from '../../interfaces/interfaces';
import styles from './CardLayout.module.scss';
import { useTranslation } from 'next-export-i18n';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface CardLayoutProps {
  navItems: NavItem[];
  children?: ReactNode;
}

const CardLayout: React.FunctionComponent<CardLayoutProps> = ({
  navItems,
  children,
}: CardLayoutProps) => {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <>
      <SkipLink href="#main">{t('common.skip_to_main_content')}</SkipLink>
      <SkipLink href="#sidenav">{t('common.skip_to_side_navigation')}</SkipLink>
      <Block className="container">
        <Block variant="section" className={styles.smallScreenNavContainer}>
          <ServiceNavigation
            aria-label="Sivunavigaatio"
            id="sidenav"
            variant="smallScreen"
            smallScreenExpandButtonText={
              <Block variant="div" className="flex align-center">
                <StaticIcon className={styles.navStaticIcon} icon="puzzle" />
                <Block className={styles.navHeadertext}>Komponentit</Block>
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
        <Block variant="section" className={styles.cardLayout}>
          <Block className={styles.left}>
            <Block variant="div" className={styles.navHeader}>
              <StaticIcon className={styles.navStaticIcon} icon="puzzle" />
              <Block className={styles.navHeadertext}>Komponentit</Block>
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

export default CardLayout;
