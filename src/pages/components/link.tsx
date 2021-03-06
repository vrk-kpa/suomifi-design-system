import React from 'react';
import { graphql } from 'gatsby';
import { Translation } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';

import Layout from 'components/layout';
import SEO from 'components/seo';
import sideNavData from 'config/sidenav/components';
import NoteBox from 'components/NoteBox';
import Section, { Props as SectionProps } from 'components/Section';
import { Link as ExampleLink } from 'components/ExampleComponents';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';
import ComponentDescription from 'components/ComponentDescription';
import ComponentExample from 'components/ComponentExample';

const Page = (): JSX.Element => (
  <Translation ns={['link']}>
    {(t) => (
      <Layout sideNavData={sideNavData(t)}>
        <SEO title={t('title')} />
        <Heading variant="h1">{t('title')}</Heading>

        <Paragraph.lead>
          <Text.lead>{t('intro')}</Text.lead>
        </Paragraph.lead>

        <NoteBox title={t('note.title')} items={t('note.items')} />

        {t<SectionProps[]>('sections').map((section, index) => (
          <Section
            key={index}
            mainTitle={section.title}
            paragraphs={section.paragraphs}
            links={section.links}
          />
        ))}
        <ComponentDescription
          mainTitle={t('exampleRegular.title')}
          description={t('exampleRegular.description')}
          exampleFirst={false}
        >
          <ComponentExample>
            <ExampleLink className="test-classname" href="#">
              {t('exampleRegular.linkText')}
            </ExampleLink>
          </ComponentExample>
        </ComponentDescription>

        <ComponentDescription
          mainTitle={t('exampleExternal.title')}
          description={t('exampleExternal.description')}
          exampleFirst={false}
        >
          <ComponentExample>
            <ExampleLink.external
              className="test-classname"
              href="https://github.com/vrk-kpa/suomifi-ui-components"
              labelNewWindow={t('exampleExternal.label')}
            >
              {t('exampleExternal.linkText')}
            </ExampleLink.external>
          </ComponentExample>
        </ComponentDescription>
      </Layout>
    )}
  </Translation>
);

export default withI18next()(Page);

export const query = graphql`
  query($lng: String!) {
    ...AllLocalesFragment
  }
`;
