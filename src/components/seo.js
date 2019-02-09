import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { NamespacesConsumer } from 'react-i18next'

function SEO({ description, meta, keywords, title }) {
  return (
    <NamespacesConsumer>
      {(t, { i18n }) => {
        const metaDescription = description || t('site:description')
        const lang = i18n.language
        return (
          <Helmet
            htmlAttributes={{
              lang
            }}
            title={title}
            titleTemplate={`%s | ${t('site:title')}`}
            meta={[
              {
                name: `description`,
                content: metaDescription
              },
              {
                property: `og:title`,
                content: title
              },
              {
                property: `og:description`,
                content: metaDescription
              },
              {
                property: `og:type`,
                content: `website`
              },
              {
                name: `twitter:card`,
                content: `summary`
              },
              {
                name: `twitter:creator`,
                content: t('site:author')
              },
              {
                name: `twitter:title`,
                content: title
              },
              {
                name: `twitter:description`,
                content: metaDescription
              }
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `)
                    }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    </NamespacesConsumer>
  )
}

SEO.defaultProps = {
  meta: [],
  keywords: []
}

SEO.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired
}

export default SEO
