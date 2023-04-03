import { NextPage } from 'next';
import { useTranslation } from 'next-export-i18n';
import Head from 'next/head';
import { Heading, Block, Text, RouterLink } from 'suomifi-ui-components';

import SideNavLayout from '../../layouts/SideNavLayout/SideNavLayout';
import { navItems } from '../../utils/styles-sidenav';
import { IconCategories } from '../../interfaces/interfaces';

import { baseIcons, illustrativeIcons, doctypeIcons } from 'suomifi-icons';
import IconShowcase from '../../components/IconShowcase/IconShowcase';
import Link from 'next/link';

const IconsPage: NextPage = () => {
  const { t } = useTranslation();

  const iconCategories: IconCategories[] = [
    {
      id: 'baseIcons',
      title: t('icons.base_icons.title'),
      icons: baseIcons,
      linkTitle: t('icons.base_icons.link_title'),
      linkUrl:
        'https://github.com/vrk-kpa/suomifi-icons/tree/master/src/baseIcons',
    },
    {
      id: 'illustrativeIcons',
      title: t('icons.illustrative_icons.title'),
      icons: illustrativeIcons,
      linkTitle: t('icons.illustrative_icons.link_title'),
      linkUrl:
        'https://github.com/vrk-kpa/suomifi-icons/tree/master/src/illustrativeIcons',
    },
    {
      id: 'doctypeIcons',
      title: t('icons.doctype_icons.title'),
      icons: doctypeIcons,
      linkTitle: t('icons.doctype_icons.link_title'),
      linkUrl:
        'https://github.com/vrk-kpa/suomifi-icons/tree/master/src/doctypeIcons',
    },
  ];

  return (
    <>
      <Head>
        <title>{t('styles.icons')} | Suomi.fi Design System</title>
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
          <Link href="/components/icon" passHref>
            <RouterLink>{t('icons.icon_component_link_text')}</RouterLink>
          </Link>
        </Block>
        <IconShowcase iconCategories={iconCategories} />
      </SideNavLayout>
    </>
  );
};

export default IconsPage;
