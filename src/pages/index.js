import React from 'react'
import { graphql } from 'gatsby'
import { NamespacesConsumer } from 'react-i18next'
import { Link, withI18next } from '@wapps/gatsby-plugin-i18next'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <NamespacesConsumer ns={['home']}>
    {t => (
      <Layout>
        <SEO title={t('title')} keywords={[`gatsby`, `application`, `react`]} />
        <h1>{t('intro')}</h1>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to='/page-2/'>{t('to.page2')}</Link>
      </Layout>
    )}
  </NamespacesConsumer>
)

export default withI18next()(IndexPage)

export const query = graphql`
  query($lng: String!) {
    ...AllLocalesFragment
  }
`
