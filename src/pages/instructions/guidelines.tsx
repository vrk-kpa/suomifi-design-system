import React from 'react'
import { graphql } from 'gatsby'
import { NamespacesConsumer } from 'react-i18next'
import { withI18next } from '@wapps/gatsby-plugin-i18next'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import sideNavData from '../../config/sidenav/instructions'

const Page = (): JSX.Element => (
  <NamespacesConsumer ns={['instructions.guidelines']}>
    {t => (
      <Layout sideNavData={sideNavData(t)}>
        <SEO title={t('title')} />
        <h1>{t('title')}</h1>
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
