import React from 'react';
import { defaultSuomifiTheme, TextInput } from 'suomifi-ui-components';

import textInputContent from '../../../locale/fi/textinput.json';
import Layout from 'components/layout';
import SEO from 'components/seo';
import sideNavData from 'config/sidenav/components';
import NoteBox from 'components/NoteBox';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';
import ComponentDescription from 'components/ComponentDescription';
import Section from 'components/Section';
import ComponentExample from 'components/ComponentExample';

const Page = (): React.ReactElement => {
  const [errorState, setErrorState] = React.useState(true);
  const status = errorState ? 'error' : 'default';

  return (
    <Layout sideNavData={sideNavData}>
      <SEO title={textInputContent.title} />
      <Heading variant="h1">{textInputContent.title}</Heading>

      <Paragraph variant="lead">
        <Text variant="lead">{textInputContent.intro}</Text>
      </Paragraph>

      <ComponentDescription>
        <ComponentExample
          style={{ marginBottom: defaultSuomifiTheme.spacing.s }}
        >
          <TextInput labelText={textInputContent['exampleRegular.label']} />
        </ComponentExample>
      </ComponentDescription>

      <NoteBox
        title={textInputContent['note.title']}
        items={textInputContent['note.items']}
      />

      {textInputContent.sections.map((section, index) => (
        <Section
          key={index}
          mainTitle={section.title}
          paragraphs={section.paragraphs}
          links={section.links}
        />
      ))}

      <ComponentDescription
        mainTitle={textInputContent['exampleSuccess.title']}
        description={textInputContent['exampleSuccess.description']}
        exampleFirst
        filterProps={[]}
      >
        <ComponentExample>
          <TextInput
            labelText={textInputContent['exampleSuccess.label']}
            status="success"
          />
        </ComponentExample>
      </ComponentDescription>

      <ComponentDescription
        mainTitle={textInputContent['exampleError.title']}
        description={textInputContent['exampleError.description']}
        exampleFirst
        filterProps={[]}
      >
        <ComponentExample>
          <TextInput
            labelText={textInputContent['exampleError.label']}
            {...(errorState
              ? { statusText: textInputContent['exampleError.statusText'] }
              : {})}
            status={status}
            debounce={300}
            onChange={(value) => {
              setErrorState(!value);
            }}
          />
        </ComponentExample>
      </ComponentDescription>

      <ComponentDescription
        mainTitle={textInputContent['exampleDisabled.title']}
        description={textInputContent['exampleDisabled.description']}
        exampleFirst
        filterProps={[]}
      >
        <ComponentExample>
          <TextInput
            labelText={textInputContent['exampleDisabled.label']}
            disabled
          />
        </ComponentExample>
      </ComponentDescription>
      <ComponentDescription
        mainTitle={textInputContent['exampleOptional.title']}
        description={textInputContent['exampleOptional.description']}
        exampleFirst
        filterProps={[]}
      >
        <ComponentExample>
          <TextInput
            labelText={textInputContent['exampleOptional.label']}
            icon="mapLocation"
            optionalText={textInputContent['exampleOptional.optionalText']}
          />
        </ComponentExample>
      </ComponentDescription>
    </Layout>
  );
};

export default Page;
