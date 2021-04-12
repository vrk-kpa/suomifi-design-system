import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { Translation } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';
import {
  ToggleButton,
  ToggleInput,
  suomifiDesignTokens,
} from 'suomifi-ui-components';

import Layout from 'components/layout';
import SEO from 'components/seo';
import ComponentDescription from 'components/ComponentDescription';
import sideNavData from 'config/sidenav/components';
import NoteBox from 'components/NoteBox';
import Section, { Props as SectionProps } from 'components/Section';
import ComponentExample from 'components/ComponentExample';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';

ToggleButton.displayName = 'ToggleButton';
ToggleInput.displayName = 'ToggleInput';

const Page: React.FC = (): React.ReactElement => {
  const [isButtonChecked, setButtonChecked] = useState(false);
  const [isInputChecked, setInputChecked] = useState(false);

  const getButtonAriaLabelText = (t: Function): string => {
    return t(`toggle.state.${isButtonChecked ? 'on' : 'off'}`, {
      name: t('toggle.label.button'),
    });
  };

  const getInputAriaLabelText = (t: Function): string => {
    return t(`toggle.state.${isInputChecked ? 'on' : 'off'}`);
  };

  const handleButtonClick = (newState: boolean): void => {
    setButtonChecked(newState);
  };

  const handleInputChange = (newState: boolean): void => {
    setInputChecked(newState);
  };

  return (
    <Translation ns={['toggle']}>
      {(t) => (
        <Layout sideNavData={sideNavData(t)}>
          <SEO title={t('title')} />
          <Heading.h1>{t('title')}</Heading.h1>

          <Paragraph.lead>
            <Text.lead>{t('intro')}</Text.lead>
          </Paragraph.lead>

          <ComponentDescription
            mainTitle={t('default.title')}
            description={t('default.description')}
          >
            <ComponentExample
              style={{
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                height: `${suomifiDesignTokens.spacing.xxxxl}`,
              }}
            >
              <ToggleButton
                aria-label={getButtonAriaLabelText(t)}
                onClick={(checked) => handleButtonClick(checked)}
                checked={isButtonChecked}
              >
                {t('toggle.label.button')}
              </ToggleButton>

              <ToggleInput
                aria-label={getInputAriaLabelText(t)}
                onChange={(checked) => handleInputChange(checked)}
                checked={isInputChecked}
              >
                {t('toggle.label.input')}
              </ToggleInput>
            </ComponentExample>
          </ComponentDescription>
          <NoteBox title={t('note.title')} items={t('note.items')} />

          {t<SectionProps[]>('sections').map((section, index) => (
            <Section
              key={index}
              mainTitle={section.title}
              paragraphs={section.paragraphs}
              links={section.links}
            />
          ))}
        </Layout>
      )}
    </Translation>
  );
};

export default withI18next()(Page);

export const query = graphql`
  query($lng: String!) {
    ...AllLocalesFragment
  }
`;
