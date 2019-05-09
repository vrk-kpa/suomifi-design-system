import React from 'react'
import { graphql } from 'gatsby'
import { NamespacesConsumer } from 'react-i18next'
import { Link, withI18next } from '@wapps/gatsby-plugin-i18next'
import { Heading, suomifiTheme } from 'suomifi-ui-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Page = (): JSX.Element => (
  <NamespacesConsumer ns={['404']}>
    {t => (
      <Layout>
        <SEO title={t('title')} />
        <Heading.h1>{t('intro')}</Heading.h1>
        <p>
          <Link style={{ color: suomifiTheme.colors.highlightBase }} to='/'>
            {t('common:back.to.frontpage')}
          </Link>
        </p>
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
