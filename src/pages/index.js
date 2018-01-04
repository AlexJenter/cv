import React from 'react'
import Link from 'gatsby-link'

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
    {
      data
      .allMarkdownRemark
      .edges
      .sort((a, b) => a.node.frontmatter.position - b.node.frontmatter.position)
      .map(x => <Section {...x.node}/>)
    }
  </main>
)

export const query = graphql`
query IndexQuery {
  allMarkdownRemark {
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
