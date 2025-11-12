import { NextPage } from 'next';
import { useTranslation } from 'next-export-i18n';
import Head from 'next/head';
import {
  Heading,
  Block,
  Text,
  Paragraph,
  ExternalLink,
} from 'suomifi-ui-components';
import SideNavLayout from '../../layouts/SideNavLayout/SideNavLayout';
import { navItems } from '../../utils/info-sidenav';

const StylesIndexPage: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{`${t('main_nav.info')} ${t('common.title_suffix')}`}</title>
      </Head>
      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('main_nav.info')}
        navIcon="book"
      >
        <Heading variant="h1" className="mb-xl">
          {t('info.info')}
        </Heading>
        <Block mb="xl">
          <Text variant="lead">{t('info_main_page.ingress')}</Text>
        </Block>
        <Block mb="xl">
          <Heading variant="h2" className="mb-l">
            {t('info_main_page.ux_and_accessibility.heading')}
          </Heading>
          <Paragraph mb="l">
            {t('info_main_page.ux_and_accessibility.paragraph_1')}
          </Paragraph>
          <Paragraph>
            {t('info_main_page.ux_and_accessibility.paragraph_2')}
          </Paragraph>
        </Block>
        <Block mb="xl">
          <Heading variant="h2" className="mb-l">
            {t('info_main_page.brand.heading')}
          </Heading>
          <Paragraph mb="l">{t('info_main_page.brand.paragraph_1')}</Paragraph>
          <Paragraph>{t('info_main_page.brand.paragraph_2')}</Paragraph>
        </Block>
        <Block mb="xl">
          <Heading variant="h2" className="mb-l">
            {t('info_main_page.ask_and_comment.heading')}
          </Heading>
          <Paragraph mb="l">
            {t('info_main_page.ask_and_comment.paragraph_1')}
          </Paragraph>
          <ExternalLink
            href="https://github.com/vrk-kpa/suomifi-ui-components"
            labelNewWindow={t('common.opens_in_a_new_tab')}
          >
            {t('info_main_page.ask_and_comment.link_text')}
          </ExternalLink>
        </Block>
      </SideNavLayout>
    </>
  );
};

export default StylesIndexPage;
