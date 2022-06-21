import React, { ReactNode, CSSProperties } from "react";
import styles from "./MobileDevice.module.scss";

interface MobileDeviceProps {
  style?: CSSProperties;
  children: ReactNode | ReactNode[];
}

const MobileDevice: React.FunctionComponent<MobileDeviceProps> = ({
  style,
  children,
}: MobileDeviceProps) => (
  <div className={styles.frame}>
    <div className={styles.microphone} />
    <div
      className={styles.screen}
      style={{
        ...style,
      }}
    >
      {children}
    </div>
  </div>
);

export default MobileDevice;
