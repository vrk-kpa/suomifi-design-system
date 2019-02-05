import React from 'react'
import { NamespacesConsumer } from 'react-i18next'
import { suomifiTheme } from 'suomifi-ui-components'

import NavItem from './NavItem'

const Navigation = () => (
  <NamespacesConsumer>
    {t => (
      <nav
        style={{
          padding: 0,
          boxSizing: 'border-box',
          background: `${suomifiTheme.colors.white}`,
          borderBottom: '1px solid #C9CDCF',
          display: 'flex',
          justifyContent: 'center'
        }}>
        <ul
          style={{
            margin: 0,
            padding: 0,
            width: '100%',
            maxWidth: 1140,
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            listStyle: 'none'
          }}>
          {[
            { to: '/', label: t('home:title') },
            { to: '/components', label: t('components:title') }
          ].map(item => (
            <li key={item.to} style={{ margin: '0 1.2rem' }}>
              <NavItem to={item.to}>{item.label}</NavItem>
            </li>
          ))}
        </ul>
      </nav>
    )}
  </NamespacesConsumer>
)

export default Navigation
