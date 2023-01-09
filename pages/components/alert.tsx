import { NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-export-i18n';
import SideNavLayout from '../../layouts/SideNavLayout/SideNavLayout';
import { navItems } from '../../utils/components-sidenav';
import InfoBox from '../../components/InfoBox/InfoBox';
import ComponentExample from '../../components/ComponentExample/ComponentExample';
import {
  Alert,
  Block,
  Heading,
  InlineAlert,
  Text,
  Paragraph,
  ExternalLink,
} from 'suomifi-ui-components';

const Page: NextPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('alert_page.site_title')}</title>
      </Head>

      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('main_nav.components')}
        navIcon="puzzle"
      >
        <Heading variant="h1">{t('alert_page.heading')}</Heading>
        <Block variant="div" mt="m">
          <ExternalLink
            href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/Alert"
            labelNewWindow={t('common.opens_in_a_new_tab')}
          >
            {t('common.see_technical_documentation_of_component')}
          </ExternalLink>
        </Block>
        <Paragraph className="my-xl">
          <Text variant="lead">{t('alert_page.ingress')}</Text>
        </Paragraph>

        <Block variant="section">
          <ComponentExample filterPropsInExample={['className']}>
            <Alert closeText={t('alert_page.example.close_button')}>
              {t('alert_page.example.alert_info_paragraph')}
            </Alert>
          </ComponentExample>
        </Block>

        <Block variant="section" className="my-xl">
          <InfoBox>
            <Heading variant="h3" as="h2">
              {t('common.accessibility_and_usability')}
            </Heading>
            <ul>
              <li>{t('alert_page.accessibility_list.point_1')}</li>
              <li>{t('alert_page.accessibility_list.point_2')}</li>
              <li>{t('alert_page.accessibility_list.point_3')}</li>
              <li>{t('alert_page.accessibility_list.point_4')}</li>
            </ul>
          </InfoBox>
        </Block>
        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('alert_page.size_and_usage.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('alert_page.size_and_usage.text_1')}
          </Paragraph>
          <Paragraph className="my-xl">
            {t('alert_page.size_and_usage.text_2')}
          </Paragraph>
        </Block>

        <Block variant="section">
          <ComponentExample filterPropsInExample={['className']}>
            <InlineAlert
              labelText={t('alert_page.example.inline_alert_info_heading')}
            >
              {t('alert_page.example.inline_alert_info_paragraph')}
            </InlineAlert>
          </ComponentExample>

          <ComponentExample filterPropsInExample={['className']}>
            <InlineAlert status="warning">
              {t('alert_page.example.inline_alert_warning_paragraph')}
            </InlineAlert>
          </ComponentExample>

          <ComponentExample filterPropsInExample={['className']}>
            <InlineAlert
              labelText={t('alert_page.example.inline_alert_error_heading')}
              status="error"
            >
              {t('alert_page.example.inline_alert_error_paragraph')}
            </InlineAlert>
          </ComponentExample>
        </Block>
      </SideNavLayout>
    </>
  );
};

export default Page;
