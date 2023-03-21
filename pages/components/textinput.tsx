import { NextPage } from 'next';
import { useState } from 'react';
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
  TextInput,
  defaultSuomifiTheme,
} from 'suomifi-ui-components';

const Page: NextPage = () => {
  const { t } = useTranslation();
  const [errorState, setErrorState] = useState(true);
  const status = errorState ? 'error' : 'default';

  return (
    <>
      <Head>
        <title>{t('text_input_page.site_title')}</title>
      </Head>

      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('main_nav.components')}
        navIcon="puzzle"
      >
        <Heading variant="h1">{t('text_input_page.heading')}</Heading>
        <Block variant="div" mt="m">
          <ExternalLink
            href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/TextInput"
            labelNewWindow={t('common.opens_in_a_new_tab')}
          >
            {t('common.see_technical_documentation_of_component')}
          </ExternalLink>
        </Block>
        <Paragraph className="my-xl">
          <Text variant="lead">{t('text_input_page.ingress')}</Text>
        </Paragraph>

        <ComponentExample
          style={{ marginBottom: defaultSuomifiTheme.spacing.s }}
        >
          <TextInput labelText={t('text_input_page.example.regular.label')} />
        </ComponentExample>

        <Block variant="section" className="my-xl">
          <InfoBox>
            <Heading variant="h3" as="h2">
              {t('common.accessibility_and_usability')}
            </Heading>
            <ul>
              <li>{t('text_input_page.accessibility_list.point_1')}</li>
              <li>{t('text_input_page.accessibility_list.point_2')}</li>
              <li>{t('text_input_page.accessibility_list.point_3')}</li>
              <li>{t('text_input_page.accessibility_list.point_4')}</li>
            </ul>
          </InfoBox>
        </Block>
        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('text_input_page.what_does_the_component_contain.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('text_input_page.what_does_the_component_contain.text_1')}
          </Paragraph>

          <Paragraph className="my-xl">
            {t('text_input_page.what_does_the_component_contain.text_2')}
          </Paragraph>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('text_input_page.size_and_usage.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('text_input_page.size_and_usage.text_1')}
          </Paragraph>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('text_input_page.example.success.title')}
          </Heading>

          <ComponentExample>
            <TextInput
              labelText={t('text_input_page.example.success.label')}
              status="success"
            />
          </ComponentExample>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="my-xl">
            {t('text_input_page.example.error.title')}
          </Heading>

          <ComponentExample>
            <TextInput
              labelText={t('text_input_page.example.error.label')}
              {...(errorState
                ? { statusText: t('text_input_page.example.error.status_text') }
                : {})}
              status={status}
              debounce={300}
              onChange={(value) => {
                setErrorState(!value);
              }}
            />
          </ComponentExample>
        </Block>
        <Heading variant="h2" className="my-xl">
          {t('text_input_page.example.disabled.title')}
        </Heading>
        <Paragraph className="my-xl">
          {t('text_input_page.example.disabled.description')}
        </Paragraph>

        <ComponentExample>
          <TextInput
            labelText={t('text_input_page.example.disabled.label')}
            disabled
          />
        </ComponentExample>

        <Heading variant="h2" className="my-xl">
          {t('text_input_page.example.optional.title')}
        </Heading>

        <ComponentExample>
          <TextInput
            labelText={t('text_input_page.example.optional.label')}
            icon="mapLocation"
            optionalText={t('text_input_page.example.optional.optional_text')}
          />
        </ComponentExample>
      </SideNavLayout>
    </>
  );
};

export default Page;
