import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.scss'
import './styles.scss'
import './typography.scss'


const Header = () => (
  <header>
    <h1>
      <Link to="/">CV</Link>
    </h1>
  </header>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="CV – Alex Jenter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      link={[
        {
          href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700',
          rel: 'stylesheet'
        }
      ]}
    />

    <Header />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper


