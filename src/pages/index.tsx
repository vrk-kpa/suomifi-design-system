import React from 'react';
import * as homeContent from '../../locale/fi/home.json';
import Layout from 'components/layout';
import SEO from 'components/seo';
import ContentBoxes from 'components/ContentBoxes';
import Hero from 'components/Hero';

const Page = (): JSX.Element => (
  <Layout hasFrame={false}>
    <SEO title={homeContent.title} />

    <Hero
      title={homeContent['intro.title']}
      description={homeContent['intro.description']}
    />

    {homeContent.sections.map((section, index) => (
      <ContentBoxes
        key={index}
        wrapAll
        mainTitle={section.mainTitle}
        blocks={section.blocks as any}
      />
    ))}
  </Layout>
);

export default Page;
