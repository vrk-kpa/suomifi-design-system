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
          {t('info.accessibility')}
        </Heading>
        <Block mb="xl">
          <Text variant="lead">{t('accessibility_page.ingress')}</Text>
        </Block>
        <Paragraph mb="l">{t('accessibility_page.paragraph_1')}</Paragraph>
        <Paragraph mb="l">{t('accessibility_page.paragraph_2')}</Paragraph>
        <Block mb="l">
          <ExternalLink
            href="https://www.finlex.fi/fi/laki/alkup/2019/20190306"
            labelNewWindow={t('common.opens_in_a_new_tab')}
          >
            {t('accessibility_page.link_1')}
          </ExternalLink>
        </Block>
        <Block mb="xl">
          <ExternalLink
            href="https://eur-lex.europa.eu/legal-content/FI/TXT/HTML/?uri=CELEX:32016L2102&from=FI"
            labelNewWindow={t('common.opens_in_a_new_tab')}
          >
            {t('accessibility_page.link_2')}
          </ExternalLink>
        </Block>
        <Block mb="l">
          <ExternalLink
            href="https://www.w3.org/TR/WCAG22/"
            labelNewWindow={t('common.opens_in_a_new_tab')}
          >
            {t('accessibility_page.link_3')}
          </ExternalLink>
        </Block>
        <Block>
          <Heading variant="h2" className="mb-l">
            {t('accessibility_page.multiple_factors.heading')}
          </Heading>
          <Paragraph mb="l">
            {t('accessibility_page.multiple_factors.paragraph_1')}
          </Paragraph>
          <Paragraph mb="l">
            {t('accessibility_page.multiple_factors.paragraph_2')}
          </Paragraph>
          <Paragraph mb="l">
            {t('accessibility_page.multiple_factors.paragraph_3')}
          </Paragraph>
          <Block mb="l">
            <ul>
              <li>{t('accessibility_page.multiple_factors.point_1')}</li>
              <li>{t('accessibility_page.multiple_factors.point_2')}</li>
              <li>{t('accessibility_page.multiple_factors.point_3')}</li>
              <li>{t('accessibility_page.multiple_factors.point_4')}</li>
            </ul>
          </Block>
          <ExternalLink
            href="https://www.saavutettavuusvaatimukset.fi/"
            labelNewWindow={t('common.opens_in_a_new_tab')}
          >
            {t('accessibility_page.multiple_factors.link')}
          </ExternalLink>
        </Block>
      </SideNavLayout>
    </>
  );
};

export default StylesIndexPage;
