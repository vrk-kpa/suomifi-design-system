import React from 'react';
import infoContent from '../../../locale/fi/info.json';
import Layout from 'components/layout';
import SEO from 'components/seo';
import sideNavData from 'config/sidenav/info';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';
import Section from 'components/Section';

const Page = (): JSX.Element => (
  <Layout sideNavData={sideNavData}>
    <SEO title={infoContent['info.title']} />
    <Heading variant="h1">{infoContent['info.title']}</Heading>

    <Paragraph variant="lead">
      <Text variant="lead">{infoContent.intro}</Text>
    </Paragraph>

    {infoContent.sections.map((section, index) => (
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
