import type { NextPage } from 'next';
import { useTranslation } from 'next-export-i18n';
import Head from 'next/head';
import { Block, Heading, Text } from 'suomifi-ui-components';
import SideNavLayout from '../../layouts/SideNavLayout/SideNavLayout';
import { navItems } from '../../utils/patterns-sidenav';

const ComponentsIndexPage: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('main_nav.patterns')} | Suomi.fi Design System</title>
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
          <Text variant="lead">Lorem ipsum dolor sit amet</Text>
        </Block>
      </SideNavLayout>
    </>
  );
};

export default ComponentsIndexPage;
