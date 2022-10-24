import { useTranslation } from 'next-export-i18n';
import { ReactNode } from 'react';
import { SkipLink, Block } from 'suomifi-ui-components';
import styles from './InfopageLayout.module.scss';

interface InfopageLayoutProps {
  children?: ReactNode;
}

const InfopageLayout: React.FunctionComponent<InfopageLayoutProps> = ({
  children,
}: InfopageLayoutProps) => {
  const { t } = useTranslation();
  return (
    <>
      <SkipLink href="#main">{t('common.skip_to_main_content')}</SkipLink>
      <SkipLink href="#sidenav">{t('common.skip_to_side_navigation')}</SkipLink>
      <Block className="container">
        <Block variant="section" className={styles.infopageLayout}>
          {children}
        </Block>
      </Block>
    </>
  );
};

export default InfopageLayout;
