import { ReactNode } from 'react';
import { Block } from 'suomifi-ui-components';

interface PlainLayoutProps {
  children?: ReactNode;
}

const PlainLayout: React.FunctionComponent<PlainLayoutProps> = ({
  children,
}: PlainLayoutProps) => {
  return (
    <>
      <Block className="container">
        <Block variant="main" id="main">
          {children}
        </Block>
      </Block>
    </>
  );
};

export default PlainLayout;
