import { NextPage } from 'next';
import { useTranslation } from 'next-export-i18n';
import Head from 'next/head';
import { Heading, Block, Text, RouterLink } from 'suomifi-ui-components';
import SideNavLayout from '../../layouts/SideNavLayout/SideNavLayout';
import { navItems } from '../../utils/styles-sidenav';
import IconShowcase from '../../components/IconShowcase/IconShowcase';
import Link from 'next/link';

const IconsPage: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{`${t('styles.icons')} ${t('common.title_suffix')}`}</title>
      </Head>
      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('styles.icons')}
        navIcon="magicWand"
      >
        <Heading variant="h1" className="mb-xl">
          {t('icons.heading')}
        </Heading>
        <Block my="l">
          <Text variant="lead">{t('icons.ingress')}</Text>
        </Block>
        <Block mb="l">
          <Link href="/components/icon" passHref legacyBehavior>
            <RouterLink>{t('icons.icon_component_link_text')}</RouterLink>
          </Link>
        </Block>
        <IconShowcase />
      </SideNavLayout>
    </>
  );
};

export default IconsPage;
