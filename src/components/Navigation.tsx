import React from 'react'
import { NamespacesConsumer } from 'react-i18next'
import { suomifiTheme } from 'suomifi-ui-components'

import NavItem from './NavItem'

const Navigation = () => (
  <NamespacesConsumer>
    {t => (
      <div
        style={{
          padding: 0,
          boxSizing: 'border-box',
          background: `${suomifiTheme.colors.white}`,
          borderBottom: '1px solid #C9CDCF',
          display: 'flex',
          justifyContent: 'center'
        }}>
        <div
          style={{
            width: '100%',
            maxWidth: 1140,
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
          {[
            { to: '/', label: t('home:title') },
            { to: '/components', label: t('components:title') }
          ].map(item => (
            <div key={item.to} style={{ margin: '0 1.5rem' }}>
              <NavItem to={item.to}>{item.label}</NavItem>
            </div>
          ))}
        </div>
      </div>
    )}
  </NamespacesConsumer>
)

export default Navigation
