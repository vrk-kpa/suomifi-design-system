import React from 'react';
import { defaultSuomifiTheme } from 'suomifi-ui-components';

import accessibilityStatementContent from '../../locale/fi/accessibility-statement.json';
import Layout from 'components/layout';
import SEO from 'components/seo';
import { Heading } from 'components/ResponsiveComponents';
import Section from 'components/Section';

const Page = (): JSX.Element => (
  <Layout>
    <div style={{ padding: `0 ${defaultSuomifiTheme.spacing.xl}` }}>
      <SEO title={accessibilityStatementContent.title} />
      <Heading variant="h1">{accessibilityStatementContent.title}</Heading>
      {accessibilityStatementContent.sections.map((section, index) => (
        <Section
          key={index}
          mainTitle={section.title}
          paragraphs={(section as any).paragraphs}
          links={section.links}
        />
      ))}
    </div>
  </Layout>
);

export default Page;
