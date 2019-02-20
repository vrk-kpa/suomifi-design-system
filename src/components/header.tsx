import { Link } from '@wapps/gatsby-plugin-i18next'
import React from 'react'
import { NamespacesConsumer } from 'react-i18next'
import { suomifiTheme } from 'suomifi-ui-components'

import Switcher from './switcher'
import { Icon } from './Icon'

const Header = (): JSX.Element => (
  <NamespacesConsumer>
    {t => (
      <header
        style={{
          padding: '1rem',
          borderTop: `4px solid ${suomifiTheme.colors.brandColor}`,
          boxSizing: `border-box`,
          background: suomifiTheme.colors.white,
          borderBottom: '1px solid #C9CDCF',
          display: 'flex',
          justifyContent: 'center',
          lineHeight: '40px'
        }}>
        <div
          style={{
            width: '100%',
            maxWidth: 1140,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap'
          }}>
          <div style={{ width: '128px', height: '32px' }}>
            <Link to='/'>
              <Icon.suomifi />
            </Link>
          </div>
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexWrap: 'nowrap',
              marginLeft: '.5rem'
            }}>
            <div
              style={{
                fontSize: '28px',
                fontWeight: 600,
                color: suomifiTheme.colors.brandColor
              }}>
              {t('header:title')}
            </div>
            <div
              style={{
                whiteSpace: 'nowrap',
                lineHeight: '14px',
                alignSelf: 'start',
                margin: '.5rem',
                padding: '.2rem .5rem',
                background: suomifiTheme.colors.secondaryColor,
                fontSize: '14px',
                fontWeight: 600,
                textTransform: 'uppercase',
                color: suomifiTheme.colors.invertText
              }}>
              {t('alpharel:title')}
            </div>
          </div>
          <div>
            <Switcher />
          </div>
        </div>
      </header>
    )}
  </NamespacesConsumer>
)

export default Header
