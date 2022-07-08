import React, { useState } from 'react';
import { Icon } from 'suomifi-ui-components';
import styles from './MobileNavMenuButton.module.scss';

interface MobileNavMenuButtonProps {
  /** For screenreader to read */
  ariaLabel: string;
}

/** TODO: Actually open the menu and show links */
const MobileNavMenuButton: React.FunctionComponent<MobileNavMenuButtonProps> = (
  props,
) => {
  const { ariaLabel } = props;
  const [menuOpen, setMenuOpen] = useState(false);

  const clickHandler = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <button
      className={styles.mobileMenuButton}
      onClick={clickHandler}
      aria-label={ariaLabel}
      aria-expanded={menuOpen}
      aria-haspopup={true}
    >
      <Icon
        className={styles.mobileMenuIcon}
        icon={menuOpen ? 'close' : 'menu'}
      />
    </button>
  );
};

export default MobileNavMenuButton;
