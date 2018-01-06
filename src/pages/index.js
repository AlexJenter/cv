import React from 'react'
import Link from 'gatsby-link'

import Skillsection from '../components/Skillsection';

const Section = ({frontmatter, html}) => (
  <section>
    <h2>{frontmatter.title}</h2>
    <div
      className="section__content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  </section>
);

const IndexPage = ({data}) => (
  <main>
    {data.allMarkdownRemark.edges.map(x => <Section {...x.node}/>)}
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
