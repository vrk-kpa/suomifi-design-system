import React, { ReactNode } from 'react'
import { Link as GatsbyLink } from '@wapps/gatsby-plugin-i18next'
import { Link as SuomifiLink } from 'suomifi-ui-components'
import styled from '@emotion/styled'

import { ensureTrailingSlash } from 'components/LinkUtil'

const InternalLink = ({
  children,
  ...passProps
}: {
  children: ReactNode
}): JSX.Element => <GatsbyLink {...passProps}>{children}</GatsbyLink>

const Link = ({ icon, text, url, style }: Props): JSX.Element => {
  const CustomLink = styled(SuomifiLink)({
    display: 'inline-flex',
    lineHeight: '1.5em',
    ...style
  })

  const content = (
    <span style={{ display: 'inline-flex', alignItems: 'center' }}>
      {icon && (
        <span style={{ display: 'inline-flex', marginRight: '.5rem' }}>
          {icon}
        </span>
      )}
      {text}
    </span>
  )

  return (
    <>
      {url.startsWith('/') ? (
        <CustomLink to={ensureTrailingSlash(url)} as={InternalLink}>
          {content}
        </CustomLink>
      ) : (
        <CustomLink href={url} rel='noopener noreferrer' target='_blank'>
          {content}
        </CustomLink>
      )}
    </>
  )
}

export interface Props {
  icon?: ReactNode
  text: string
  url: string
  style?: object
}

export default Link
