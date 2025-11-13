import type { NextPage } from 'next';
import { useTranslation } from 'next-export-i18n';
import Head from 'next/head';

import { Heading, Paragraph, ExternalLink } from 'suomifi-ui-components';
import InfopageLayout from '../layouts/InfopageLayout/InfopageLayout';

const FrontPage: NextPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('accessibility_statement.heading')}</title>
      </Head>
      <InfopageLayout>
        <Heading variant="h1" className="mb-l">
          {t('accessibility_statement.heading')}
        </Heading>
        <Paragraph mb="l">{t('accessibility_statement.paragraph_1')}</Paragraph>
        <Paragraph mb="l">{t('accessibility_statement.paragraph_2')}</Paragraph>

        <Heading variant="h2" className="mb-l">
          {t('accessibility_statement.how_accessible_are_pages.heading')}
        </Heading>
        <Paragraph mb="l">
          {t('accessibility_statement.how_accessible_are_pages.paragraph')}
        </Paragraph>

        <Heading variant="h2" className="mb-l">
          {t('accessibility_statement.notice_problems.heading')}
        </Heading>
        <Paragraph mb="l">
          {t('accessibility_statement.notice_problems.paragraph')}
        </Paragraph>

        <Heading variant="h2" className="mb-l">
          {t('accessibility_statement.supervision.heading')}
        </Heading>
        <Paragraph mb="l">
          {t('accessibility_statement.supervision.paragraph')}
        </Paragraph>

        <Heading variant="h2" className="mb-l">
          {t('accessibility_statement.contacts.heading')}
        </Heading>
        <Paragraph mb="l">
          {t('accessibility_statement.contacts.paragraph_1')}
        </Paragraph>
        <Paragraph mb="l">
          {t('accessibility_statement.contacts.paragraph_2')}
        </Paragraph>
        <Paragraph mb="l">
          <ExternalLink
            href="https://saavutettavuusvaatimukset.fi"
            labelNewWindow={t('common.opens_in_a_new_tab')}
          >
            {t('accessibility_statement.contacts.paragraph_3')}
          </ExternalLink>
        </Paragraph>
        <Paragraph mb="l">
          {t('accessibility_statement.contacts.paragraph_4')}
        </Paragraph>
        <Paragraph mb="l">
          {t('accessibility_statement.contacts.paragraph_5')}
        </Paragraph>

        <Heading variant="h2" className="mb-l">
          {t('accessibility_statement.testing.heading')}
        </Heading>
        <Paragraph mb="l">
          {t('accessibility_statement.testing.paragraph')}
        </Paragraph>
      </InfopageLayout>
    </>
  );
};

export default FrontPage;
