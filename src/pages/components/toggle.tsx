import React, { useState } from 'react';
import { defaultSuomifiTheme } from 'suomifi-ui-components';

import toggleContent from '../../../locale/fi/toggle.json';
import Layout from 'components/layout';
import SEO from 'components/seo';
import ComponentDescription from 'components/ComponentDescription';
import sideNavData from 'config/sidenav/components';
import NoteBox from 'components/NoteBox';
import Section from 'components/Section';
import ComponentExample from 'components/ComponentExample';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';
import { ToggleButton, ToggleInput } from 'components/ExampleComponents';

const Page = (): React.ReactElement => {
  const [isButtonChecked, setButtonChecked] = useState(false);
  const [isInputChecked, setInputChecked] = useState(false);

  const getButtonAriaLabelText = (): string => {
    return (
      toggleContent['toggle.label.button'] +
      (isButtonChecked
        ? toggleContent['toggle.state.on']
        : toggleContent['toggle.state.off'])
    );
  };

  const getInputAriaLabelText = (): string => {
    return (
      toggleContent['toggle.label.input'] +
      (isInputChecked
        ? toggleContent['toggle.state.on']
        : toggleContent['toggle.state.off'])
    );
  };

  const handleButtonClick = (newState: boolean): void => {
    setButtonChecked(newState);
  };

  const handleInputChange = (newState: boolean): void => {
    setInputChecked(newState);
  };

  return (
    <Layout sideNavData={sideNavData}>
      <SEO title={toggleContent.title} />
      <Heading variant="h1">{toggleContent.title}</Heading>

      <Paragraph variant="lead">
        <Text variant="lead">{toggleContent.intro}</Text>
      </Paragraph>

      <ComponentDescription
        mainTitle={toggleContent['default.title']}
        description={toggleContent['default.description']}
      >
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
            {toggleContent['toggle.label.button']}
          </ToggleButton>

          <ToggleInput
            aria-label={getInputAriaLabelText()}
            onChange={(checked) => handleInputChange(checked)}
            checked={isInputChecked}
          >
            {toggleContent['toggle.label.input']}
          </ToggleInput>
        </ComponentExample>
      </ComponentDescription>
      <NoteBox
        title={toggleContent['note.title']}
        items={toggleContent['note.items']}
      />

      {toggleContent.sections.map((section, index) => (
        <Section
          key={index}
          mainTitle={section.title}
          paragraphs={section.paragraphs}
          links={section.links}
        />
      ))}
    </Layout>
  );
};

export default Page;
