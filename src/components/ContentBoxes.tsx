import React from 'react'
import { Link } from '@wapps/gatsby-plugin-i18next'
import { suomifiTheme } from 'suomifi-ui-components'
import { IconKeys } from 'suomifi-icons'
import { Icon } from '../components/Icon' // TODO use icons from lib when available

const Block = ({ block }: { block: Block }): JSX.Element => (
  <>
    {!!block.icon && (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '70px',
            height: '70px',
            border: `1px solid #C9CDCF`,
            borderRadius: '50%'
          }}>
          <div aria-hidden style={{ width: '50px', height: '50px' }}>
            <Icon.solution />
          </div>
        </div>
      </div>
    )}
    {!!block.title && <h3>{block.title}</h3>}
    {block.paragraphs.map((paragraph, index) => (
      <div key={index}>{!!paragraph.text && <p>{paragraph.text}</p>}</div>
    ))}
    <ul style={{ margin: 0, padding: 0, width: '100%', listStyle: 'none' }}>
      {block.links.map(
        (link, index) =>
          link &&
          !!link.text &&
          !!link.url && (
            <li key={index}>
              {link.url.startsWith('/') ? (
                <Link to={link.url}>{link.text}</Link>
              ) : (
                <a href={link.url} rel='noopener noreferrer' target='_blank'>
                  {link.text}
                </a>
              )}
            </li>
          )
      )}
    </ul>
  </>
)

const ContentBoxes = ({ hasFrame, mainTitle, blocks }: Props): JSX.Element => (
  <section>
    <h2 style={{ textAlign: 'center' }}>{mainTitle}</h2>
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        background: hasFrame ? suomifiTheme.colors.whiteBase : 'none',
        border: hasFrame ? `1px solid #C9CDCF` : 0,
        padding: hasFrame ? '1rem' : 0
      }}>
      {blocks.map((block, index) => (
        <article
          key={index}
          style={{
            flex: '1 1 30%',
            minWidth: '20rem',
            margin: '1rem',
            textAlign: hasFrame ? 'center' : 'initial'
          }}>
          <Block block={block} />
        </article>
      ))}
    </div>
  </section>
)

interface Props {
  hasFrame?: boolean
  mainTitle: string
  blocks: Block[]
}

interface Block {
  icon?: IconKeys
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
