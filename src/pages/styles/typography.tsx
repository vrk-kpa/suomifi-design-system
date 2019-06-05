import React from 'react'
import { graphql } from 'gatsby'
import { NamespacesConsumer } from 'react-i18next'
import { withI18next } from '@wapps/gatsby-plugin-i18next'

import Layout from 'components/layout'
import SEO from 'components/seo'
import sideNavData from 'config/sidenav/styles'
import NoteBox from 'components/NoteBox'
import Section from 'components/Section'
import { Heading, Text } from 'components/ResponsiveComponents'

const Page = (): JSX.Element => (
  <NamespacesConsumer ns={['typography']}>
    {t => (
      <Layout sideNavData={sideNavData(t)}>
        <SEO title={t('title')} />
        <Heading.h1>{t('title')}</Heading.h1>

        <p>
          <Text.lead>{t('intro')}</Text.lead>
        </p>

        <NoteBox title={t('note.title')} items={t('note.items')} />

        {t('sections').map((section, index) => (
          <Section
            key={index}
            mainTitle={section.title}
            paragraphs={section.paragraphs}
            links={section.links}
          />
        ))}
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
