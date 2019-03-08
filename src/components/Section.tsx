import React from 'react'

const Section = ({ title, paragraphs }: Props): JSX.Element => (
  <section>
    <h2>{title}</h2>
    {paragraphs.map((paragraph, index) => (
      <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
    ))}
  </section>
)

interface Props {
  title: string
  paragraphs: string[]
}

export default Section
