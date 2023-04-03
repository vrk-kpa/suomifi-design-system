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
  DateInput,
  defaultSuomifiTheme,
} from 'suomifi-ui-components';

const Page: NextPage = () => {
  const { t } = useTranslation();
  const [errorState, setErrorState] = useState(true);
  const status = errorState ? 'error' : 'default';

  return (
    <>
      <Head>
        <title>{t('date_input_page.site_title')}</title>
      </Head>

      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('main_nav.components')}
        navIcon="puzzle"
      >
        <Heading variant="h1">{t('date_input_page.heading')}</Heading>
        <Block variant="div" mt="m">
          <ExternalLink
            href="https://vrk-kpa.github.io/suomifi-ui-components/dev/#/Components/DateInput"
            labelNewWindow={t('common.opens_in_a_new_tab')}
          >
            {t('common.see_technical_documentation_of_component')}
          </ExternalLink>
        </Block>
        <Paragraph className="my-xl">
          <Text variant="lead">{t('date_input_page.ingress')}</Text>
        </Paragraph>

        <ComponentExample
          style={{ marginBottom: defaultSuomifiTheme.spacing.s }}
        >
          <div style={{ maxWidth: '350px' }}>
            <DateInput
              labelText={t('date_input_page.example.common.label')}
              hintText={t('date_input_page.example.common.hint_text')}
              datePickerEnabled
              fullWidth
            />
          </div>
        </ComponentExample>

        <Block variant="section" className="my-xl">
          <InfoBox>
            <Heading variant="h3" as="h2">
              {t('common.accessibility_and_usability')}
            </Heading>
            <ul>
              <li>{t('date_input_page.accessibility_list.point_1')}</li>
              <li>{t('date_input_page.accessibility_list.point_2')}</li>
              <li>{t('date_input_page.accessibility_list.point_3')}</li>
              <li>{t('date_input_page.accessibility_list.point_4')}</li>
            </ul>
          </InfoBox>
        </Block>
        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('date_input_page.what_does_the_component_contain.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('date_input_page.what_does_the_component_contain.text_1')}
          </Paragraph>
          <Paragraph className="my-xl">
            {t('date_input_page.what_does_the_component_contain.text_2')}
          </Paragraph>
          <Paragraph className="my-xl">
            {t('date_input_page.what_does_the_component_contain.text_3')}
          </Paragraph>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('date_input_page.size_and_usage.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('date_input_page.size_and_usage.text_1')}
          </Paragraph>
          <Paragraph className="my-xl">
            {t('date_input_page.size_and_usage.text_2')}
          </Paragraph>
          <Paragraph className="my-xl">
            {t('date_input_page.size_and_usage.text_3')}
          </Paragraph>
          <Paragraph className="my-xl">
            {t('date_input_page.size_and_usage.text_4')}
          </Paragraph>
          <ul>
            <li>{t('date_input_page.shortcuts.shortcut_1_description')}</li>
            <li>
              {t('date_input_page.shortcuts.shortcut_2_description')}
              <kbd className="keyboard-button">Home</kbd>
              {t('date_input_page.shortcuts.shortcut_3_description')}
              <kbd className="keyboard-button">End</kbd>
            </li>
            <li>
              {t('date_input_page.shortcuts.shortcut_4_description')}
              <kbd className="keyboard-button">PageUp</kbd>
              {t('date_input_page.shortcuts.shortcut_5_description')}
              <kbd className="keyboard-button">PageDown</kbd>
            </li>
            <li>
              {t('date_input_page.shortcuts.shortcut_6_description')}
              <kbd className="keyboard-button">Shift</kbd>
              {' + '}
              <kbd className="keyboard-button">PageUp</kbd>
              {t('date_input_page.shortcuts.shortcut_7_description')}
              <kbd className="keyboard-button">Shift</kbd>
              {' + '}
              <kbd className="keyboard-button">PageDown</kbd>
            </li>
          </ul>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('date_input_page.example.smallscreen.title')}
          </Heading>

          <ComponentExample>
            <div style={{ maxWidth: '350px' }}>
              <DateInput
                labelText={t('date_input_page.example.common.label')}
                hintText={t('date_input_page.example.common.hint_text')}
                datePickerEnabled
                smallScreen
                fullWidth
              />
            </div>
          </ComponentExample>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="my-xl">
            {t('date_input_page.example.error.title')}
          </Heading>

          <ComponentExample>
            <div style={{ maxWidth: '350px' }}>
              <DateInput
                labelText={t('date_input_page.example.common.label')}
                hintText={t('date_input_page.example.common.hint_text')}
                fullWidth
                {...(errorState
                  ? {
                      statusText: t(
                        'date_input_page.example.error.status_text',
                      ),
                    }
                  : {})}
                status={status}
                debounce={300}
                onChange={({ value }) => {
                  setErrorState(!value);
                }}
              />
            </div>
          </ComponentExample>
        </Block>

        <Heading variant="h2" className="my-xl">
          {t('date_input_page.example.optional.title')}
        </Heading>

        <ComponentExample>
          <div style={{ maxWidth: '350px' }}>
            <DateInput
              labelText={t('date_input_page.example.common.label')}
              hintText={t('date_input_page.example.common.hint_text')}
              optionalText={t('date_input_page.example.optional.optional_text')}
              fullWidth
            />
          </div>
        </ComponentExample>
      </SideNavLayout>
    </>
  );
};

export default Page;
