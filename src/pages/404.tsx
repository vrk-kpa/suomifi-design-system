import React from 'react'
import { graphql } from 'gatsby'
import { NamespacesConsumer } from 'react-i18next'
import { Link, withI18next } from '@wapps/gatsby-plugin-i18next'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Page = (): JSX.Element => (
  <NamespacesConsumer ns={['404']}>
    {t => (
      <Layout>
        <SEO title={t('title')} />
        <h1>{t('intro')}</h1>
        <Link to='/'>{t('common:back.to.frontpage')}</Link>
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
