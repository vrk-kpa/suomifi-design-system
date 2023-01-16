import React, { ReactNode } from 'react';
import { Block } from 'suomifi-ui-components';
import './SmallBox.css';

interface SmallBoxProps {
  children: ReactNode;
}

const SmallBox: React.FunctionComponent<SmallBoxProps> = ({ children }) => {
  return (
    <Block variant="div" className="smallBox">
      {children}
    </Block>
  );
};

export default SmallBox;
