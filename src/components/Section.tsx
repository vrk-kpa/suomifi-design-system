import React from 'react'

const Section = ({ title, paragraphs }: Props): JSX.Element => (
  <section>
    {!!title && <h2>{title}</h2>}
    {paragraphs.map(
      (paragraph, index) =>
        !!paragraph && (
          <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
        )
    )}
  </section>
)

interface Props {
  title: string
  paragraphs: string[]
}

export default Section
