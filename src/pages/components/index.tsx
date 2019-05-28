import React from 'react'
import { graphql } from 'gatsby'
import { NamespacesConsumer } from 'react-i18next'
import { withI18next } from '@wapps/gatsby-plugin-i18next'

import Layout from 'components/layout'
import SEO from 'components/seo'
import sideNavData from 'config/sidenav/components'
import ComponentDescription from 'components/ComponentDescription'
import ComponentExample from 'components/ComponentExample'
import { Example } from 'examples/components'
import { getExample, CodeExampleData } from 'components/CodeExampleUtil'
import { Heading } from 'components/ResponsiveComponents'

const Page = ({ data }: { data: CodeExampleData }): JSX.Element => (
  <NamespacesConsumer ns={['components']}>
    {t => (
      <Layout sideNavData={sideNavData(t)}>
        <SEO title={t('info.title')} />
        <Heading.h1>{t('info.title')}</Heading.h1>

        <ComponentDescription
          mainTitle={t('usage.title')}
          description={t('usage.description')}
          exampleFirst
          showOnlyCodeString
          codeString={getExample(data, 'components')}>
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
