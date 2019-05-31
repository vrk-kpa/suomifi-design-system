import React, { ReactNode } from 'react'
import { NamespacesConsumer } from 'react-i18next'
import { suomifiTheme } from 'suomifi-ui-components'

import { Text } from 'components/ResponsiveComponents'
import Link, { Props as LinkProps } from 'components/Link'

import { Desktop, Mobile, Tablet } from 'components/Responsive'
import { ReactComponent as SuomiFiWithText } from 'staticIcons/SuomiFiWithText.svg'
import { ReactComponent as Slack } from 'icons/slack.svg'
import { ReactComponent as Github } from 'icons/github.svg'

const Content = ({
  header,
  title,
  description,
  links,
  background = suomifiTheme.colors.whiteBase,
  textColor = 'blackBase',
  linkColor,
  textDecoration,
  center = false,
  wrapAll = false
}: Props): JSX.Element => (
  <div
    style={{
      margin: 0,
      padding: '1rem',
      background: background,
      display: 'flex',
      justifyContent: 'center'
    }}>
    <div
      style={{
        width: '100%',
        maxWidth: 1140,
        display: wrapAll ? 'initial' : 'flex',
        flexWrap: 'wrap',
        justifyContent: center ? 'center' : 'space-between'
      }}>
      {header && (
        <div style={{ flex: '100%', marginTop: '1rem' }}>{header}</div>
      )}
      <div style={{ flex: '40%', textAlign: center ? 'center' : 'initial' }}>
        <p style={{ margin: '1rem 0' }}>
          <Text.bold color={textColor} style={{ textAlign: 'inherit' }}>
            {title}
          </Text.bold>
        </p>
        <p style={{ margin: '1rem 0' }}>
          <Text color={textColor}>{description}</Text>
        </p>
      </div>
      <div
        style={{
          margin: '1rem 0',
          marginLeft: wrapAll ? 0 : '3rem',
          flex: '50%',
          textAlign: center ? 'center' : 'initial'
        }}>
        <ul
          style={{
            margin: 0,
            padding: 0,
            width: '100%',
            listStyle: 'none',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: wrapAll
              ? center
                ? 'center'
                : 'initial'
              : 'flex-end'
          }}>
          {links &&
            links.map(
              (link, index) =>
                link &&
                !!link.text &&
                !!link.url && (
                  <li
                    key={index}
                    style={{
                      display: 'inline-flex',
                      justifyContent: wrapAll
                        ? center
                          ? 'center'
                          : 'initial'
                        : 'flex-end',
                      flex: wrapAll ? '100%' : 'unset',
                      margin: wrapAll ? '.5rem 0' : '0 1.5rem 1rem 1.5rem'
                    }}>
                    <Link
                      icon={link.icon}
                      text={link.text}
                      url={link.url}
                      style={{
                        '&:link,:visited,:focus,:hover,:active': {
                          fontSize: '16px',
                          color: suomifiTheme.colors[linkColor],
                          textDecoration: textDecoration
                        }
                      }}
                    />
                  </li>
                )
            )}
        </ul>
      </div>
    </div>
  </div>
)

const AllContent = ({
  center = false,
  wrapAll = false
}: {
  center?: boolean
  wrapAll?: boolean
}): JSX.Element => (
  <NamespacesConsumer>
    {t => (
      <>
        <Content
          header={
            <Link
              icon={
                <SuomiFiWithText style={{ width: '128px', height: '32px' }} />
              }
              title={t('common:to.homepage')}
              url='/'
            />
          }
          description={t('common:footer.description')}
          links={t('common:footer.links')}
          wrapAll={wrapAll}
        />
        <Content
          title={t('common:footer.social.title')}
          description={t('common:footer.social.description')}
          links={[
            {
              icon: (
                <Slack
                  style={{
                    fill: suomifiTheme.colors.whiteBase,
                    fontSize: '25px'
                  }}
                />
              ),
              text: t('common:slack.link.text'),
              url: t('common:slack.link.url')
            },
            {
              icon: (
                <Github
                  style={{
                    fill: suomifiTheme.colors.whiteBase,
                    fontSize: '25px'
                  }}
                />
              ),
              text: t('common:github.link.text'),
              url: t('common:github.link.url')
            }
          ]}
          background={suomifiTheme.colors.brandBase}
          textColor='whiteBase'
          linkColor='whiteBase'
          textDecoration='underline'
          center={center}
          wrapAll={wrapAll}
        />
      </>
    )}
  </NamespacesConsumer>
)

const Footer = (): JSX.Element => (
  <footer id='footer'>
    <Desktop>
      <AllContent />
    </Desktop>
    <Tablet>
      <AllContent />
    </Tablet>
    <Mobile>
      <AllContent center wrapAll />
    </Mobile>
  </footer>
)

interface Props {
  header?: ReactNode
  title?: string
  description: string
  links?: LinkProps[]
  background?: string
  textColor?: keyof typeof suomifiTheme.colors
  linkColor?: keyof typeof suomifiTheme.colors
  textDecoration?: string
  center?: boolean
  wrapAll?: boolean
}

export default Footer
