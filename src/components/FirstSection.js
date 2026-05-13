import React from "react";
import Link from "gatsby-link";

export default class Firstsection extends React.Component {
  constructor() {
    super();
    this.state = {
      renderLinks: false
    };
  }
  componentDidMount() {
    this.setState({
      renderLinks: true
    });
  }
  render() {
    return (
      <section
        className={`section section--${this.props.frontmatter.title.toLowerCase()}`}
      >
        <div
          className="section__content"
          dangerouslySetInnerHTML={{ __html: this.props.html }}
        />
        {this.props.frontmatter.links.map((x, i) =>
          this.state.renderLinks ? (
            <a key={i} rel="noopener noreferrer" target="_blank" href={x.href}>
              {x.text}
            </a>
          ) : null
        )}
        {this.props.page === "cv" && <Link to="/projects/">Recent</Link>}
        {this.props.page === "projects" && <Link to="/">CV</Link>}
      </section>
    );
  }
}
