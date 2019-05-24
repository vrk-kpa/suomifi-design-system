import React from 'react'
import { suomifiTheme, Icon } from 'suomifi-ui-components'
import { StaticIconKeys } from 'suomifi-icons'

import { Heading, Text } from 'components/ResponsiveComponents'
import LinkList from 'components/LinkList'
import { Props as LinkProps } from 'components/Link'

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
          marginBottom: '2rem',
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
    <p>
      <LinkList links={block.links} />
    </p>
  </>
)

const ContentBoxes = ({ hasFrame, mainTitle, blocks }: Props): JSX.Element => (
  <section
    style={{
      background: hasFrame ? suomifiTheme.colors.whiteBase : 'none',
      padding: '2rem 1rem 0',
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
          margin: '2rem 0'
        }}>
        {blocks.map((block, index) => (
          <article key={index} style={{ flex: '1 1 30%', margin: '1rem' }}>
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
  links: LinkProps[]
}

interface Paragraph {
  text: string
}

export default ContentBoxes
