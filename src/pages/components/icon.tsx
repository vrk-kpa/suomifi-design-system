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
import {
  Icon as SuomifiIcon,
  StaticIcon as SuomifiStaticIcon,
} from 'components/ExampleComponents';
import {
  suomifiDesignTokens,
  Link,
  IconProps,
  StaticIconProps,
} from 'suomifi-ui-components';

/**
 * Wrapper to show all icons as bigger for better visiblity
 */
const Icon = (props: IconProps): JSX.Element => {
  const newProps = { ...props, width: '2em', height: '2em' };
  return <SuomifiIcon {...newProps} />;
};

const StaticIcon = (props: StaticIconProps): JSX.Element => {
  const newProps = { ...props, width: '4em', height: '4em' };
  return <SuomifiStaticIcon {...newProps} />;
};

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
            exampleFirst
          >
            <ComponentExample
              style={{
                justifyContent: 'flex-start',
                padding: 0,
                border: 'none',
              }}
            >
              <Icon icon="check" />
            </ComponentExample>
          </ComponentDescription>

          <ComponentDescription
            mainTitle={t('infoIcons.title')}
            description={t('infoIcons.description')}
            exampleFirst
          >
            <ComponentExample
              style={{
                justifyContent: 'flex-start',
                padding: 0,
                border: 'none',
              }}
            >
              <Icon
                icon="helpFilled"
                color={suomifiDesignTokens.colors.highlightBase}
                style={{ margin: `0 ${suomifiDesignTokens.spacing.s}` }}
              />
              <Icon
                icon="help"
                color={suomifiDesignTokens.colors.highlightBase}
                style={{ margin: `0 ${suomifiDesignTokens.spacing.s}` }}
              />
            </ComponentExample>
          </ComponentDescription>

          <ComponentDescription
            mainTitle={t('additionalInfoIcons.title')}
            description={t('additionalInfoIcons.description')}
            exampleFirst
          >
            <ComponentExample
              style={{
                justifyContent: 'flex-start',
                padding: 0,
                border: 'none',
              }}
            >
              <Icon
                icon="errorFilled"
                color={suomifiDesignTokens.colors.highlightBase}
                style={{ margin: `0 ${suomifiDesignTokens.spacing.s}` }}
              />
              <Icon
                icon="info"
                color={suomifiDesignTokens.colors.highlightBase}
                style={{ margin: `0 ${suomifiDesignTokens.spacing.s}` }}
              />
            </ComponentExample>
          </ComponentDescription>

          <ComponentDescription
            mainTitle={t('illustrationIcons.title')}
            description={t('illustrationIcons.description')}
            exampleFirst
          >
            <ComponentExample
              style={{
                justifyContent: 'flex-start',
                padding: 0,
                border: 'none',
              }}
            >
              <StaticIcon icon="collaboration" />
            </ComponentExample>
          </ComponentDescription>

          <ComponentDescription
            mainTitle={t('attachmentIcons.title')}
            description={t('attachmentIcons.description')}
            exampleFirst
          >
            <ComponentExample
              style={{
                justifyContent: 'flex-start',
                padding: 0,
                border: 'none',
              }}
            >
              <StaticIcon icon="doc" />
            </ComponentExample>
          </ComponentDescription>

          <ComponentDescription
            mainTitle={t('signLanguageIcons.title')}
            description={t('signLanguageIcons.description')}
            exampleFirst
          >
            <ComponentExample
              style={{
                justifyContent: 'flex-start',
                padding: 0,
                border: 'none',
              }}
            >
              <Icon icon="signLanguageContent" color="#00B6EC" />
            </ComponentExample>
          </ComponentDescription>
          <Link
            variant="external"
            href={t('signLanguageIconsLink.url')}
            labelNewWindow={t('externalLink.label')}
          >
            {t('signLanguageIconsLink.title')}
          </Link>
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
