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
  Textarea,
  defaultSuomifiTheme,
} from 'suomifi-ui-components';

const Page: NextPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('textarea_page.site_title')}</title>
      </Head>

      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('main_nav.components')}
        navIcon="puzzle"
      >
        <Heading variant="h1">{t('textarea_page.heading')}</Heading>
        <Block variant="div" mt="m">
          <ExternalLink
            href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/Textarea"
            labelNewWindow={t('common.opens_in_a_new_tab')}
            variant="accent"
          >
            {t('common.see_technical_documentation_of_component')}
          </ExternalLink>
        </Block>
        <Paragraph className="my-xl">
          <Text variant="lead">{t('textarea_page.ingress')}</Text>
        </Paragraph>

        <ComponentExample
          style={{ marginBottom: defaultSuomifiTheme.spacing.s }}
        >
          <Textarea
            labelText={t('textarea_page.example.regular.label')}
            hintText={t('textarea_page.example.regular.hint_text')}
            visualPlaceholder={t('textarea_page.example.regular.placeholder')}
          />
        </ComponentExample>

        <Block variant="section" mt="l">
          <InfoBox>
            <Heading variant="h3" as="h2">
              {t('common.accessibility_and_usability')}
            </Heading>
            <ul>
              <li>{t('textarea_page.accessibility_list.point_1')}</li>
              <li>{t('textarea_page.accessibility_list.point_2')}</li>
              <li>{t('textarea_page.accessibility_list.point_3')}</li>
              <li>{t('textarea_page.accessibility_list.point_4')}</li>
            </ul>
          </InfoBox>
        </Block>
        <Block variant="section" mt="xl">
          <Heading variant="h2">
            {t('textarea_page.what_does_the_component_contain.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('textarea_page.what_does_the_component_contain.text_1')}
          </Paragraph>
        </Block>

        <Block variant="section">
          <Heading variant="h2">
            {t('textarea_page.size_and_usage.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('textarea_page.size_and_usage.text_1')}
          </Paragraph>
        </Block>

        <Block variant="section">
          <Heading variant="h2">
            {t('textarea_page.example.error.title')}
          </Heading>
          <Paragraph className="my-xl">
            {t('textarea_page.example.error.description')}
          </Paragraph>

          <ComponentExample>
            <Textarea
              labelText={t('textarea_page.example.error.label')}
              status="error"
              hintText={t('textarea_page.example.error.hint_text')}
              visualPlaceholder={t('textarea_page.example.error.placeholder')}
              statusText={t('textarea_page.example.error.status_text')}
            />
          </ComponentExample>
        </Block>

        <Block variant="section" mt="xl">
          <Heading variant="h2">
            {t('textarea_page.example.disabled.title')}
          </Heading>
          <Paragraph className="my-xl">
            {t('textarea_page.example.disabled.description')}
          </Paragraph>

          <ComponentExample>
            <Textarea
              labelText={t('textarea_page.example.disabled.label')}
              disabled
            />
          </ComponentExample>
        </Block>
      </SideNavLayout>
    </>
  );
};

export default Page;
