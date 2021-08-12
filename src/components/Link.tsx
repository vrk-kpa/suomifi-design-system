import React, { ReactNode } from 'react';
import { Translation } from 'react-i18next';
import { Link as GatsbyLink } from '@wapps/gatsby-plugin-i18next';
import {
  Link as SuomifiLink,
  ExternalLink as SuomifiExternalLink,
  defaultSuomifiTheme,
} from 'suomifi-ui-components';
import styled from 'styled-components';

import { ensureTrailingSlash } from 'components/LinkUtil';

const InternalLink = ({
  children,
  href,
  ...passProps
}: {
  href: string;
  children: ReactNode;
}): JSX.Element => (
  <GatsbyLink to={href} {...passProps}>
    {children}
  </GatsbyLink>
);

const CustomLink = styled(SuomifiLink)`
  display: 'initial';
  align-items: 'center';
`;

const CustomExternalLink = styled(SuomifiExternalLink)`
  display: ${(props) => (props.hideIcon ? 'inline-flex' : 'initial')};
  align-items: 'center';
`;

const Link = ({ icon, text, title, url, style }: Props): JSX.Element => {
  const content = (
    <span style={{ display: 'inline-flex', alignItems: 'center' }}>
      {icon && (
        <span
          style={{
            display: 'inline-flex',
            marginRight: text ? defaultSuomifiTheme.spacing.xs : 0,
          }}
        >
          {icon}
        </span>
      )}
      {text}
    </span>
  );

  return (
    <Translation>
      {(t) =>
        url.startsWith('/') ? (
          <CustomLink
            href={ensureTrailingSlash(url)}
            as={InternalLink}
            title={title}
            style={style}
          >
            {content}
          </CustomLink>
        ) : (
          <CustomExternalLink
            // hide external icon when there is already icon to indicate link target
            hideIcon={!!icon}
            href={url}
            title={title}
            labelNewWindow={t('common:opens.new.window')}
            style={style}
          >
            {content}
          </CustomExternalLink>
        )
      }
    </Translation>
  );
};

export interface Props {
  icon?: ReactNode;
  text?: string;
  title?: string;
  url: string;
  style?: object;
}

export default Link;
