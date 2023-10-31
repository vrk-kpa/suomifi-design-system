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
  IconMapLocation,
  Link,
  TimeInput,
} from 'suomifi-ui-components';

const Page: NextPage = () => {
  const { t } = useTranslation();
  const [errorState, setErrorState] = useState(true);
  const [nameHasNumber, setNameHasNumber] = useState(false);
  const status = errorState ? 'error' : 'default';

  const validateName = (value: any) => {
    if (value === undefined || value === '' || /^([^0-9]*)$/.test(value)) {
      setNameHasNumber(false);
    } else {
      setNameHasNumber(true);
    }
  };

  return (
    <>
      <Head>
        <title>{t('time_input_page.site_title')}</title>
      </Head>

      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('main_nav.components')}
        navIcon="puzzle"
      >
        <Heading variant="h1">{t('time_input_page.heading')}</Heading>
        <Block variant="div" mt="m">
          <ExternalLink
            href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/TimeInput"
            labelNewWindow={t('common.opens_in_a_new_tab')}
            variant="accent"
          >
            {t('common.see_technical_documentation_of_component')}
          </ExternalLink>
        </Block>
        <Paragraph className="my-xl">
          <Text variant="lead">{t('time_input_page.ingress')}</Text>
        </Paragraph>

        <ComponentExample
          style={{ marginBottom: defaultSuomifiTheme.spacing.s }}
        >
          <TimeInput
            labelText={t('time_input_page.example.label')}
            hintText={t('time_input_page.example.hint_text')}
          />
        </ComponentExample>

        <Block variant="section" className="my-xl">
          <InfoBox>
            <Heading variant="h3" as="h2">
              {t('common.accessibility_and_usability')}
            </Heading>
            <ul>
              <li>{t('time_input_page.accessibility_list.point_1')}</li>
              <li>{t('time_input_page.accessibility_list.point_2')}</li>
              <li>{t('time_input_page.accessibility_list.point_3')}</li>
              <li>{t('time_input_page.accessibility_list.point_4')}</li>
              <li>{t('time_input_page.accessibility_list.point_5')}</li>
            </ul>
          </InfoBox>
        </Block>
        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('time_input_page.what_does_the_component_contain.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('time_input_page.what_does_the_component_contain.text_1')}
          </Paragraph>

          <Paragraph className="my-xl">
            {t('time_input_page.what_does_the_component_contain.text_2')}
          </Paragraph>
        </Block>

        <Block variant="section" className="my-xl">
          <Heading variant="h2" className="mb-xl">
            {t('time_input_page.size_and_usage.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('time_input_page.size_and_usage.text_1')}
          </Paragraph>
          <Paragraph className="my-xl">
            {t('time_input_page.size_and_usage.text_2')}
          </Paragraph>
          <Block variant="div" mt="m">
            <Link href="/patterns/datetime" variant="accent">
              {t('time_input_page.size_and_usage.pattern_link_text')}
            </Link>
          </Block>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('time_input_page.autocomplete.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('time_input_page.autocomplete.text')}
          </Paragraph>
          <Block>
            <ul>
              <li>
                {t('time_input_page.autocomplete.point_1')}
                <ul>
                  <li>14 &rarr; 14.00</li>
                  <li>8 &rarr; 8.00</li>
                  <li>08 &rarr; 8.00</li>
                </ul>
              </li>
              <li>
                {t('time_input_page.autocomplete.point_2')}
                <ul>
                  <li>1745 &rarr; 17.45</li>
                  <li>0800 &rarr; 8.00</li>
                </ul>
              </li>
              <li>
                {t('time_input_page.autocomplete.point_3')}
                <ul>
                  <li>02.00 &rarr; 2.00</li>
                </ul>
              </li>
              <li>
                {t('time_input_page.autocomplete.point_4')}
                <ul>
                  <li>15:30 &rarr; 15.30</li>
                </ul>
              </li>
            </ul>
          </Block>
        </Block>
      </SideNavLayout>
    </>
  );
};

export default Page;
