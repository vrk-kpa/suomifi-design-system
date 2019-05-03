import React from 'react'
import { graphql } from 'gatsby'
import { NamespacesConsumer } from 'react-i18next'
import { withI18next } from '@wapps/gatsby-plugin-i18next'
import { suomifiTheme } from 'suomifi-ui-components'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { Panel } from '../../components/ExampleComponents'
import ComponentDescription from '../../components/ComponentDescription'
import sideNavData from '../../config/sidenav/components'
import NoteBox from '../../components/NoteBox'
import Section from '../../components/Section'
import ComponentExample from '../../components/ComponentExample'

const Page = (): JSX.Element => (
  <NamespacesConsumer ns={['panel']}>
    {t => (
      <Layout sideNavData={sideNavData(t)}>
        <SEO title={t('title')} />
        <h1>{t('title')}</h1>

        <p>{t('intro')}</p>

        <h2>{t('common:component.usage')}</h2>

        <NoteBox title={t('note.title')} items={t('note.items')} />

        {t('sections').map((section, index) => (
          <Section
            key={index}
            title={section.title}
            paragraphs={section.paragraphs}
            links={section.links}
          />
        ))}

        <ComponentDescription
          title={t('nopadding.title')}
          description={t('nopadding.description')}
          exampleFirst={false}
          filterProps={[]}>
          <ComponentExample style={{ padding: '1.3rem' }}>
            <Panel.expansion title={t('panel.title')} noPadding>
              <p
                style={{
                  margin: 0,
                  padding: '1rem',
                  background: suomifiTheme.colors.brandBase,
                  color: suomifiTheme.colors.whiteBase
                }}>
                {t('panel.content')}
              </p>
            </Panel.expansion>
          </ComponentExample>
        </ComponentDescription>

        <h2>{t('common:component.versions')}</h2>

        <ComponentDescription
          title={t('single.title')}
          description={t('single.description')}
          exampleFirst>
          <ComponentExample style={{ padding: '1.3rem' }}>
            <Panel.expansion title={t('panel.title')}>
              {t('panel.content')}
            </Panel.expansion>
          </ComponentExample>
        </ComponentDescription>

        <ComponentDescription
          title={t('group.title')}
          description={t('group.description')}
          exampleFirst>
          <ComponentExample style={{ padding: '1.3rem' }}>
            <Panel.expansionGroup
              OpenAll={t('group.open')}
              CloseAll={t('group.close')}>
              <Panel.expansion title={t('panel.title')}>
                {t('panel.content')}
              </Panel.expansion>
              <Panel.expansion title={t('panel.title')}>
                {t('panel.content')}
              </Panel.expansion>
              <Panel.expansion title={t('panel.title')}>
                {t('panel.content')}
              </Panel.expansion>
            </Panel.expansionGroup>
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
  }
`
