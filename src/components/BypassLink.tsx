import React, { ReactNode } from 'react'
import { suomifiTheme } from 'suomifi-ui-components'

const BypassLink = ({ to, children }: Props): JSX.Element => (
  <a
    href={to}
    css={[
      {
        position: 'absolute',
        left: '-100rem',
        margin: '1rem',
        padding: '.5rem',
        background: suomifiTheme.colors.highlightLight53,
        border: '1px solid #C9CDCF',
        color: suomifiTheme.colors.blackBase,
        textDecoration: 'none'
      },
      `&:focus { ${suomifiTheme.outlines.basic} }`,
      { '&:focus': { position: 'absolute', left: 'auto' } }
    ]}>
    {children}
  </a>
)

interface Props {
  to: string
  children: ReactNode
}

export default BypassLink
