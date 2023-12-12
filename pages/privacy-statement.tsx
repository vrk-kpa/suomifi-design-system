import type { NextPage } from 'next';
import { useTranslation } from 'next-export-i18n';
import Head from 'next/head';

import { Heading, Paragraph } from 'suomifi-ui-components';
import InfopageLayout from '../layouts/InfopageLayout/InfopageLayout';

const FrontPage: NextPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('privacy_statement.heading')} | Suomi.fi Design System</title>
      </Head>
      <InfopageLayout>
        <Heading variant="h1" className="mb-xl">
          {t('privacy_statement.heading')}
        </Heading>
        <Paragraph mb="l">{t('privacy_statement.paragraph_1')}</Paragraph>
        <Paragraph>{t('privacy_statement.paragraph_2')}</Paragraph>
      </InfopageLayout>
    </>
  );
};

export default FrontPage;
