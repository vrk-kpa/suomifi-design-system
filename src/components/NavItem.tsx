import React, { ReactNode } from 'react'
import { Link } from '@wapps/gatsby-plugin-i18next'
import { suomifiTheme } from 'suomifi-ui-components'

import { isFrontPage } from 'components/LinkUtil'

const NavItem = ({ to, children }: Props): JSX.Element => (
  <Link
    to={to}
    css={[
      {
        padding: '.5rem',
        lineHeight: '2.8rem',
        whiteSpace: 'nowrap',
        color: suomifiTheme.colors.blackBase,
        textDecoration: 'none',
        '&:hover': {
          borderBottom: `4px solid ${suomifiTheme.colors.highlightBase}`
        }
      },
      `&:focus { ${suomifiTheme.outlines.basic} }`
    ]}
    getProps={({ isCurrent, isPartiallyCurrent }) => {
      if (isCurrent || (!isFrontPage(to) && isPartiallyCurrent)) {
        return {
          style: {
            borderBottom: `4px solid ${suomifiTheme.colors.highlightBase}`
          }
        }
      }
    }}>
    {children}
  </Link>
)

interface Props {
  to: string
  children: ReactNode
}

export default NavItem
