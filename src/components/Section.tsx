import React from 'react'

const Section = ({ title, paragraphs, links }: Props): JSX.Element => (
  <section>
    {!!title && <h2>{title}</h2>}
    {paragraphs.map(
      (paragraph, index) => !!paragraph && <p key={index}>{paragraph}</p>
    )}
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
  paragraphs: string[]
  links: Link[]
}

interface Link {
  text: string
  url: string
}

export default Section
