import React from 'react'
import Helmet from 'react-helmet'
import { NamespacesConsumer } from 'react-i18next'

const SEO = ({
  title,
  description,
  meta = [],
  keywords = []
}: Props): JSX.Element => (
  <NamespacesConsumer>
    {(t, { i18n }) => {
      const metaDescription = description || t('common:site.description')
      const lang = i18n.language
      return (
        <Helmet
          htmlAttributes={{ lang }}
          title={title}
          titleTemplate={`%s | ${t('common:site.title')}`}
          meta={[
            { name: `description`, content: metaDescription },
            { property: `og:title`, content: title },
            { property: `og:description`, content: metaDescription },
            { property: `og:type`, content: `website` },
            { name: `twitter:card`, content: `summary` },
            { name: `twitter:creator`, content: t('common:site.author') },
            { name: `twitter:title`, content: title },
            { name: `twitter:description`, content: metaDescription }
          ]
            .concat(
              keywords.length > 0
                ? { name: `keywords`, content: keywords.join(`, `) }
                : []
            )
            .concat(meta)}
        />
      )
    }}
  </NamespacesConsumer>
)

interface Props {
  title: string
  description?: string
  meta?: any[]
  keywords?: string[]
}

export default SEO
