import Link from 'next/link';
import { Block } from 'suomifi-ui-components';
import styles from './Header.module.scss';
import { NavItem } from '../../interfaces/interfaces';
import Navbar from './Navbar/Navbar';
import MobileNavMenuButton from './MobileNavMenuButton/MobileNavMenuButton';
import { useTranslation } from 'next-export-i18n';

const Header: React.FunctionComponent = () => {
  const { t } = useTranslation();
  const navItems: NavItem[] = [
    {
      title: t('main_nav.home'),
      path: '/',
    },
    {
      title: t('main_nav.styles'),
      path: '/styles',
    },
    {
      title: t('main_nav.components'),
      path: '/components',
    },
    {
      title: t('main_nav.info'),
      path: '/info',
    },
  ];

  return (
    <Block variant="header" className={styles.header}>
      <Block className={styles.upper}>
        <Block className={styles.container}>
          <Link href="/">
            <img
              src="/designSystemLogo.svg"
              alt="Suomi.fi Design System"
              className={styles.logo}
            />
          </Link>
          <div className={styles.mobileNavContainer}>
            <MobileNavMenuButton
              navItems={navItems}
              ariaLabel={'Avaa päänavigaation'}
            />
          </div>
        </Block>
      </Block>
      <div className={styles.desktopNavContainer}>
        <Navbar navItems={navItems} />
      </div>
    </Block>
  );
};

export default Header;
