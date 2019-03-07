import React from 'react'
import { graphql } from 'gatsby'
import { NamespacesConsumer } from 'react-i18next'
import { withI18next } from '@wapps/gatsby-plugin-i18next'
import { suomifiTheme } from 'suomifi-ui-components'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { Button } from '../../components/ExampleComponents'
import ComponentDescription from '../../components/ComponentDescription'
import sideNavData from '../../config/sidenav/components'
import NoteBox from '../../components/NoteBox'
import Section from '../../components/Section'

const components = [
  { id: 'primary', comp: Button },
  { id: 'secondary', comp: Button.secondary },
  { id: 'tertiary', comp: Button.tertiary },
  { id: 'secondaryNoborder', comp: Button.secondaryNoborder },
  {
    id: 'negative',
    comp: Button.negative,
    background: suomifiTheme.colors.secondaryColor
  }
]

const Page = (): JSX.Element => (
  <NamespacesConsumer ns={['button']}>
    {t => (
      <Layout sideNavData={sideNavData(t)}>
        <SEO title={t('title')} description='' />
        <h1>{t('title')}</h1>

        <p>{t('intro')}</p>

        <NoteBox title={t('note.title')} items={t('note.items')} />

        {t('sections').map((section, index) => (
          <Section
            key={index}
            title={section.title}
            paragraphs={section.paragraphs}
          />
        ))}

        {components.map(item => (
          <ComponentDescription
            key={item.id}
            title={t(`${item.id}.title`)}
            description={t(`${item.id}.description`)}>
            <div style={{ background: item.background || 'none' }}>
              <item.comp style={{ margin: '.5rem' }}>
                {t('button.label')}
              </item.comp>
              <item.comp style={{ margin: '.5rem' }} disabled>
                {t('button.label')}
              </item.comp>
            </div>
          </ComponentDescription>
        ))}

        <ComponentDescription
          title={t('withIcon.title')}
          description={t('withIcon.description')}>
          {components.map(item => (
            <div
              key={item.id}
              style={{ background: item.background || 'none' }}>
              <item.comp style={{ margin: '.5rem' }} icon='login'>
                {t('button.label')}
              </item.comp>
              <item.comp style={{ margin: '.5rem' }} iconRight='login'>
                {t('button.label')}
              </item.comp>
            </div>
          ))}
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
