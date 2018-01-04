import React from 'react'
import Link from 'gatsby-link'

import Skill from '../components/Skill'

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
      <section>
    <h2>Fähigkeiten</h2>
    <h3>Design</h3>
    <ul>
      <Skill score="7" name="Sketch.app"/>
      <Skill score="8" name="Illustrator"/>
    </ul>
    <h3>Code</h3>
    <ul>
      <Skill score="8" name="HTML/CSS"/>
      <Skill score="7" name="Javascript"/>
      <Skill score="4" name="Bash"/>
    </ul>
  </section>
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
