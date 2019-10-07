import React from 'react';
import { defaultTokens } from 'suomifi-ui-components';

import Link, { Props as LinkProps } from 'components/Link';

const isValid = (link: LinkProps): boolean => link && !!link.text && !!link.url;

const getValidOnly = (links: LinkProps[]): LinkProps[] => links.filter(isValid);

const LinkList = ({ links = [] }: Props): JSX.Element => {
  links = getValidOnly(links);

  if (links.length === 1) {
    const link = links[0];
    return <Link text={link.text} url={link.url} />;
  }

  if (links.length > 1) {
    return (
      <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
        {links.map((link, index) => (
          <li key={index} style={{ margin: `${defaultTokens.spacing.m} 0` }}>
            <Link text={link.text} url={link.url} />
          </li>
        ))}
      </ul>
    );
  }

  return null;
};

interface Props {
  links: LinkProps[];
}

export default LinkList;
