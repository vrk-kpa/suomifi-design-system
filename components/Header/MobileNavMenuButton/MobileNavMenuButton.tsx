import { Icon } from 'suomifi-ui-components';
import styles from './MobileNavMenuButton.module.scss';

const MobileNavMenuButton: React.FunctionComponent = () => {
  return (
    <button className={styles.mobileMenuButton}>
      <Icon
        className={styles.mobileMenuIcon}
        icon="menu"
        variant="secondaryNoBorder"
        aria-label="Avaa paanavigaatio"
      />
    </button>
  );
};

export default MobileNavMenuButton;
