import React from 'react';
import { defaultSuomifiTheme } from 'suomifi-ui-components';

import * as privacyStatementeContent from '../../locale/fi/privacy-statement.json';
import Layout from 'components/layout';
import SEO from 'components/seo';
import { Heading } from 'components/ResponsiveComponents';
import Section, { Props as SectionProps } from 'components/Section';

const Page = (): JSX.Element => (
  <Layout>
    <div style={{ padding: `0 ${defaultSuomifiTheme.spacing.xl}` }}>
      <SEO title={privacyStatementeContent.title} />
      <Heading variant="h1">{privacyStatementeContent.title}</Heading>
      {privacyStatementeContent.sections.map((section, index) => {
        const sectionData: SectionProps = section as any;
        return (
          <Section
            key={index}
            mainTitle={sectionData.title}
            paragraphs={sectionData.paragraphs}
            links={sectionData.links}
          />
        );
      })}
    </div>
  </Layout>
);

export default Page;
