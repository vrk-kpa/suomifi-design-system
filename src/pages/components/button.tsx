import React from 'react'
import { graphql } from 'gatsby'
import { NamespacesConsumer } from 'react-i18next'
import { withI18next } from '@wapps/gatsby-plugin-i18next'
import { suomifiTheme } from 'suomifi-ui-components'

import Layout from 'components/layout'
import SEO from 'components/seo'
import { Button } from 'components/ExampleComponents'
import ComponentDescription from 'components/ComponentDescription'
import sideNavData from 'config/sidenav/components'
import NoteBox from 'components/NoteBox'
import Section from 'components/Section'
import ComponentExample from 'components/ComponentExample'
import MobileDevice from 'components/MobileDevice'
import { Heading, Text } from 'components/ResponsiveComponents'

const components = [
  { id: 'primary', comp: Button },
  { id: 'tertiary', comp: Button.tertiary },
  {
    id: 'negative',
    comp: Button.negative,
    background: suomifiTheme.colors.highlightBase
  },
  { id: 'secondary', comp: Button.secondary },
  {
    id: 'secondaryNoborder',
    comp: Button.secondaryNoborder,
    background: suomifiTheme.colors.whiteBase,
    border: `1px solid ${suomifiTheme.colors.depthLight13}`
  }
]

const mobileComponents = [
  { id: 'primary', comp: Button },
  { id: 'tertiary', comp: Button.tertiary },
  { id: 'secondary', comp: Button.secondary }
]

const disabledComponents = [
  { id: 'primary', comp: Button },
  { id: 'tertiary', comp: Button.tertiary },
  {
    id: 'negative',
    comp: Button.negative,
    background: suomifiTheme.colors.highlightBase
  },
  { id: 'secondary', comp: Button.secondary },
  {
    id: 'secondaryNoborder',
    comp: Button.secondaryNoborder
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
        <SEO title={t('title')} />
        <Heading.h1>{t('title')}</Heading.h1>

        <p>
          <Text>{t('intro')}</Text>
        </p>

        <Heading.h2>{t('common:component.usage')}</Heading.h2>

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
          title={t('fullWidth.title')}
          description={t('fullWidth.description')}
          exampleFirst>
          <div
            style={{
              overflow: 'hidden',
              marginBottom: '1rem',
              padding: '2rem .8rem 0 .8rem',
              background: suomifiTheme.colors.depthLight30,
              display: 'flex',
              justifyContent: 'center'
            }}>
            <MobileDevice>
              {mobileComponents.map(item => (
                <div key={item.id} style={{ padding: '1rem .5rem' }}>
                  {getExampleComp(
                    item.comp,
                    `${item.id}.fullWidth`,
                    t(`${item.id}.label`),
                    { fullWidth: true, style: {} },
                    t
                  )}
                </div>
              ))}
            </MobileDevice>
          </div>
        </ComponentDescription>

        <Heading.h2>{t('common:component.versions')}</Heading.h2>

        {components.map(item => (
          <ComponentDescription
            key={item.id}
            title={t(`${item.id}.title`)}
            description={t(`${item.id}.description`)}
            exampleFirst>
            <ComponentExample
              style={{
                background: item.background,
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
          description={t('withIcon.description')}
          exampleFirst>
          {components.map(item => (
            <ComponentExample
              key={item.id}
              style={{
                background: item.background,
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

        <ComponentDescription
          title={t('disabled.title')}
          description={t('disabled.description')}
          exampleFirst>
          <ComponentExample>
            {disabledComponents.map(item => (
              <div
                key={item.id}
                style={{
                  padding: item.background ? '.8rem' : 0,
                  background: item.background || 'none'
                }}>
                {getExampleComp(
                  item.comp,
                  `${item.id}.disabled.another`,
                  t(`${item.id}.labelDisabled`),
                  { disabled: true },
                  t
                )}
              </div>
            ))}
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
