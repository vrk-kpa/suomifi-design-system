import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import classnames from 'classnames';
import { Icon } from 'suomifi-ui-components';
import styles from './MobileNavMenuButton.module.scss';

/**
 * TODO: getting items from props etc.
 */
const navItems = [
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
    title: 'Info',
    path: '/info',
  },
];

interface MobileNavMenuButtonProps {
  /** For screenreader to read */
  ariaLabel: string;
}

/** TODO: Actually open the menu and show links */
const MobileNavMenuButton: React.FunctionComponent<MobileNavMenuButtonProps> = (
  props,
) => {
  const { ariaLabel } = props;
  const [menuOpen, setMenuOpen] = React.useState(false);
  const router = useRouter();

  const clickHandler = () => {
    console.log('mobileNaV clickandler:', menuOpen);
    setMenuOpen(!menuOpen);
  };

  // If the current path is only partially the current one. For e.g when at /components/button.
  const isPartiallyActive = (to: string, pathName: string) => {
    return (
      to &&
      pathName.substring(1).startsWith(to.substring(1)) &&
      to != pathName &&
      to.length > 1
    );
  };

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.button}
        onClick={clickHandler}
        aria-label={ariaLabel}
        aria-expanded={menuOpen}
        aria-haspopup={true}
      >
        <Icon className={styles.icon} icon={menuOpen ? 'close' : 'menu'} />
      </button>
      {menuOpen && (
        <div className={styles.menu}>
          <nav>
            <ul>
              {navItems.map((item) => (
                <li
                  key={item.title}
                  className={classnames(
                    { [styles.active]: router.pathname === item.path },
                    {
                      [styles.partiallyActive]: isPartiallyActive(
                        item.path,
                        router.pathname,
                      ),
                    },
                  )}
                  aria-current={
                    router.pathname === item.path ? 'page' : undefined
                  }
                >
                  <Link href={item.path}>{item.title.toUpperCase()}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileNavMenuButton;
