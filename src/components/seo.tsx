import React from 'react';
import Helmet from 'react-helmet';

import * as commonContent from '../../locale/fi/common.json';

const SEO = ({
  title,
  description,
  meta = [],
  keywords = [],
}: Props): JSX.Element => {
  const metaDescription = description || commonContent['site.description'];
  return (
    <Helmet
      htmlAttributes={{ lang: 'fi' }}
      title={title}
      titleTemplate={`%s | ${commonContent['site.title']}`}
      meta={[
        { name: `description`, content: metaDescription },
        { property: `og:title`, content: title },
        { property: `og:description`, content: metaDescription },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary` },
        { name: `twitter:creator`, content: commonContent['site.author'] },
        { name: `twitter:title`, content: title },
        { name: `twitter:description`, content: metaDescription },
      ]
        .concat(
          keywords.length > 0
            ? { name: `keywords`, content: keywords.join(`, `) }
            : [],
        )
        .concat(meta)}
    />
  );
};

interface Props {
  title: string;
  description?: string;
  meta?: any[];
  keywords?: string[];
}

export default SEO;
