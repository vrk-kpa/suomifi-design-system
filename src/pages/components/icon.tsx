import React from 'react';

import { graphql } from 'gatsby';
import { NamespacesConsumer } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';

import Layout from 'components/layout';
import SEO from 'components/seo';
import ComponentDescription from 'components/ComponentDescription';
import sideNavData from 'config/sidenav/components';
import Section from 'components/Section';
import NoteBox from 'components/NoteBox';
import ComponentExample from 'components/ComponentExample';
import { Heading, Paragraph, Text } from 'components/ResponsiveComponents';
import { Icon } from 'components/ExampleComponents';
import { suomifiDesignTokens, Link } from 'suomifi-ui-components';

const Page: React.FC = (): React.ReactElement => {
  return (
    <NamespacesConsumer ns={['icon']}>
      {t => (
        <Layout sideNavData={sideNavData(t)}>
          <SEO title={t('title')} />
          <Heading.h1>{t('title')}</Heading.h1>

          <Paragraph.lead>
            <Text.lead>{t('intro')}</Text.lead>
          </Paragraph.lead>

          <Link href="../../styles/icons">{t('allIconsPageLink.title')}</Link>

          <NoteBox title={t('note.title')} items={t('note.items')} />

          {t('sections').map((section, index) => (
            <Section
              key={index}
              mainTitle={section.title}
              paragraphs={section.paragraphs}
              links={section.links}
            />
          ))}

          <ComponentDescription
            mainTitle={t('basicIcons.title')}
            description={t('basicIcons.description')}
            exampleFirst={true}
          >
            <ComponentExample>
              <Icon icon="attachment" />
            </ComponentExample>
          </ComponentDescription>

          <ComponentDescription
            mainTitle={t('infoIcons.title')}
            description={t('infoIcons.description')}
            exampleFirst={true}
          >
            <ComponentExample>
              <Icon icon="help" />
              <Icon
                icon="helpFilled"
                color={suomifiDesignTokens.colors.highlightBase}
              />
            </ComponentExample>
          </ComponentDescription>

          <ComponentDescription
            mainTitle={t('additionalInfoIcons.title')}
            description={t('additionalInfoIcons.description')}
            exampleFirst={true}
          >
            <ComponentExample>
              <Icon
                icon="info"
                color={suomifiDesignTokens.colors.accentSecondary}
              />
            </ComponentExample>
          </ComponentDescription>

          <ComponentDescription
            mainTitle={t('illustrationIcons.title')}
            description={t('illustrationIcons.description')}
            exampleFirst={true}
          >
            <ComponentExample>
              <Icon icon="staticIllustrationHands" />
            </ComponentExample>
          </ComponentDescription>
        </Layout>
      )}
    </NamespacesConsumer>
  );
};

export default withI18next()(Page);

export const query = graphql`
  query($lng: String!) {
    ...AllLocalesFragment
  }
`;
