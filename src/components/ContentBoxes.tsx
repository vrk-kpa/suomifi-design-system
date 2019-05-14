import React from 'react'
import { suomifiTheme, Icon } from 'suomifi-ui-components'
import { StaticIconKeys } from 'suomifi-icons'

import { Heading, Text } from './ResponsiveComponents'
import Link from './Link'

const Block = ({ block }: { block: Block }): JSX.Element => (
  <>
    {!!block.icon && (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '70px',
          height: '70px',
          marginBottom: '1rem',
          border: `1px solid ${suomifiTheme.colors.depthLight13}`,
          borderRadius: '50%',
          fontSize: '50px'
        }}>
        <Icon icon={block.icon} />
      </div>
    )}
    {!!block.title && <Heading.h2>{block.title}</Heading.h2>}
    {block.paragraphs.map((paragraph, index) => (
      <div key={index}>
        {!!paragraph.text && (
          <p>
            <Text>{paragraph.text}</Text>
          </p>
        )}
      </div>
    ))}
    <ul style={{ margin: 0, padding: 0, width: '100%', listStyle: 'none' }}>
      {block.links.map(
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
  </>
)

const ContentBoxes = ({ hasFrame, mainTitle, blocks }: Props): JSX.Element => (
  <section
    style={{
      background: hasFrame ? suomifiTheme.colors.whiteBase : 'none',
      padding: '2rem 1rem',
      display: 'flex',
      justifyContent: 'center'
    }}>
    <div style={{ maxWidth: 1140 }}>
      <Heading.h1 style={{ textAlign: 'center' }}>{mainTitle}</Heading.h1>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          margin: '1rem 0'
        }}>
        {blocks.map((block, index) => (
          <article
            key={index}
            style={{
              flex: '1 1 30%',
              minWidth: '20rem',
              margin: '1rem'
            }}>
            <Block block={block} />
          </article>
        ))}
      </div>
    </div>
  </section>
)

interface Props {
  hasFrame?: boolean
  mainTitle: string
  blocks: Block[]
}

interface Block {
  icon?: StaticIconKeys
  title: string
  paragraphs: Paragraph[]
  links: Link[]
}

interface Link {
  text: string
  url: string
}

interface Paragraph {
  text: string
}

export default ContentBoxes
