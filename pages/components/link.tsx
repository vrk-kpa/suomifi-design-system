import { NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-export-i18n';
import SideNavLayout from '../../layouts/SideNavLayout/SideNavLayout';
import { navItems } from '../../utils/components-sidenav';
import InfoBox from '../../components/InfoBox/InfoBox';
import ComponentExample from '../../components/ComponentExample/ComponentExample';
import {
  defaultSuomifiTheme,
  Block,
  Heading,
  Text,
  Paragraph,
  ExternalLink,
  Expander,
  ExpanderTitleButton,
  ExpanderContent,
  ExpanderGroup,
  Link as ExampleLink,
  ExternalLink as ExampleExternalLink,
} from 'suomifi-ui-components';

const Page: NextPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('link_page.site_title')}</title>
      </Head>

      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('main_nav.components')}
        navIcon="puzzle"
      >
        <Heading variant="h1">{t('link_page.heading')}</Heading>
        <Block variant="div" mt="m">
          <ExternalLink
            href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/LanguageMenu"
            labelNewWindow={t('common.opens_in_a_new_tab')}
          >
            {t('common.see_technical_documentation_of_component')}
          </ExternalLink>
        </Block>
        <Paragraph className="my-xl">
          <Text variant="lead">{t('link_page.ingress')}</Text>
        </Paragraph>

        <Block variant="section" className="my-xl">
          <InfoBox>
            <Heading variant="h3" as="h2">
              {t('common.accessibility_and_usability')}
            </Heading>
            <ul>
              <li>{t('link_page.accessibility_list.point_1')}</li>
              <li>{t('link_page.accessibility_list.point_2')}</li>
              <li>{t('link_page.accessibility_list.point_3')}</li>
              <li>{t('link_page.accessibility_list.point_4')}</li>
              <li>{t('link_page.accessibility_list.point_5')}</li>
              <li>{t('link_page.accessibility_list.point_6')}</li>
              <li>{t('link_page.accessibility_list.point_7')}</li>
            </ul>
          </InfoBox>
        </Block>
        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('link_page.what_does_the_component_contain.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('link_page.what_does_the_component_contain.text_1')}
          </Paragraph>

          <Paragraph className="my-xl">
            {t('link_page.what_does_the_component_contain.text_2')}
          </Paragraph>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('link_page.size_and_usage.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('link_page.size_and_usage.text_1')}
          </Paragraph>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('link_page.in_ui.heading')}
          </Heading>
          <Paragraph className="my-xl">{t('link_page.in_ui.text_1')}</Paragraph>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('link_page.example.regular.title')}
          </Heading>
          <Paragraph className="my-xl">
            {t('link_page.example.regular.description')}
          </Paragraph>

          <ComponentExample>
            <ExampleLink className="test-classname" href="#">
              {t('link_page.example.regular.link_text')}
            </ExampleLink>
          </ComponentExample>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('link_page.example.external.title')}
          </Heading>
          <Paragraph className="my-xl">
            {t('link_page.example.external.description')}
          </Paragraph>

          <ComponentExample>
            <ExampleExternalLink
              className="test-classname"
              href="https://github.com/vrk-kpa/suomifi-ui-components"
              labelNewWindow={t('link_page.example.external.label')}
            >
              {t('link_page.example.external.link_text')}
            </ExampleExternalLink>
          </ComponentExample>
        </Block>
      </SideNavLayout>
    </>
  );
};

export default Page;
