import { useTranslation } from 'next-export-i18n';
import { ReactNode } from 'react';
import { Block, SkipLink } from 'suomifi-ui-components';

interface PlainLayoutProps {
  children?: ReactNode;
}

const PlainLayout: React.FunctionComponent<PlainLayoutProps> = ({
  children,
}: PlainLayoutProps) => {
  const { t } = useTranslation();
  return (
    <>
      <SkipLink href="#main">{t('common.skip_to_main_content')}</SkipLink>
      <Block className="container">
        <Block variant="main" id="main">
          {children}
        </Block>
      </Block>
    </>
  );
};

export default PlainLayout;
