import React, { Component, ReactNode } from 'react'
import { suomifiTheme } from 'suomifi-ui-components'
import { Link } from '@wapps/gatsby-plugin-i18next'

class MainMenuItem extends Component<Props> {
  private isFrontPage = (to: string): boolean => to && to === '/'

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
            borderBottom: '1px solid #EEF5FF',
            color: suomifiTheme.colors.secondaryColor,
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            '&:hover': {
              background: '#EEF5FF',
              color: suomifiTheme.colors.brandColor
            }
          },
          `&:focus { ${suomifiTheme.outlines.basic} }`
        ]}
        getProps={({ isCurrent, isPartiallyCurrent }) => {
          if (!this.isFrontPage(to) && isPartiallyCurrent && !isCurrent) {
            return {
              style: {
                fontWeight: 600
              }
            }
          }

          if (isCurrent) {
            return {
              style: {
                background: '#EEF5FF',
                color: suomifiTheme.colors.brandColor,
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
