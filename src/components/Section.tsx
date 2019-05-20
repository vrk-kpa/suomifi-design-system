import React from 'react'

import { Image } from 'components/Image'
import { Heading, Text } from 'components/ResponsiveComponents'
import Link from 'components/Link'

const Section = ({
  mainTitle,
  title,
  paragraphs,
  links
}: Props): JSX.Element => (
  <section>
    {!!mainTitle && <Heading.h2>{mainTitle}</Heading.h2>}
    {!!title && <Heading.h3>{title}</Heading.h3>}
    {paragraphs.map((paragraph, index) => (
      <div key={index}>
        {!!paragraph['image.key'] && (
          <div aria-hidden>
            <Image
              imgKey={paragraph['image.key']}
              alt={paragraph['image.alt']}
            />
          </div>
        )}
        {!!paragraph.text && (
          <p>
            <Text>{paragraph.text}</Text>
          </p>
        )}
      </div>
    ))}
    <ul>
      {links.map(
        (link, index) =>
          link &&
          !!link.text &&
          !!link.url && (
            <li key={index}>
              <Link text={link.text} url={link.url} />
            </li>
          )
      )}
    </ul>
  </section>
)

interface Props {
  mainTitle?: string
  title?: string
  paragraphs: Paragraph[]
  links: Link[]
}

interface Link {
  text: string
  url: string
}

interface Paragraph {
  'image.key': string
  'image.alt': string
  text: string
}

export default Section
