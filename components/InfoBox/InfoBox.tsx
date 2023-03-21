import { ReactNode } from 'react';
import { Block } from 'suomifi-ui-components';
import styles from './InfoBox.module.scss';

interface InfoBoxProps {
  children: ReactNode;
}

const InfoBox: React.FunctionComponent<InfoBoxProps> = ({ children }) => {
  return (
    <Block variant="div" className={styles.infoBox}>
      {children}
    </Block>
  );
};

export default InfoBox;
