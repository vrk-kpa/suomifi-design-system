import React, { useState } from 'react';

import tooltipContent from '../../../locale/fi/tooltip.json';
import Layout from 'components/layout';
import SEO from 'components/seo';
import ComponentDescription from 'components/ComponentDescription';
import sideNavData from 'config/sidenav/components';
import NoteBox from 'components/NoteBox';
import Section from 'components/Section';
import ComponentExample from 'components/ComponentExample';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';
import { Tooltip } from 'components/ExampleComponents';

const Page = (): React.ReactElement => {
  const [anchorElement, setAnchorElement] = useState(null);
  const [open, setOpen] = useState(false);

  return (
    <Layout sideNavData={sideNavData}>
      <SEO title={tooltipContent.title} />
      <Heading variant="h1">{tooltipContent.title}</Heading>

      <Paragraph variant="lead">
        <Text variant="lead">{tooltipContent.intro}</Text>
      </Paragraph>

      <ComponentDescription>
        <ComponentExample
          style={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            height: 180,
          }}
        >
          <div ref={(ref) => setAnchorElement(ref)}>
            <Text style={{ verticalAlign: 'middle' }}>
              {tooltipContent['example.text']}
            </Text>
            <Tooltip
              anchorElement={anchorElement}
              ariaToggleButtonLabelText={tooltipContent['example.aria.toggle']}
              ariaCloseButtonLabelText={tooltipContent['example.aria.close']}
              open={open}
              onToggleButtonClick={() => setOpen(!open)}
              onCloseButtonClick={() => setOpen(false)}
            >
              <Heading variant="h5" as="h2">
                {tooltipContent['example.title']}
              </Heading>
              <Text>{tooltipContent['example.description']}</Text>
            </Tooltip>
          </div>
        </ComponentExample>
      </ComponentDescription>
      <NoteBox
        title={tooltipContent['note.title']}
        items={tooltipContent['note.items']}
      />

      {tooltipContent.sections.map((section, index) => (
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
