import React from 'react';
import { defaultSuomifiTheme } from 'suomifi-ui-components';

import * as radioButtonContent from '../../../locale/fi/radiobutton.json';
import Layout from 'components/layout';
import SEO from 'components/seo';
import sideNavData from 'config/sidenav/components';
import NoteBox from 'components/NoteBox';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';
import ComponentDescription from 'components/ComponentDescription';
import ComponentExample from 'components/ComponentExample';
import Section from 'components/Section';
import { RadioButton, RadioButtonGroup } from 'components/ExampleComponents';

const Page = (): JSX.Element => (
  <Layout sideNavData={sideNavData}>
    <SEO title={radioButtonContent.title} />
    <Heading variant="h1">{radioButtonContent.title}</Heading>

    <Paragraph variant="lead">
      <Text variant="lead">{radioButtonContent.intro}</Text>
    </Paragraph>

    <ComponentDescription>
      <ComponentExample style={{ marginBottom: defaultSuomifiTheme.spacing.s }}>
        <RadioButtonGroup
          name="test-default-group"
          defaultValue="default-radio"
          labelText={radioButtonContent['example.default.title']}
        >
          <RadioButton value="default-radio">
            {radioButtonContent['example.default.content']}
          </RadioButton>
          <RadioButton value="default-radio2">
            {radioButtonContent['example.default.content2']}
          </RadioButton>
          <RadioButton value="default-radio3">
            {radioButtonContent['example.default.content3']}
          </RadioButton>
        </RadioButtonGroup>
      </ComponentExample>
    </ComponentDescription>

    <NoteBox
      title={radioButtonContent['note.title']}
      items={radioButtonContent['note.items']}
    />

    {radioButtonContent.sections.map((section, index) => (
      <Section
        key={index}
        mainTitle={section.title}
        paragraphs={(section as any).paragraphs}
        links={section.links}
      />
    ))}

    <ComponentDescription
      mainTitle={radioButtonContent['example.large.title']}
      description={radioButtonContent['example.large.description']}
      exampleFirst
      filterProps={[]}
    >
      <ComponentExample>
        <RadioButtonGroup
          name="test-large-group"
          defaultValue="default-radio"
          labelText={radioButtonContent['example.default.title']}
          hintText={radioButtonContent['example.large.groupHint']}
        >
          <RadioButton variant="large" value="default-radio">
            {radioButtonContent['example.default.content']}
          </RadioButton>
          <RadioButton variant="large" value="default-radio2">
            {radioButtonContent['example.default.content2']}
          </RadioButton>
          <RadioButton variant="large" value="default-radio3">
            {radioButtonContent['example.default.content3']}
          </RadioButton>
        </RadioButtonGroup>
      </ComponentExample>
    </ComponentDescription>

    <ComponentDescription
      mainTitle={radioButtonContent['example.hint.title']}
      description={radioButtonContent['example.hint.description']}
      exampleFirst
      filterProps={[]}
    >
      <ComponentExample>
        <RadioButtonGroup
          name="test-hint-group"
          defaultValue="default-radio"
          labelText={radioButtonContent['example.default.title']}
        >
          <RadioButton
            value="default-radio"
            hintText={radioButtonContent['example.hint.hintText']}
          >
            {radioButtonContent['example.hint.content']}
          </RadioButton>
          <RadioButton
            value="default-radio2"
            hintText={radioButtonContent['example.hint.hintText2']}
          >
            {radioButtonContent['example.hint.content2']}
          </RadioButton>
        </RadioButtonGroup>
      </ComponentExample>
    </ComponentDescription>

    <ComponentDescription
      mainTitle={radioButtonContent['example.disabled.title']}
      description={radioButtonContent['example.disabled.description']}
      exampleFirst
      filterProps={[]}
    >
      <ComponentExample>
        <RadioButtonGroup
          name="test-disabled-group"
          defaultValue="default-radio"
          labelText={radioButtonContent['example.default.title']}
        >
          <RadioButton value="default-radio" disabled>
            {radioButtonContent['example.default.content']}
          </RadioButton>
          <RadioButton value="default-radio2" disabled>
            {radioButtonContent['example.default.content2']}
          </RadioButton>
          <RadioButton value="default-radio3" disabled>
            {radioButtonContent['example.default.content3']}
          </RadioButton>
        </RadioButtonGroup>
      </ComponentExample>
    </ComponentDescription>
  </Layout>
);

export default Page;
