import React, { ReactNode, CSSProperties } from 'react';
import { Block, Heading } from 'suomifi-ui-components';
import styles from './BoxWithIcon.module.scss';

interface BoxWithIconProps {
  children: ReactNode;
  icon: ReactNode;
  variant?: 'default' | 'simple';
  style?: CSSProperties;
}

const BoxWithIcon: React.FunctionComponent<BoxWithIconProps> = ({
  children,
  icon,
  variant = 'default',
  style,
}) => {
  return variant === 'default' ? (
    <Block variant="div" className={styles['box-with-icon']} style={style}>
      <Block variant="div" className={styles['box-with-icon_icon-container']}>
        {icon}
      </Block>
      <Block variant="div" className={styles['box-with-icon_text']}>
        <Heading variant="h3" as="div" className={styles['box-with-icon_h3']}>
          {children}
        </Heading>
      </Block>
    </Block>
  ) : (
    <Block
      variant="div"
      className={styles['simplebox-with-icon']}
      style={style}
    >
      <Block
        variant="div"
        className={styles['simplebox-with-icon_icon-container']}
      >
        {icon}
      </Block>
      <Block variant="div" className={styles['simplebox-with-icon_text']}>
        <Heading variant="h4" as="div">
          {children}
        </Heading>
      </Block>
    </Block>
  );
};

export default BoxWithIcon;
