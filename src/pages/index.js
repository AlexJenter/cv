import React from 'react'
import Link from 'gatsby-link'

import Skillsection from '../components/Skillsection'
import FirstSection from '../components/FirstSection'
import Section from '../components/Section'

import image from '../../static/foto-av.jpg'

const IndexPage = ({ data }) => (
  <article>
    <header>
      <h1>
        <Link to="/">Alex Jenter</Link>
      </h1>
      <img className="portrait" src={image} alt="portrait of alex jenter" />
      {data.first.edges.map(x => <FirstSection key={x.node.id} {...x.node} />)}
    </header>

    <main>
      {data.rest.edges.map(x => <Section key={x.node.id} {...x.node} />)}
      <Skillsection />
    </main>
  </article>
)

export const query = graphql`
  query IndexQuery {
    first: allMarkdownRemark(
      filter: { frontmatter: { title: { eq: "Person" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            position
            title
          }
          html
        }
      }
    }
    rest: allMarkdownRemark(
      filter: { frontmatter: { title: { ne: "Person" } } }
      sort: { fields: [frontmatter___position], order: ASC }
    ) {
      edges {
        node {
          id
          frontmatter {
            position
            title
          }
          html
        }
      }
    }
  }
`

export default IndexPage
