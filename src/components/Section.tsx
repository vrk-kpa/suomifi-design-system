import React from 'react'
import { Image } from './Image'

const Section = ({ title, paragraphs, links }: Props): JSX.Element => (
  <section>
    {!!title && <h3>{title}</h3>}
    {paragraphs.map((paragraph, index) => (
      <div key={index}>
        {!!paragraph['image.key'] && (
          <Image imgKey={paragraph['image.key']} alt={paragraph['image.alt']} />
        )}
        {!!paragraph.text && <p>{paragraph.text}</p>}
      </div>
    ))}
    <ul>
      {links.map(
        (link, index) =>
          link &&
          !!link.text &&
          !!link.url && (
            <li key={index}>
              <a href={link.url} rel='noopener noreferrer' target='_blank'>
                {link.text}
              </a>
            </li>
          )
      )}
    </ul>
  </section>
)

interface Props {
  title: string
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
