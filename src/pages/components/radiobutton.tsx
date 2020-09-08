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
            <RadioButton.group
              name="test-default-group"
              defaultValue="default-radio"
              label={t('example.default.title')}
            >
              <RadioButton value="default-radio">
                {t('example.default.content')}
              </RadioButton>
              <RadioButton value="default-radio2">
                {t('example.default.content2')}
              </RadioButton>
              <RadioButton value="default-radio3">
                {t('example.default.content3')}
              </RadioButton>
            </RadioButton.group>
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
            <RadioButton.group
              name="test-large-group"
              defaultValue="default-radio"
              label={t('example.default.title')}
            >
              <RadioButton.large value="default-radio">
                {t('example.default.content')}
              </RadioButton.large>
              <RadioButton.large value="default-radio2">
                {t('example.default.content2')}
              </RadioButton.large>
              <RadioButton.large value="default-radio3">
                {t('example.default.content3')}
              </RadioButton.large>
            </RadioButton.group>
          </ComponentExample>
        </ComponentDescription>

        <ComponentDescription
          mainTitle={t('example.hint.title')}
          description={t('example.hint.description')}
          exampleFirst
          filterProps={[]}
        >
          <ComponentExample>
            <RadioButton.group
              name="test-hint-group"
              hintText={t('example.hint.groupHint')}
              defaultValue="default-radio"
              label={t('example.default.title')}
            >
              <RadioButton
                value="default-radio"
                hintText={t('example.hint.hintText')}
              >
                {t('example.hint.content')}
              </RadioButton>
              <RadioButton
                value="default-radio2"
                hintText={t('example.hint.hintText2')}
              >
                {t('example.hint.content2')}
              </RadioButton>
            </RadioButton.group>
          </ComponentExample>
        </ComponentDescription>

        <ComponentDescription
          mainTitle={t('example.disabled.title')}
          description={t('example.disabled.description')}
          exampleFirst
          filterProps={[]}
        >
          <ComponentExample>
            <RadioButton.group
              name="test-disabled-group"
              defaultValue="default-radio"
              label={t('example.default.title')}
            >
              <RadioButton value="default-radio" disabled>
                {t('example.default.content')}
              </RadioButton>
              <RadioButton value="default-radio2" disabled>
                {t('example.default.content2')}
              </RadioButton>
              <RadioButton value="default-radio3" disabled>
                {t('example.default.content3')}
              </RadioButton>
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
