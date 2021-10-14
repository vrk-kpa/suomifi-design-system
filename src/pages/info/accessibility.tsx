import React from 'react';

import * as accessibilityContent from '../../../locale/fi/accessibility.json';
import Layout from 'components/layout';
import SEO from 'components/seo';
import sideNavData from 'config/sidenav/info';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';
import Section from 'components/Section';

const Page = (): JSX.Element => (
  <Layout sideNavData={sideNavData}>
    <SEO title={accessibilityContent.title} />
    <Heading variant="h1">{accessibilityContent.title}</Heading>

    <Paragraph variant="lead">
      <Text variant="lead">{accessibilityContent.intro}</Text>
    </Paragraph>

    {accessibilityContent.sections.map((section, index) => (
      <Section
        key={index}
        mainTitle={section.title}
        paragraphs={section.paragraphs}
        links={section.links}
      />
    ))}
  </Layout>
);

export default Page;
