import React from 'react'
import { graphql } from 'gatsby'
import { I18n } from 'react-i18next'
import { Link, withI18next } from '@wapps/gatsby-plugin-i18next'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <I18n>
    {t => (
      <Layout>
        <SEO title={t('404.title')} />
        <h1>{t('404.intro')}</h1>
        <Link to='/'>{t('common.back.to.frontpage')}</Link>
      </Layout>
    )}
  </I18n>
)

export default withI18next()(NotFoundPage)

export const query = graphql`
  query($lng: String!) {
    ...AllLocalesFragment
  }
`
