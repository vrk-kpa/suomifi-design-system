import React from 'react';

import developersContent from '../../../locale/fi/developers.json';
import Layout from 'components/layout';
import SEO from 'components/seo';
import sideNavData from 'config/sidenav/info';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';
import Section from 'components/Section';

const Page = (): JSX.Element => (
  <Layout sideNavData={sideNavData}>
    <SEO title={developersContent.title} />
    <Heading variant="h1">{developersContent.title}</Heading>

    <Paragraph variant="lead">
      <Text variant="lead">{developersContent.intro}</Text>
    </Paragraph>

    {developersContent.sections.map((section, index) => (
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
