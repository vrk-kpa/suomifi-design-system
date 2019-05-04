import React from 'react'
import { graphql } from 'gatsby'
import { NamespacesConsumer } from 'react-i18next'
import { withI18next } from '@wapps/gatsby-plugin-i18next'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Section from '../components/Section'

const Page = (): JSX.Element => (
  <NamespacesConsumer ns={['home']}>
    {t => (
      <Layout>
        <SEO title={t('title')} />
        <h1>{t('title')}</h1>

        <p>{t('intro')}</p>

        {t('sections').map((section, index) => (
          <Section
            key={index}
            mainTitle={section.mainTitle}
            title={section.title}
            paragraphs={section.paragraphs}
            links={section.links}
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
