import React, { ReactNode } from 'react';
import { Translation } from 'react-i18next';
import { suomifiDesignTokens } from 'suomifi-ui-components';

import { Text, Paragraph } from 'components/ResponsiveComponents';
import Link, { Props as LinkProps } from 'components/Link';

import { Desktop, Mobile, Tablet } from 'components/Responsive';
import { ReactComponent as SuomiFiWithText } from 'staticIcons/SuomiFiWithText.svg';
import { ReactComponent as Github } from 'icons/github.svg';

const Content = ({
  header,
  title,
  description,
  links,
  background = suomifiDesignTokens.colors.whiteBase,
  textColor = 'blackBase',
  linkColor,
  textDecoration,
  center = false,
  wrapAll = false,
}: Props): JSX.Element => (
  <div
    style={{
      margin: 0,
      padding: suomifiDesignTokens.spacing.s,
      background: background,
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <div
      style={{
        width: '100%',
        maxWidth: 1140,
        display: wrapAll ? 'initial' : 'flex',
        flexWrap: 'wrap',
        justifyContent: center ? 'center' : 'space-between',
      }}
    >
      {header && (
        <div style={{ flex: '100%', marginTop: suomifiDesignTokens.spacing.s }}>
          {header}
        </div>
      )}
      <div style={{ flex: '40%', textAlign: center ? 'center' : 'initial' }}>
        <Paragraph.secondary style={{ textAlign: 'inherit' }}>
          <Text.bold color={textColor}>{title}</Text.bold>
        </Paragraph.secondary>
        <Paragraph.secondary style={{ textAlign: 'inherit' }}>
          <Text color={textColor}>{description}</Text>
        </Paragraph.secondary>
      </div>
      <div
        style={{
          margin: `${suomifiDesignTokens.spacing.s} 0`,
          marginLeft: wrapAll ? 0 : suomifiDesignTokens.spacing.xxxl,
          flex: '50%',
          textAlign: center ? 'center' : 'initial',
        }}
      >
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
              : 'flex-end',
          }}
        >
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
                      margin: wrapAll
                        ? `${suomifiDesignTokens.spacing.xs} 0`
                        : `0 ${suomifiDesignTokens.spacing.s} ${suomifiDesignTokens.spacing.s}`,
                    }}
                  >
                    <Link
                      icon={link.icon}
                      text={link.text}
                      url={link.url}
                      style={{
                        '&:link,:visited,:focus,:hover,:active': {
                          fontSize: '16px',
                          color: suomifiDesignTokens.colors[linkColor],
                          textDecoration: textDecoration,
                        },
                      }}
                    />
                  </li>
                ),
            )}
        </ul>
      </div>
    </div>
  </div>
);

const AllContent = ({
  center = false,
  wrapAll = false,
}: {
  center?: boolean;
  wrapAll?: boolean;
}): JSX.Element => (
  <Translation>
    {(t) => (
      <>
        <Content
          header={
            <Link
              icon={
                <SuomiFiWithText style={{ width: '128px', height: '32px' }} />
              }
              title={t('common:to.homepage')}
              url="/"
            />
          }
          description={t('common:footer.description')}
          links={[
            ...t('common:footer.links'),
            {
              icon: (
                <Github
                  style={{
                    fill: suomifiDesignTokens.colors.brandBase,
                    fontSize: '25px',
                  }}
                />
              ),
              text: t('common:github.link.text'),
              url: t('common:github.link.url'),
            },
          ]}
          wrapAll={wrapAll}
        />
      </>
    )}
  </Translation>
);

const Footer = (): JSX.Element => (
  <footer id="footer">
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
);

interface Props {
  header?: ReactNode;
  title?: string;
  description: string;
  links?: LinkProps[];
  background?: string;
  textColor?: keyof typeof suomifiDesignTokens.colors;
  linkColor?: keyof typeof suomifiDesignTokens.colors;
  textDecoration?: string;
  center?: boolean;
  wrapAll?: boolean;
}

export default Footer;
