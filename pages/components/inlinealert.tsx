import { NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-export-i18n';
import SideNavLayout from '../../layouts/SideNavLayout/SideNavLayout';
import { navItems } from '../../utils/components-sidenav';
import InfoBox from '../../components/InfoBox/InfoBox';
import ComponentExample from '../../components/ComponentExample/ComponentExample';
import {
  InlineAlert,
  Block,
  Heading,
  Text,
  Paragraph,
  ExternalLink,
} from 'suomifi-ui-components';

const Page: NextPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('inlinealert_page.site_title')}</title>
      </Head>

      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('main_nav.components')}
        navIcon="puzzle"
      >
        <Heading variant="h1">{t('inlinealert_page.heading')}</Heading>
        <Block variant="div" mt="m">
          <ExternalLink
            href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/InlineAlert"
            labelNewWindow={t('common.opens_in_a_new_tab')}
            variant="accent"
          >
            {t('common.see_technical_documentation_of_component')}
          </ExternalLink>
        </Block>
        <Paragraph className="my-xl">
          <Text variant="lead">{t('inlinealert_page.ingress')}</Text>
        </Paragraph>

        <Block variant="section">
          <ComponentExample
            filterPropsInExample={['className', 'mt']}
            style={{ display: 'block' }}
          >
            <InlineAlert>{t('inlinealert_page.example.info_text')}</InlineAlert>
            <InlineAlert status="warning" mt="l">
              {t('inlinealert_page.example.warning_text')}
            </InlineAlert>
            <InlineAlert status="error" mt="l">
              {t('inlinealert_page.example.error_text')}
            </InlineAlert>
          </ComponentExample>
        </Block>

        <Block variant="section" className="my-xl">
          <InfoBox>
            <Heading variant="h3" as="h2">
              {t('common.accessibility_and_usability')}
            </Heading>
            <ul>
              <li>{t('inlinealert_page.accessibility_list.point_1')}</li>
              <li>{t('inlinealert_page.accessibility_list.point_2')}</li>
              <li>{t('inlinealert_page.accessibility_list.point_3')}</li>
            </ul>
          </InfoBox>
        </Block>
        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('inlinealert_page.size_and_usage.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('inlinealert_page.size_and_usage.text_1')}
          </Paragraph>
          <Paragraph className="my-xl">
            {t('inlinealert_page.size_and_usage.text_2')}
          </Paragraph>
          <Paragraph className="my-xl">
            {t('inlinealert_page.size_and_usage.text_3')}
          </Paragraph>
        </Block>
      </SideNavLayout>
    </>
  );
};

export default Page;
