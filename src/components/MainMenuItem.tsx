import React, { Component, ReactNode } from 'react'
import { suomifiTheme } from 'suomifi-ui-components'
import { Link } from '@wapps/gatsby-plugin-i18next'

import { isFrontPage } from 'components/LinkUtil'

class MainMenuItem extends Component<Props> {
  public render(): JSX.Element {
    const { to, children } = this.props

    return (
      <Link
        to={to}
        css={[
          {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '3.2rem',
            paddingLeft: '1rem',
            paddingRight: '1rem',
            borderBottom: `1px solid ${suomifiTheme.colors.depthSecondary}`,
            color: suomifiTheme.colors.highlightBase,
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            '&:hover': {
              background: suomifiTheme.colors.depthSecondary,
              color: suomifiTheme.colors.brandBase
            }
          },
          `&:focus { ${suomifiTheme.outlines.basic} }`
        ]}
        getProps={({ isCurrent, isPartiallyCurrent }) => {
          if (!isFrontPage(to) && isPartiallyCurrent && !isCurrent) {
            return {
              style: {
                fontWeight: 600
              }
            }
          }

          if (isCurrent) {
            return {
              style: {
                background: suomifiTheme.colors.depthSecondary,
                color: suomifiTheme.colors.brandBase,
                fontWeight: 600
              }
            }
          }
        }}>
        {children}
      </Link>
    )
  }
}

interface Props {
  to: string
  children: ReactNode
}

export default MainMenuItem
