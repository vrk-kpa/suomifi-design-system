import React, { ReactNode } from 'react'
import { Link } from '@wapps/gatsby-plugin-i18next'
import { suomifiTheme } from 'suomifi-ui-components'

const isFrontPage = (to: string): boolean => to && to === '/'

const NavItem = ({ to, children }: Props): JSX.Element => (
  <Link
    to={to}
    css={[
      {
        padding: '.5rem',
        lineHeight: '2.8rem',
        whiteSpace: 'nowrap',
        color: suomifiTheme.colors.text,
        textDecoration: 'none',
        '&:hover': {
          borderBottom: `4px solid ${suomifiTheme.colors.secondaryColor}`
        }
      },
      `&:focus { ${suomifiTheme.outlines.basic} }`
    ]}
    getProps={({ isCurrent, isPartiallyCurrent }) => {
      if (isCurrent || (!isFrontPage(to) && isPartiallyCurrent)) {
        return {
          style: {
            borderBottom: `4px solid ${suomifiTheme.colors.secondaryColor}`
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
