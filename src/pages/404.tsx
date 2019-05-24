import React from 'react'
import { graphql } from 'gatsby'
import { NamespacesConsumer } from 'react-i18next'
import { withI18next } from '@wapps/gatsby-plugin-i18next'

import Layout from 'components/layout'
import SEO from 'components/seo'
import { Heading, Text } from 'components/ResponsiveComponents'
import Link from 'components/Link'

const Page = (): JSX.Element => (
  <NamespacesConsumer ns={['404']}>
    {t => (
      <Layout>
        <SEO title={t('title')} />
        <Heading.h1>{t('title')}</Heading.h1>
        <p>
          <Text>{t('intro')}</Text>
        </p>
        <div>
          <Link text={t('common:to.homepage')} url='/' />
        </div>
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
