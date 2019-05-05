import React from 'react'
import { graphql } from 'gatsby'
import { NamespacesConsumer } from 'react-i18next'
import { withI18next } from '@wapps/gatsby-plugin-i18next'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ContentBoxes from '../components/ContentBoxes'

const Page = (): JSX.Element => (
  <NamespacesConsumer ns={['home']}>
    {t => (
      <Layout>
        <SEO title={t('title')} />
        <h1>{t('title')}</h1>

        <p>{t('intro')}</p>

        {t('sections').map((section, index) => (
          <ContentBoxes
            key={index}
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
)

export default withI18next()(Page)

export const query = graphql`
  query($lng: String!) {
    ...AllLocalesFragment
  }
`
