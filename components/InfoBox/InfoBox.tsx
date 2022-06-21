import { ReactNode } from "react";
import styles from "./InfoBox.module.scss";

interface InfoBoxProps {
  children: ReactNode[];
}

const InfoBox: React.FunctionComponent<InfoBoxProps> = ({ children }) => {
  return <div className={styles.infoBox}>{children}</div>;
};

export default InfoBox;
