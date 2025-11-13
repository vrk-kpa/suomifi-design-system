import type { NextPage } from 'next';
import { useTranslation } from 'next-export-i18n';
import Head from 'next/head';
import { Block, Heading, Paragraph, Text } from 'suomifi-ui-components';
import SideNavLayout from '../../layouts/SideNavLayout/SideNavLayout';
import { navItems } from '../../utils/patterns-sidenav';

const ComponentsIndexPage: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{`${t('main_nav.patterns')} ${t('common.title_suffix')}`}</title>
      </Head>
      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('main_nav.patterns')}
        navIcon="puzzle"
      >
        <Heading variant="h1" className="mb-xl">
          {t('patterns.general')}
        </Heading>
        <Block my="l">
          <Text variant="lead">{t('patterns_main_page.ingress')}</Text>
        </Block>
        <Paragraph mb="l">{t('patterns_main_page.paragraph_1')}</Paragraph>
        <Paragraph mb="l">{t('patterns_main_page.paragraph_2')}</Paragraph>
      </SideNavLayout>
    </>
  );
};

export default ComponentsIndexPage;
