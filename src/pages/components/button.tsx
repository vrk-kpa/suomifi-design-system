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
import ComponentExample from '../../components/ComponentExample'

const components = [
  { id: 'primary', comp: Button },
  { id: 'secondary', comp: Button.secondary },
  { id: 'tertiary', comp: Button.tertiary },
  {
    id: 'secondaryNoborder',
    comp: Button.secondaryNoborder,
    background: suomifiTheme.colors.white,
    border: '1px solid #C9CDCF'
  },
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

const getExampleComp = (
  Comp: Function,
  id: string,
  label: string,
  props: object,
  t: Function
): JSX.Element => (
  <Comp
    key={id}
    id={id}
    aria-label={label}
    style={{ margin: '.5rem' }}
    {...props}
    onClick={() => handleClick(id, label, t)}>
    {label}
  </Comp>
)

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
            links={section.links}
          />
        ))}

        {components.map(item => (
          <ComponentDescription
            key={item.id}
            title={t(`${item.id}.title`)}
            description={t(`${item.id}.description`)}>
            <ComponentExample
              style={{
                background: item.background || 'rgba(165, 172, 176, 0.1)',
                border: item.border || 0
              }}>
              {[
                { id: item.id, label: t(`${item.id}.label`) },
                {
                  id: `${item.id}.disabled`,
                  label: t(`${item.id}.labelDisabled`),
                  props: { disabled: true }
                }
              ].map(example =>
                getExampleComp(
                  item.comp,
                  example.id,
                  example.label,
                  example.props,
                  t
                )
              )}
            </ComponentExample>
          </ComponentDescription>
        ))}

        <ComponentDescription
          title={t('withIcon.title')}
          description={t('withIcon.description')}>
          {components.map(item => (
            <ComponentExample
              key={item.id}
              style={{
                background: item.background || 'rgba(165, 172, 176, 0.1)',
                border: item.border || 0
              }}>
              {[
                {
                  id: `${item.id}.icon`,
                  label: t('button.labelIcon', {
                    name: t(`${item.id}.label`)
                  }),
                  props: { icon: 'login' }
                },
                {
                  id: `${item.id}.iconRight`,
                  label: t('button.labelIconRight', {
                    name: t(`${item.id}.label`)
                  }),
                  props: { iconRight: 'logout' }
                }
              ].map(example =>
                getExampleComp(
                  item.comp,
                  example.id,
                  example.label,
                  example.props,
                  t
                )
              )}
            </ComponentExample>
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
