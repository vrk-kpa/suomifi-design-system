import React from 'react'
import { graphql } from 'gatsby'
import { I18n } from 'react-i18next'
import { Link, withI18next } from '@wapps/gatsby-plugin-i18next'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <I18n>
    {t => (
      <Layout>
        <SEO
          title={t('home.title')}
          keywords={[`gatsby`, `application`, `react`]}
        />
        <h1>{t('home.intro')}</h1>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to='/page-2/'>{t('home.to.page2')}</Link>
      </Layout>
    )}
  </I18n>
)

export default withI18next()(IndexPage)

export const query = graphql`
  query($lng: String!) {
    ...AllLocalesFragment
  }
`
