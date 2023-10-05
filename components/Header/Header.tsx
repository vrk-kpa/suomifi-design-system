import Link from 'next/link';
import Image from 'next/image';
import { Block } from 'suomifi-ui-components';
import styles from './Header.module.scss';
import { NavItem } from '../../interfaces/interfaces';
import Navbar from './Navbar/Navbar';
import MobileNavMenuButton from './MobileNavMenuButton/MobileNavMenuButton';
import { useTranslation } from 'next-export-i18n';
import designSystemLogo from '/public/designSystemLogo.svg';

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
      title: t('main_nav.patterns'),
      path: '/patterns',
    },
    {
      title: t('main_nav.info'),
      path: '/info',
    },
  ];

  return (
    <Block className="container">
      <Block variant="header" className={styles.header}>
        <Link href="/">
          <div className={styles.logo}>
            <Image src={designSystemLogo} alt="Suomi.fi Design System" />
          </div>
        </Link>
        <div className={styles.mobileNavContainer}>
          <MobileNavMenuButton
            navItems={navItems}
            ariaLabel={'Avaa päänavigaation'}
          />
        </div>
        <div className={styles.desktopNavContainer}>
          <Navbar navItems={navItems} />
        </div>
      </Block>
    </Block>
  );
};

export default Header;
