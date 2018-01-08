import React from 'react'
import Link from 'gatsby-link'

import Skillsection from '../components/Skillsection';
import Section from '../components/Section';

const IndexPage = ({data}) => (
  <main>
    {data.allMarkdownRemark.edges.map(x => <Section key={x.node.id} {...x.node}/>)}
    <Skillsection />
  </main>
)

export const query = graphql`
query IndexQuery {
  allMarkdownRemark(
    sort: {fields: [frontmatter___position], order: ASC }
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
`;

export default IndexPage
