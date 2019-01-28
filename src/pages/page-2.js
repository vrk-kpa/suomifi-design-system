import React from 'react'
import { graphql } from 'gatsby'
import { NamespacesConsumer } from 'react-i18next'
import { Link, withI18next } from '@wapps/gatsby-plugin-i18next'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <NamespacesConsumer ns={['page2']}>
    {t => (
      <Layout>
        <SEO title={t('title')} />
        <Link to='/'>{t('common:back.to.frontpage')}</Link>
      </Layout>
    )}
  </NamespacesConsumer>
)

export default withI18next()(SecondPage)

export const query = graphql`
  query($lng: String!) {
    ...AllLocalesFragment
  }
`
