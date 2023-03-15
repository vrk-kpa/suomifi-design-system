import { CSSProperties, ReactNode } from 'react';
import styles from './ShowcaseBox.module.scss';

interface ShowcaseBoxProps {
  children: ReactNode;
  style?: CSSProperties;
}

const ShowcaseBox: React.FunctionComponent<ShowcaseBoxProps> = ({
  children,
  style,
}) => {
  return (
    <div className={styles.showcaseBox} style={style}>
      {children}
    </div>
  );
};

export default ShowcaseBox;
