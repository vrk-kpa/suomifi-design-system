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
  defaultSuomifiTheme,
  Checkbox,
  CheckboxGroup,
} from 'suomifi-ui-components';

const Page: NextPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('checkbox_page.site_title')}</title>
      </Head>

      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('main_nav.components')}
        navIcon="puzzle"
      >
        <Heading variant="h1">{t('checkbox_page.heading')}</Heading>
        <Block variant="div" mt="m">
          <ExternalLink
            href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/Checkbox"
            labelNewWindow={t('common.opens_in_a_new_tab')}
          >
            {t('common.see_technical_documentation_of_component')}
          </ExternalLink>
        </Block>
        <Paragraph className="my-xl">
          <Text variant="lead">{t('checkbox_page.ingress')}</Text>
        </Paragraph>

        <ComponentExample
          style={{ marginBottom: defaultSuomifiTheme.spacing.s }}
        >
          <Checkbox>{t('checkbox_page.example.default.content')}</Checkbox>
        </ComponentExample>

        <Block variant="section" className="my-xl">
          <InfoBox>
            <Heading variant="h3" as="h2">
              {t('common.accessibility_and_usability')}
            </Heading>
            <ul>
              <li>{t('checkbox_page.accessibility_list.point_1')}</li>
              <li>{t('checkbox_page.accessibility_list.point_2')}</li>
              <li>{t('checkbox_page.accessibility_list.point_3')}</li>
              <li>{t('checkbox_page.accessibility_list.point_4')}</li>
              <li>{t('checkbox_page.accessibility_list.point_5')}</li>
              <li>{t('checkbox_page.accessibility_list.point_6')}</li>
            </ul>
          </InfoBox>
        </Block>
        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('checkbox_page.what_does_the_component_contain.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('checkbox_page.what_does_the_component_contain.text')}
          </Paragraph>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('checkbox_page.size_and_usage.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('checkbox_page.size_and_usage.text_1')}
          </Paragraph>
        </Block>

        <Heading variant="h2" className="mb-xl">
          {t('checkbox_page.example.large.title')}
        </Heading>
        <Paragraph className="my-xl">
          {t('checkbox_page.example.large.description')}
        </Paragraph>

        <ComponentExample>
          <Checkbox variant="large">
            {t('checkbox_page.example.large.content')}
          </Checkbox>
        </ComponentExample>

        <Heading variant="h2" className="mb-xl">
          {t('checkbox_page.example.group.title')}
        </Heading>
        <Paragraph className="my-xl">
          {t('checkbox_page.example.group.description')}
        </Paragraph>

        <ComponentExample>
          <CheckboxGroup
            labelText={t('checkbox_page.example.group.label')}
            groupHintText={t('checkbox_page.example.group.hint')}
            groupStatus="error"
            groupStatusText={t('checkbox_page.example.group.status_text')}
          >
            <Checkbox>
              {t('checkbox_page.example.group.content_label_email')}
            </Checkbox>
            <Checkbox>
              {t('checkbox_page.example.group.content_label_phone')}
            </Checkbox>
            <Checkbox>
              {t('checkbox_page.example.group.content_label_visit')}
            </Checkbox>
          </CheckboxGroup>
        </ComponentExample>

        <Heading variant="h2" className="mb-xl">
          {t('checkbox_page.example.hintstate.title')}
        </Heading>
        <Paragraph className="my-xl">
          {t('checkbox_page.example.hintstate.description')}
        </Paragraph>

        <ComponentExample>
          <Checkbox
            hintText={t('checkbox_page.example.hintstate.hint_text')}
            status="error"
            statusText={t('checkbox_page.example.hintstate.status_text')}
          >
            {t('checkbox_page.example.hintstate.content')}
          </Checkbox>
        </ComponentExample>

        <Heading variant="h2" className="mb-xl">
          {t('checkbox_page.example.disabled.title')}
        </Heading>
        <Paragraph className="my-xl">
          {t('checkbox_page.example.disabled.description')}
        </Paragraph>

        <ComponentExample>
          <Checkbox disabled>
            {t('checkbox_page.example.disabled.content')}
          </Checkbox>
        </ComponentExample>
      </SideNavLayout>
    </>
  );
};

export default Page;
