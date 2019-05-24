import React from 'react'

import { Image } from 'components/Image'
import { Heading, Text } from 'components/ResponsiveComponents'
import LinkList from 'components/LinkList'
import BulletedList, {
  ListItem as BulletedListItem
} from 'components/BulletedList'

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
        <p>
          <BulletedList items={paragraph.listItems} />
        </p>
      </div>
    ))}
    <p>
      <LinkList links={links} />
    </p>
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
  listItems: BulletedListItem[]
}

export default Section
