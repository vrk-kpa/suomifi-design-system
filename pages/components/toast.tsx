import { NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-export-i18n';
import SideNavLayout from '../../layouts/SideNavLayout/SideNavLayout';
import { navItems } from '../../utils/components-sidenav';
import InfoBox from '../../components/InfoBox/InfoBox';
import ComponentExample from '../../components/ComponentExample/ComponentExample';
import {
  Block,
  Heading,
  Text,
  Paragraph,
  ExternalLink,
  Toast,
  defaultSuomifiTheme,
  Link,
} from 'suomifi-ui-components';

const Page: NextPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('toast_page.site_title')}</title>
      </Head>

      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('main_nav.components')}
        navIcon="puzzle"
      >
        <Heading variant="h1">{t('toast_page.heading')}</Heading>
        <Block variant="div" mt="m">
          <ExternalLink
            href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/Toast"
            labelNewWindow={t('common.opens_in_a_new_tab')}
            variant="accent"
          >
            {t('common.see_technical_documentation_of_component')}
          </ExternalLink>
        </Block>
        <Block variant="div">
          <Link href="/patterns/notification-components" variant="accent">
            {t('common.notification_components')}
          </Link>
        </Block>
        <Paragraph className="my-xl">
          <Text variant="lead">{t('toast_page.ingress')}</Text>
        </Paragraph>

        <ComponentExample
          style={{ marginBottom: defaultSuomifiTheme.spacing.s }}
        >
          <Toast>{t('toast_page.example.content')}</Toast>
        </ComponentExample>

        <Block variant="section" className="my-xl">
          <InfoBox>
            <Heading variant="h3" as="h2">
              {t('common.accessibility_and_usability')}
            </Heading>
            <ul>
              <li>{t('toast_page.accessibility_list.point_1')}</li>
              <li>{t('toast_page.accessibility_list.point_2')}</li>
              <li>{t('toast_page.accessibility_list.point_3')}</li>
            </ul>
          </InfoBox>
        </Block>
        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('toast_page.what_does_the_component_contain.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('toast_page.what_does_the_component_contain.text_1')}
          </Paragraph>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('toast_page.size_and_usage.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('toast_page.size_and_usage.text_1')}
          </Paragraph>
          <Paragraph className="my-xl">
            {t('toast_page.size_and_usage.text_2')}
          </Paragraph>
        </Block>

        <Block variant="div" mt="m" mb="l">
          <ExternalLink
            href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions"
            labelNewWindow={t('common.opens_in_a_new_tab')}
          >
            {t('toast_page.link_text')}
          </ExternalLink>
        </Block>
      </SideNavLayout>
    </>
  );
};

export default Page;
