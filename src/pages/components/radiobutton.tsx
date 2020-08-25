import React from 'react';
import { graphql } from 'gatsby';
import { Translation } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';

import Layout from 'components/layout';
import SEO from 'components/seo';
import sideNavData from 'config/sidenav/components';
import NoteBox from 'components/NoteBox';
import { RadioButton } from 'components/ExampleComponents';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';
import ComponentDescription from 'components/ComponentDescription';
import ComponentExample from 'components/ComponentExample';
import Section, { Props as SectionProps } from 'components/Section';
import { suomifiDesignTokens } from 'suomifi-ui-components';

const Page = (): JSX.Element => (
  <Translation ns={['radiobutton']}>
    {(t) => (
      <Layout sideNavData={sideNavData(t)}>
        <SEO title={t('title')} />
        <Heading.h1>{t('title')}</Heading.h1>

        <Paragraph.lead>
          <Text.lead>{t('intro')}</Text.lead>
        </Paragraph.lead>

        <ComponentDescription>
          <ComponentExample
            style={{ marginBottom: suomifiDesignTokens.spacing.s }}
          >
            <RadioButton name="default" value="default-radio">
              {t('example.default.content')}
            </RadioButton>
          </ComponentExample>
        </ComponentDescription>

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
          mainTitle={t('example.large.title')}
          description={t('example.large.description')}
          exampleFirst
          filterProps={[]}
        >
          <ComponentExample>
            <RadioButton.large name="large" value="large-radio">
              {t('example.large.content')}
            </RadioButton.large>
          </ComponentExample>
        </ComponentDescription>

        <ComponentDescription
          mainTitle={t('example.hint.title')}
          description={t('example.hint.description')}
          exampleFirst
          filterProps={[]}
        >
          <ComponentExample>
            <RadioButton
              value="hint-radio"
              hintText={t('example.hint.hintText')}
            >
              {t('example.hint.content')}
            </RadioButton>
          </ComponentExample>
        </ComponentDescription>

        <ComponentDescription
          mainTitle={t('example.disabled.title')}
          description={t('example.disabled.description')}
          exampleFirst
          filterProps={[]}
        >
          <ComponentExample>
            <RadioButton name="disabled" value="disabled-radio" disabled>
              {t('example.disabled.content')}
            </RadioButton>
          </ComponentExample>
        </ComponentDescription>

        <ComponentDescription
          mainTitle={t('example.group.title')}
          description={t('example.group.description')}
          exampleFirst
          filterProps={[]}
        >
          <ComponentExample>
            <RadioButton.group
              label={t('example.group.title')}
              hintText={t('example.group.grouptHint')}
              name="test-group-large"
            >
              <RadioButton.large value="value-test-1">
                {t('example.group.content')}
              </RadioButton.large>
              <RadioButton
                value="value-test-3"
                variant="large"
                hintText={t('example.group.hintText')}
              >
                {t('example.group.contentHint')}
              </RadioButton>
              <RadioButton.divider variant="large">
                {t('example.group.divider')}
              </RadioButton.divider>
              <RadioButton.large value="value-test-4" disabled>
                {t('example.group.contentDisabled')}
              </RadioButton.large>
            </RadioButton.group>
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
