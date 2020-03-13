import React from 'react';
import { suomifiDesignTokens } from 'suomifi-ui-components';

import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';
import Link, { Props as LinkProps } from 'components/Link';
import { Desktop, Mobile, Tablet } from 'components/Responsive';

const linkStyle = {
  padding: `${suomifiDesignTokens.spacing.s} ${suomifiDesignTokens.spacing.m}`,
  border: `1px solid ${suomifiDesignTokens.colors.whiteBase}`,
  borderRadius: '2px',
  '&:link,:visited,:focus,:hover,:active': {
    fontSize: '16px',
    color: suomifiDesignTokens.colors.whiteBase,
    textDecoration: 'none',
  },
};

const Content = ({
  title,
  description,
  link,
  center = false,
}: Props & { center?: boolean }): JSX.Element => (
  <div
    style={{
      width: '100%',
      maxWidth: 900,
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: center ? 'center' : 'space-between',
    }}
  >
    <div
      style={{
        flex: center ? '1 1 100%' : '1 1 60%',
        textAlign: center ? 'center' : 'initial',
      }}
    >
      <Heading.h2
        color="whiteBase"
        style={{
          textAlign: 'inherit',
          margin: `0 0 0 ${suomifiDesignTokens.spacing.m}`,
        }}
      >
        {title}
      </Heading.h2>
      {description && (
        <Paragraph
          style={{
            margin: `${suomifiDesignTokens.spacing.m} ${suomifiDesignTokens.spacing.m} 0 ${suomifiDesignTokens.spacing.m}`,
            textAlign: 'inherit',
          }}
        >
          <Text color="whiteBase">{description}</Text>
        </Paragraph>
      )}
    </div>
    {link && !!link.text && !!link.url && (
      <div
        style={{
          margin: `${suomifiDesignTokens.spacing.m}`,
          marginLeft: center ? 0 : suomifiDesignTokens.spacing.m,
          marginRight: center ? 0 : suomifiDesignTokens.spacing.m,
        }}
      >
        <Link
          icon={link.icon}
          text={link.text}
          url={link.url}
          style={linkStyle}
        />
      </div>
    )}
  </div>
);

const Annotation = ({ title, description, link }: Props): JSX.Element => (
  <div
    style={{
      margin: 0,
      padding: suomifiDesignTokens.spacing.m,
      background: suomifiDesignTokens.colors.highlightBase,
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <Desktop>
      <Content title={title} description={description} link={link} />
    </Desktop>
    <Tablet>
      <Content title={title} description={description} link={link} />
    </Tablet>
    <Mobile>
      <Content title={title} description={description} link={link} center />
    </Mobile>
  </div>
);

interface Props {
  title: string;
  description: string;
  link?: LinkProps;
}

export default Annotation;
