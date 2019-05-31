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

const Link = ({ icon, text, title, url, style }: Props): JSX.Element => {
  const CustomLink = styled(SuomifiLink)({
    display: 'inline-flex',
    lineHeight: '1.5em',
    ...style
  })

  const content = (
    <span style={{ display: 'inline-flex', alignItems: 'center' }}>
      {icon && (
        <span
          style={{ display: 'inline-flex', marginRight: text ? '.5rem' : 0 }}>
          {icon}
        </span>
      )}
      {text}
    </span>
  )

  return (
    <>
      {url.startsWith('/') ? (
        <CustomLink
          to={ensureTrailingSlash(url)}
          as={InternalLink}
          title={title}>
          {content}
        </CustomLink>
      ) : (
        <CustomLink
          href={url}
          rel='noopener noreferrer'
          target='_blank'
          title={title}>
          {content}
        </CustomLink>
      )}
    </>
  )
}

export interface Props {
  icon?: ReactNode
  text?: string
  title?: string
  url: string
  style?: object
}

export default Link
