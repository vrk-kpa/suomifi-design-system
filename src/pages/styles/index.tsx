import React from 'react'
import { graphql } from 'gatsby'
import { NamespacesConsumer } from 'react-i18next'
import { withI18next } from '@wapps/gatsby-plugin-i18next'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import sideNavData from '../../config/sidenav/styles'
import ComponentDescription from '../../components/ComponentDescription'
import ComponentExample from '../../components/ComponentExample'
import { Example } from '../../examples/styles'
import { getExample, CodeExampleData } from '../../components/CodeExampleUtil'

const Page = ({ data }: { data: CodeExampleData }): JSX.Element => (
  <NamespacesConsumer ns={['styles']}>
    {t => (
      <Layout sideNavData={sideNavData(t)}>
        <SEO title={t('title')} />
        <h1>{t('title')}</h1>

        <ComponentDescription
          title={t('usage.title')}
          titleLevel={2}
          description={t('usage.description')}
          exampleFirst
          showOnlyCodeString
          codeString={getExample(data, 'styles')}>
          <ComponentExample>
            <Example />
          </ComponentExample>
        </ComponentDescription>
      </Layout>
    )}
  </NamespacesConsumer>
)

export default withI18next()(Page)

export const query = graphql`
  query($lng: String!) {
    ...AllLocalesFragment
    ...ExamplesFragment
  }
`
