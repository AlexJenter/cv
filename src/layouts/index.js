import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.scss'
import './styles.scss'

const Header = () => (
  <div className="header">
    <h1>
      <Link to="/">CV</Link>
    </h1>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="CV – Alex Jenter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div className="body">
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper


