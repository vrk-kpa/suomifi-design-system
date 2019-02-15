import React from 'react'
import { graphql } from 'gatsby'
import { NamespacesConsumer } from 'react-i18next'
import { withI18next } from '@wapps/gatsby-plugin-i18next'
import { Button } from 'suomifi-ui-components'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import ComponentExample from '../../components/ComponentExample'

const Page = (): JSX.Element => (
  <NamespacesConsumer ns={['button']}>
    {t => (
      <Layout>
        <SEO title={t('title')} description='' />
        <h1>{t('title')}</h1>
        <ComponentExample>
          <Button onClick={() => {}}>{t('click.me')}</Button>
        </ComponentExample>
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
