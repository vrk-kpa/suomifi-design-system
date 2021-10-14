import React from 'react';
import { defaultSuomifiTheme } from 'suomifi-ui-components';

import * as expanderContent from '../../../locale/fi/expander.json';
import Layout from 'components/layout';
import SEO from 'components/seo';
import ComponentDescription from 'components/ComponentDescription';
import sideNavData from 'config/sidenav/components';
import NoteBox from 'components/NoteBox';
import Section from 'components/Section';
import ComponentExample from 'components/ComponentExample';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';
import {
  Expander,
  ExpanderGroup,
  ExpanderTitleButton,
  ExpanderContent,
} from 'components/ExampleComponents';

const Page = (): JSX.Element => (
  <Layout sideNavData={sideNavData}>
    <SEO title={expanderContent.title} />
    <Heading variant="h1">{expanderContent.title}</Heading>

    <Paragraph variant="lead">
      <Text variant="lead">{expanderContent.intro}</Text>
    </Paragraph>
    <ComponentDescription>
      <ComponentExample>
        <Expander>
          <ExpanderTitleButton>
            {expanderContent['expander.title']}
          </ExpanderTitleButton>
          <ExpanderContent>
            {expanderContent['expander.content']}
          </ExpanderContent>
        </Expander>
      </ComponentExample>
    </ComponentDescription>

    <NoteBox
      title={expanderContent['note.title']}
      items={expanderContent['note.items']}
    />

    {expanderContent.sections.map((section, index) => (
      <Section
        key={index}
        mainTitle={section.title}
        paragraphs={(section as any).paragraphs}
        links={section.links}
      />
    ))}

    <ComponentDescription
      mainTitle={expanderContent['nopadding.title']}
      description={expanderContent['nopadding.description']}
      exampleFirst={false}
      filterProps={[]}
    >
      <ComponentExample>
        <Expander>
          <ExpanderTitleButton>
            {expanderContent['expander.title']}
          </ExpanderTitleButton>
          <ExpanderContent noPadding>
            <p
              style={{
                margin: 0,
                padding: defaultSuomifiTheme.spacing.s,
                background: defaultSuomifiTheme.colors.brandBase,
                color: defaultSuomifiTheme.colors.whiteBase,
              }}
            >
              {expanderContent['expander.content']}
            </p>
          </ExpanderContent>
        </Expander>
      </ComponentExample>
    </ComponentDescription>

    <ComponentDescription
      mainTitle={expanderContent['single.title']}
      description={expanderContent['single.description']}
      exampleFirst
    >
      <ComponentExample>
        <Expander>
          <ExpanderTitleButton>
            {expanderContent['expander.title']}
          </ExpanderTitleButton>
          <ExpanderContent>
            {expanderContent['expander.content']}
          </ExpanderContent>
        </Expander>
      </ComponentExample>
    </ComponentDescription>

    <ComponentDescription
      mainTitle={expanderContent['group.title']}
      description={expanderContent['group.description']}
      exampleFirst
    >
      <ComponentExample>
        <ExpanderGroup
          openAllText={expanderContent['group.open']}
          closeAllText={expanderContent['group.close']}
        >
          <Expander>
            <ExpanderTitleButton>
              {expanderContent['expander.title']}
            </ExpanderTitleButton>
            <ExpanderContent>
              {expanderContent['expander.content']}
            </ExpanderContent>
          </Expander>
          <Expander>
            <ExpanderTitleButton>
              {expanderContent['expander.title']}
            </ExpanderTitleButton>
            <ExpanderContent>
              {expanderContent['expander.content']}
            </ExpanderContent>
          </Expander>
          <Expander>
            <ExpanderTitleButton>
              {expanderContent['expander.title']}
            </ExpanderTitleButton>
            <ExpanderContent>
              {expanderContent['expander.content']}
            </ExpanderContent>
          </Expander>
        </ExpanderGroup>
      </ComponentExample>
    </ComponentDescription>
  </Layout>
);

export default Page;
