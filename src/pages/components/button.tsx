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

const Page = (): JSX.Element => (
  <NamespacesConsumer ns={['button']}>
    {t => (
      <Layout sideNavData={sideNavData(t)}>
        <SEO title={t('title')} description='' />
        <h1>{t('title')}</h1>

        {[
          { id: 'primary', comp: Button },
          { id: 'secondary', comp: Button.secondary },
          { id: 'tertiary', comp: Button.tertiary },
          {
            id: 'secondaryNoborder',
            comp: Button.secondaryNoborder
          },
          {
            id: 'negative',
            comp: Button.negative,
            background: true
          }
        ].map(item => (
          <ComponentDescription
            key={item.id}
            title={t(`${item.id}.title`)}
            description={t(`${item.id}.description`)}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                padding: '1rem',
                background: item.background
                  ? suomifiTheme.colors.secondaryColor
                  : 'none'
              }}>
              <item.comp style={{ margin: '.5rem' }}>
                {t(`${item.id}.title`)}
              </item.comp>
              <item.comp style={{ margin: '.5rem' }} icon='login'>
                {t('icon.title')}
              </item.comp>
              <item.comp style={{ margin: '.5rem' }} iconRight='login'>
                {t('iconRight.title')}
              </item.comp>
              <item.comp style={{ margin: '.5rem' }} disabled>
                {t('disabled.title')}
              </item.comp>
            </div>
          </ComponentDescription>
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
