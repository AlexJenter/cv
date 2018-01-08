import React from 'react'

export default ({frontmatter, html}) => (
    <section className={`section section--${frontmatter.title.toLowerCase()}`}>
    
      <div
        className="section__content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </section>
);