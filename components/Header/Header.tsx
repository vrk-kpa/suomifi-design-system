import Link from 'next/link';
import { Block, Icon } from 'suomifi-ui-components';
import styles from './Header.module.scss';
import Navbar from './Navbar/Navbar';
import MobileNavMenuButton from './MobileNavMenuButton/MobileNavMenuButton';

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
            <MobileNavMenuButton />
          </div>
        </Block>
      </Block>
      <div className={styles.desktopNavContainer}>
        <Navbar />
      </div>
    </Block>
  );
};

export default Header;
