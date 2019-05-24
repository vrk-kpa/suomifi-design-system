import React from 'react'

import Link from 'components/Link'

const isValid = (link: Link): boolean => link && !!link.text && !!link.url

const getValidOnly = (links: Link[]): Link[] => links.filter(isValid)

const LinkList = ({ links = [] }: Props): JSX.Element => {
  links = getValidOnly(links)

  if (links.length === 1) {
    const link = links[0]
    return <Link text={link.text} url={link.url} />
  }

  if (links.length > 1) {
    return (
      <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
        {links.map((link, index) => (
          <li key={index}>
            <Link text={link.text} url={link.url} />
          </li>
        ))}
      </ul>
    )
  }

  return null
}

interface Props {
  links: Link[]
}

interface Link {
  text: string
  url: string
}

export default LinkList
