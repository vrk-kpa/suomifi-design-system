import React, { useState } from 'react';
import { Icon } from 'suomifi-ui-components';
import styles from './MobileNavMenuButton.module.scss';

const MobileNavMenuButton: React.FunctionComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const clickHandler = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <button
      className={styles.mobileMenuButton}
      onClick={clickHandler}
      aria-label="Avaa paanavigaatio"
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
