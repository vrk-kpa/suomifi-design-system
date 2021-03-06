import React, { ReactNode } from 'react';
import { Translation } from 'react-i18next';
import { Link as GatsbyLink } from '@wapps/gatsby-plugin-i18next';
import {
  Link as SuomifiLink,
  suomifiDesignTokens,
} from 'suomifi-ui-components';
import styled from 'styled-components';

import { ensureTrailingSlash } from 'components/LinkUtil';

const InternalLink = ({
  children,
  ...passProps
}: {
  children: ReactNode;
}): JSX.Element => <GatsbyLink {...passProps}>{children}</GatsbyLink>;

const Link = ({ icon, text, title, url, style }: Props): JSX.Element => {
  const CustomLink = styled(SuomifiLink)({
    display: icon ? 'inline-flex' : 'initial',
    alignItems: 'center',
    ...style,
  });

  const content = (
    <span style={{ display: 'inline-flex', alignItems: 'center' }}>
      {icon && (
        <span
          style={{
            display: 'inline-flex',
            marginRight: text ? suomifiDesignTokens.spacing.xs : 0,
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
            to={ensureTrailingSlash(url)}
            as={InternalLink}
            title={title}
          >
            {content}
          </CustomLink>
        ) : (
          <CustomLink
            variant="external"
            // hide external icon when there is already icon to indicate link target
            hideIcon={!!icon}
            href={url}
            title={title}
            labelNewWindow={t('common:opens.new.window')}
          >
            {content}
          </CustomLink>
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
