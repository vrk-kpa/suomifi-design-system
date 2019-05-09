import React from 'react'
import { Link } from '@wapps/gatsby-plugin-i18next'
import {
  Link as SuomifiLink,
  suomifiTheme,
  Heading,
  Text
} from 'suomifi-ui-components'
import { Image } from './Image'

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
              {link.url.startsWith('/') ? (
                <Link
                  to={link.url}
                  style={{ color: suomifiTheme.colors.highlightBase }}>
                  {link.text}
                </Link>
              ) : (
                <SuomifiLink
                  href={link.url}
                  rel='noopener noreferrer'
                  target='_blank'>
                  {link.text}
                </SuomifiLink>
              )}
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
