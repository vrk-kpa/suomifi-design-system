import styles from './Navbar.module.scss';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Block } from 'suomifi-ui-components';
import { NavItem } from '../../../interfaces/interfaces';

interface NavbarProps {
  /** Items for the menu */
  navItems: NavItem[];
}

const Navbar: React.FunctionComponent<NavbarProps> = (props) => {
  const { navItems } = props;
  const router = useRouter();

  const isRouteActive = (path: string): boolean => {
    if (path === '/') {
      return router.pathname === '/';
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
                className={isRouteActive(item.path) ? styles.active : ''}
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
