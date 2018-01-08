import React from 'react'

export default ({frontmatter, html}) => (
    <section className={`section section--${frontmatter.title.toLowerCase()}`}>
      <h2>{frontmatter.title}</h2>
      <div
        className="section__content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </section>
);