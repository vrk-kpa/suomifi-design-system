import { Block } from 'suomifi-ui-components';
import styles from './Divider.module.scss';

const Divider: React.FunctionComponent = () => {
  return <Block variant="div" my="l" className={styles.divider}></Block>;
};

export default Divider;
