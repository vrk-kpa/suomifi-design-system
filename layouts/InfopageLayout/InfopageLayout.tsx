import { ReactNode } from 'react';
import { Block } from 'suomifi-ui-components';
import styles from './InfopageLayout.module.scss';

interface InfopageLayoutProps {
  children?: ReactNode;
}

const InfopageLayout: React.FunctionComponent<InfopageLayoutProps> = ({
  children,
}: InfopageLayoutProps) => {
  return (
    <>
      <Block className="container">
        <Block variant="section" className={styles.infopageLayout}>
          {children}
        </Block>
      </Block>
    </>
  );
};

export default InfopageLayout;
