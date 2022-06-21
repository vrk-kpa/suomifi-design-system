import { CSSProperties, ReactNode } from "react";
import styles from "./ShowCaseBox.module.scss";

interface ShowcaseBoxProps {
  children: ReactNode | ReactNode[];
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
