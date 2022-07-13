import Link from 'next/link';
import { Block } from 'suomifi-ui-components';
import styles from './Header.module.scss';
import { NavItem } from '../../interfaces/interfaces';
import Navbar from './Navbar/Navbar';
import MobileNavMenuButton from './MobileNavMenuButton/MobileNavMenuButton';

// TODO: Get translated titles based on current locale
const navItems: NavItem[] = [
  {
    title: 'Etusivu',
    path: '/',
  },
  {
    title: 'Tyylit',
    path: '/styles',
  },
  {
    title: 'Komponentit',
    path: '/components',
  },
  {
    title: 'Taustatietoa',
    path: '/info',
  },
];

const Header: React.FunctionComponent = () => {
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
