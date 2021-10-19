import React from 'react';
import * as homeContent from '../../locale/fi/home.json';
import Layout from 'components/layout';
import SEO from 'components/seo';
import ContentBoxes from 'components/ContentBoxes';

const Page = (): JSX.Element => (
  <Layout hasFrame={false}>
    <SEO title={homeContent.title} />

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
