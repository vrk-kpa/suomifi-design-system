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

const clickCount = {}
const handleClick = (id: string, name: string, t: Function): void => {
  if (!clickCount[id]) {
    clickCount[id] = 0
  }
  document.getElementById(id).setAttribute(
    'aria-label',
    t('button.labelClicked', {
      name: name,
      count: ++clickCount[id]
    })
  )
}

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
              <item.comp
                id={item.id}
                aria-label={t(`${item.id}.title`)}
                style={{ margin: '.5rem' }}
                onClick={() => handleClick(item.id, t(`${item.id}.title`), t)}>
                {t('button.label')}
              </item.comp>
              <item.comp
                id={`${item.id}.disabled`}
                aria-label={t(`${item.id}.title`)}
                style={{ margin: '.5rem' }}
                disabled
                onClick={() =>
                  handleClick(`${item.id}.disabled`, t(`${item.id}.title`), t)
                }>
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
              <item.comp
                id={`${item.id}.icon`}
                aria-label={t(`${item.id}.title`)}
                style={{ margin: '.5rem' }}
                icon='login'
                onClick={() =>
                  handleClick(`${item.id}.icon`, t(`${item.id}.title`), t)
                }>
                {t('button.label')}
              </item.comp>
              <item.comp
                id={`${item.id}.iconRight`}
                aria-label={t(`${item.id}.title`)}
                style={{ margin: '.5rem' }}
                iconRight='login'
                onClick={() =>
                  handleClick(`${item.id}.iconRight`, t(`${item.id}.title`), t)
                }>
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
