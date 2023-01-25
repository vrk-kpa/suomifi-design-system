import React, { ReactNode, CSSProperties } from 'react';
import {
  Block,
  Heading,
  IllustrativeIconKeys,
  BaseIconKeys,
  StaticIcon,
  Text,
} from 'suomifi-ui-components';
import { suomifiDesignTokens } from 'suomifi-design-tokens';
import './BoxWithIcon.css';

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
    <Block variant="div" className="box-with-icon" style={style}>
      <Block variant="div" className="box-with-icon_icon">
        {icon}
      </Block>
      <Block variant="div" className="box-with-icon_text">
        <Heading variant="h3" as="div">
          {children}
        </Heading>
      </Block>
    </Block>
  ) : (
    <Block variant="div" className="simplebox-with-icon" style={style}>
      <Block variant="div" className="simplebox-with-icon_icon">
        {icon}
      </Block>
      <Block variant="div" className="simplebox-with-icon_text">
        <Heading variant="h4" as="div">
          {children}
        </Heading>
      </Block>
    </Block>
  );
};

export default BoxWithIcon;
