import React from 'react';

import * as designersContent from '../../../locale/fi/designers.json';
import Layout from 'components/layout';
import SEO from 'components/seo';
import sideNavData from 'config/sidenav/info';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';
import Section from 'components/Section';

const Page = (): JSX.Element => (
  <Layout sideNavData={sideNavData}>
    <SEO title={designersContent.title} />
    <Heading variant="h1">{designersContent.title}</Heading>

    <Paragraph variant="lead">
      <Text variant="lead">{designersContent.intro}</Text>
    </Paragraph>

    {designersContent.sections.map((section, index) => (
      <Section
        key={index}
        mainTitle={section.title}
        title={section.subheading}
        paragraphs={section.paragraphs}
        links={(section as any).links}
      />
    ))}
  </Layout>
);

export default Page;
