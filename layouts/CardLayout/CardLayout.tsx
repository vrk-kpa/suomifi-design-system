import { ReactNode } from 'react';
import { Block, SkipLink } from 'suomifi-ui-components';
import { NavItem } from '../../interfaces/interfaces';
import styles from './CardLayout.module.scss';
import SideNav from '../../components/SideNav/SideNav';
import { useTranslation } from 'next-export-i18n';

interface CardLayoutProps {
  navItems: NavItem[];
  children?: ReactNode;
}

const CardLayout: React.FunctionComponent<CardLayoutProps> = ({
  navItems,
  children,
}: CardLayoutProps) => {
  const { t } = useTranslation();
  return (
    <>
      <SkipLink href="#main">{t('common.skip_to_main_content')}</SkipLink>
      <SkipLink href="#sidenav">{t('common.skip_to_side_navigation')}</SkipLink>
      <Block className="container">
        <Block variant="section" className={styles.smallScreenNavContainer}>
          <SideNav items={navItems} variant="smallScreen"></SideNav>
        </Block>
        <Block variant="section" className={styles.cardLayout}>
          <Block className={styles.left}>
            <SideNav items={navItems}></SideNav>
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
