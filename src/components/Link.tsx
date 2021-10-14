import React, { ReactNode } from 'react';
import { Link as GatsbyLink } from 'gatsby';

import * as commonContent from '../../locale/fi/common.json';
import {
  Link as SuomifiLink,
  ExternalLink as SuomifiExternalLink,
  defaultSuomifiTheme,
} from 'suomifi-ui-components';
import styled from 'styled-components';

import { ensureTrailingSlash } from 'components/LinkUtil';

const InternalLink = ({
  children,
  ...passProps
}: {
  children: ReactNode;
}): JSX.Element => <GatsbyLink {...(passProps as any)}>{children}</GatsbyLink>;

const CustomLink = styled(({ asProp, ...passProps }) => {
  return <SuomifiLink asProp={asProp} {...passProps} />;
})`
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

  const customLinkProps = {
    to: ensureTrailingSlash(url),
    asProp: InternalLink,
    title,
    style,
  };

  return url.startsWith('/') ? (
    <CustomLink {...customLinkProps}>{content}</CustomLink>
  ) : (
    <CustomExternalLink
      // hide external icon when there is already icon to indicate link target
      hideIcon={!!icon}
      href={url}
      title={title}
      labelNewWindow={commonContent['opens.new.window']}
      style={style}
    >
      {content}
    </CustomExternalLink>
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
