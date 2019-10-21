import React from 'react';
import { graphql } from 'gatsby';
import { NamespacesConsumer } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';
import { defaultTokens } from 'suomifi-ui-components';

import Layout from 'components/layout';
import SEO from 'components/seo';
import ContentBoxes from 'components/ContentBoxes';
import Annotation from 'components/Annotation';
import Hero from 'components/Hero';
import { ReactComponent as Slack } from 'icons/slack.svg';

const Page = (): JSX.Element => (
  <NamespacesConsumer ns={['home']}>
    {t => (
      <Layout hasFrame={false}>
        <SEO title={t('title')} />

        <Hero title={t('intro.title')} description={t('intro.description')} />

        <Annotation
          title={t('note.title')}
          description={t('note.description')}
          link={{
            icon: (
              <Slack
                style={{
                  fill: defaultTokens.colors.whiteBase,
                  fontSize: '16px',
                }}
              />
            ),
            text: t('note.link.text'),
            url: t('note.link.url'),
          }}
        />

        {t('sections').map((section, index) => (
          <ContentBoxes
            key={index}
            wrapAll
            mainTitle={section.mainTitle}
            blocks={section.blocks}
          />
        ))}

        {t('framedSections').map((section, index) => (
          <ContentBoxes
            key={index}
            hasFrame
            mainTitle={section.mainTitle}
            blocks={section.blocks}
          />
        ))}
      </Layout>
    )}
  </NamespacesConsumer>
);

export default withI18next()(Page);

export const query = graphql`
  query($lng: String!) {
    ...AllLocalesFragment
  }
`;
