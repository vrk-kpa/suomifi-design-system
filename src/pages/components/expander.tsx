import React from 'react';
import { graphql } from 'gatsby';
import { Translation } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';
import {
  Expander,
  ExpanderGroup,
  ExpanderTitleButton,
  ExpanderContent,
  suomifiDesignTokens,
} from 'suomifi-ui-components';

import Layout from 'components/layout';
import SEO from 'components/seo';
import ComponentDescription from 'components/ComponentDescription';
import sideNavData from 'config/sidenav/components';
import NoteBox from 'components/NoteBox';
import Section, { Props as SectionProps } from 'components/Section';
import ComponentExample from 'components/ComponentExample';
import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';

const Page = (): JSX.Element => (
  <Translation ns={['expander']}>
    {(t) => (
      <Layout sideNavData={sideNavData(t)}>
        <SEO title={t('title')} />
        <Heading.h1>{t('title')}</Heading.h1>

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
          mainTitle={t('nopadding.title')}
          description={t('nopadding.description')}
          exampleFirst={false}
          filterProps={[]}
        >
          <ComponentExample>
            <Expander>
              <ExpanderTitleButton
                ariaOpenText="Open expander"
                ariaCloseText="Close expander"
              >
                {t('expander.title')}
              </ExpanderTitleButton>
              <ExpanderContent noPadding>
                <p
                  style={{
                    margin: 0,
                    padding: suomifiDesignTokens.spacing.s,
                    background: suomifiDesignTokens.colors.brandBase,
                    color: suomifiDesignTokens.colors.whiteBase,
                  }}
                >
                  {t('expander.content')}
                </p>
              </ExpanderContent>
            </Expander>
          </ComponentExample>
        </ComponentDescription>

        <ComponentDescription
          mainTitle={t('single.title')}
          description={t('single.description')}
          exampleFirst
        >
          <ComponentExample>
            <Expander>
              <ExpanderTitleButton
                ariaOpenText="Open expander"
                ariaCloseText="Close expander"
              >
                {t('expander.title')}
              </ExpanderTitleButton>
              <ExpanderContent>{t('expander.content')}</ExpanderContent>
            </Expander>
          </ComponentExample>
        </ComponentDescription>

        <ComponentDescription
          mainTitle={t('group.title')}
          description={t('group.description')}
          exampleFirst
        >
          <ComponentExample>
            <ExpanderGroup
              OpenAllText={t('group.open')}
              CloseAllText={t('group.close')}
            >
              <Expander>
                <ExpanderTitleButton
                  ariaOpenText="Open expander"
                  ariaCloseText="Close expander"
                >
                  {t('expander.title')}
                </ExpanderTitleButton>
                <ExpanderContent>{t('expander.content')}</ExpanderContent>
              </Expander>
              <Expander>
                <ExpanderTitleButton
                  ariaOpenText="Open expander"
                  ariaCloseText="Close expander"
                >
                  {t('expander.title')}
                </ExpanderTitleButton>
                <ExpanderContent>{t('expander.content')}</ExpanderContent>
              </Expander>
              <Expander>
                <ExpanderTitleButton
                  ariaOpenText="Open expander"
                  ariaCloseText="Close expander"
                >
                  {t('expander.title')}
                </ExpanderTitleButton>
                <ExpanderContent>{t('expander.content')}</ExpanderContent>
              </Expander>
            </ExpanderGroup>
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
