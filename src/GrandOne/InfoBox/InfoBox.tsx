import React, { ReactNode } from 'react';
import {
  Block,
  Heading,
  IllustrativeIconKeys,
  StaticIcon,
  Text,
} from 'suomifi-ui-components';
import { suomifiDesignTokens } from 'suomifi-design-tokens';
import './InfoBox.css';

interface InfoBoxProps {
  children: ReactNode;
  heading: string;
  icon: IllustrativeIconKeys;
}

const InfoBox: React.FunctionComponent<InfoBoxProps> = ({
  children,
  heading,
  icon,
}) => {
  return (
    <Block variant="div" className="infoBox">
      <Block variant="div" className="top">
        <StaticIcon
          icon={icon}
          style={{
            width: '50px',
            height: '50px',
            marginBottom: suomifiDesignTokens.spacing.s,
          }}
        />
        <Heading variant="h3">{heading}</Heading>
      </Block>
      <Text>{children}</Text>
    </Block>
  );
};

export default InfoBox;
