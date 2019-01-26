import React from 'react'
import { graphql } from 'gatsby'
import { I18n } from 'react-i18next'
import { Link, withI18next } from 'gatsby-plugin-i18next'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <I18n>
    {t => (
      <Layout>
        <SEO title={t('page2.title')} />
        <Link to='/'>{t('common.back.to.frontpage')}</Link>
      </Layout>
    )}
  </I18n>
)

export default withI18next()(SecondPage)

export const query = graphql`
  query($lng: String!) {
    ...LocalesFragment
  }
`
