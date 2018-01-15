import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.scss'
import './styles.scss'
import './typography.scss'
import image from '../../static/foto-av.jpg'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Alex Jenter – CV"
      meta={[
        { name: 'description', content: 'Webdeveloper with a background in product design' },
        { name: 'keywords', content: 'frontend, developer' },
        { property: 'og:title', content: 'Alex Jenter – CV' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: image },
      ]}
      link={[
        {
          href:
            'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700',
          rel: 'stylesheet',
        },
      ]}
    />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
