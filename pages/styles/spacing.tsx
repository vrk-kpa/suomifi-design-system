import { NextPage } from 'next';
import { useTranslation } from 'next-export-i18n';
import Head from 'next/head';
import { Heading, Block, Text } from 'suomifi-ui-components';
import SpacingShowcase from '../../components/SpacingShowcase/SpacingShowcase';
import SideNavLayout from '../../layouts/SideNavLayout/SideNavLayout';
import { navItems } from '../../utils/styles-sidenav';

const StylesIndexPage: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('styles.spacing')} | Suomi.fi Design System</title>
      </Head>
      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('main_nav.styles')}
        navIcon="magicWand"
      >
        <Heading variant="h1" className="mb-xl">
          {t('spacing.heading')}
        </Heading>
        <Block mb="l">
          <Text variant="lead">{t('spacing.ingress')}</Text>
        </Block>
        <SpacingShowcase />
      </SideNavLayout>
    </>
  );
};

export default StylesIndexPage;
