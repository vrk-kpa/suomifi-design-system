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
  defaultSuomifiTheme,
  ToggleInput,
  ToggleButton,
} from 'suomifi-ui-components';

const Page: NextPage = () => {
  const { t } = useTranslation();
  const [isButtonChecked, setButtonChecked] = useState(false);
  const [isInputChecked, setInputChecked] = useState(false);

  const getButtonAriaLabelText = (): string => {
    return (
      t('toggle_page.example.label_button') +
      (isButtonChecked
        ? t('toggle_page.example.state_on')
        : t('toggle_page.example.state_off'))
    );
  };

  const getInputAriaLabelText = (): string => {
    return (
      t('toggle_page.example.label_input') +
      (isInputChecked
        ? t('toggle_page.example.state_on')
        : t('toggle_page.example.state_off'))
    );
  };

  const handleButtonClick = (newState: boolean): void => {
    setButtonChecked(newState);
  };

  const handleInputChange = (newState: boolean): void => {
    setInputChecked(newState);
  };
  return (
    <>
      <Head>
        <title>{t('toggle_page.site_title')}</title>
      </Head>

      <SideNavLayout
        navItems={navItems}
        navHeaderText={t('main_nav.components')}
        navIcon="puzzle"
      >
        <Heading variant="h1">{t('toggle_page.heading')}</Heading>
        <Block variant="div" mt="m">
          <ExternalLink
            href="https://vrk-kpa.github.io/suomifi-ui-components/#/Components/Toggle"
            labelNewWindow={t('common.opens_in_a_new_tab')}
            variant="accent"
          >
            {t('common.see_technical_documentation_of_component')}
          </ExternalLink>
        </Block>
        <Paragraph className="my-xl">
          <Text variant="lead">{t('toggle_page.ingress')}</Text>
        </Paragraph>

        <ComponentExample
          style={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            height: `${defaultSuomifiTheme.spacing.xxxxl}`,
          }}
        >
          <ToggleButton
            aria-label={getButtonAriaLabelText()}
            onClick={(checked) => handleButtonClick(checked)}
            checked={isButtonChecked}
          >
            {t('toggle_page.example.label_button')}
          </ToggleButton>

          <ToggleInput
            aria-label={getInputAriaLabelText()}
            onChange={(checked) => handleInputChange(checked)}
            checked={isInputChecked}
          >
            {t('toggle_page.example.label_input')}
          </ToggleInput>
        </ComponentExample>
        <Block variant="section" className="my-xl">
          <InfoBox>
            <Heading variant="h3" as="h2">
              {t('common.accessibility_and_usability')}
            </Heading>
            <ul>
              <li>{t('toggle_page.accessibility_list.point_1')}</li>
              <li>{t('toggle_page.accessibility_list.point_2')}</li>
            </ul>
          </InfoBox>
        </Block>
        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('toggle_page.what_does_the_component_contain.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('toggle_page.what_does_the_component_contain.text_1')}
          </Paragraph>
        </Block>
        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('toggle_page.size_and_usage.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('toggle_page.size_and_usage.text_1')}
          </Paragraph>
        </Block>

        <Block variant="div" mt="m">
          <ExternalLink
            href="https://www.w3.org/Translations/WCAG21-fi/#use-of-color"
            labelNewWindow={t('common.opens_in_a_new_tab')}
          >
            {t('toggle_page.link1_text')}
          </ExternalLink>
        </Block>

        <Block variant="div" mt="m" mb="l">
          <ExternalLink
            href="https://www.w3.org/Translations/WCAG21-fi/#contrast-minimum"
            labelNewWindow={t('common.opens_in_a_new_tab')}
          >
            {t('toggle_page.link2_text')}
          </ExternalLink>
        </Block>

        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('toggle_page.variations.heading')}
          </Heading>
          <Paragraph className="my-xl">
            {t('toggle_page.variations.text_1')}
          </Paragraph>
        </Block>
      </SideNavLayout>
    </>
  );
};

export default Page;
