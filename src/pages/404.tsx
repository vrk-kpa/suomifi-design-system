import React from 'react';
import * as content404 from '../../locale/fi/404.json';
import * as commonContent from '../../locale/fi/common.json';
import Layout from 'components/layout';
import SEO from 'components/seo';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';
import Link from 'components/Link';

const Page = (): JSX.Element => (
  <Layout>
    <SEO title={content404.title} />
    <Heading variant="h1">{content404.title}</Heading>
    <Paragraph>
      <Text>{content404.intro}</Text>
    </Paragraph>
    <div>
      <Link text={commonContent['to.homepage']} url="/" />
    </div>
  </Layout>
);

export default Page;
