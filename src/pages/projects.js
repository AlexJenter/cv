import React from "react";
import Link from "gatsby-link";

import FirstSection from "../components/FirstSection";

import image from "../../static/foto-av.jpg";

const links = [
  {
    url: "https://zentrumfuerliterarischegegenwart.ch",
    label: "Zentrum für Literarische Gegenwart"
  },
  { url: "https://zurichaestheticslab.ch", label: "Zurich Aesthetics Lab" },
  { url: "https://lisachrist.ch", label: "Lisa Christ" },
  {
    url: "https://www.helvetialuzern.ch/en",
    label: "Restaurant Helvetia Luzern"
  },
  { url: "https://emmeneggerarch.ch/", label: "Emmenegger Architekten" },
  { url: "https://kiff.ch", label: "Kiff" },
  { url: "https://upset.ch", label: "Upset" },
  { url: "https://versive.cc", label: "Versive" }
];

const idleCallback =
  typeof window !== "undefined" && window.requestIdleCallback
    ? cb => window.requestIdleCallback(cb)
    : cb => setTimeout(cb, 100);

class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenshots: {},
      hoveredUrl: null,
      tooltipPos: { x: 0, y: 0 }
    };
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  componentDidMount() {
    links.forEach(({ url }) => {
      idleCallback(() => {
        fetch(
          `https://api.microlink.io/?url=${encodeURIComponent(
            url
          )}&screenshot=true&meta=false`
        )
          .then(res => res.json())
          .then(data => {
            if (data.status === "success" && data.data.screenshot) {
              this.setState(prev => ({
                screenshots: {
                  ...prev.screenshots,
                  [url]: data.data.screenshot.url
                }
              }));
            }
          })
          .catch(() => {});
      });
    });
  }

  handleMouseMove(e) {
    if (this.state.hoveredUrl) {
      this.setState({ tooltipPos: { x: e.clientX, y: e.clientY } });
    }
  }

  render() {
    const { data } = this.props;
    const { screenshots, hoveredUrl, tooltipPos } = this.state;
    const screenshotUrl = hoveredUrl && screenshots[hoveredUrl];

    return (
      <article onMouseMove={this.handleMouseMove}>
        <header>
          <h1>
            <Link to="/">Alex Jenter</Link>
          </h1>
          <img className="portrait" src={image} alt="portrait of alex jenter" />
          {data.person.edges.map(x => (
            <FirstSection key={x.node.id} {...x.node} page="projects" />
          ))}
        </header>

        <main>
          <h2>Recent Projects</h2>
          <ul>
            {links.map(({ url, label }) => (
              <li key={url}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={e =>
                    this.setState({
                      hoveredUrl: url,
                      tooltipPos: { x: e.clientX, y: e.clientY }
                    })
                  }
                  onMouseLeave={() => this.setState({ hoveredUrl: null })}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </main>

        {screenshotUrl && (
          <div
            className="preview-tooltip"
            style={{ left: tooltipPos.x + 20, top: tooltipPos.y + 20 }}
          >
            <img src={screenshotUrl} alt="" />
          </div>
        )}
      </article>
    );
  }
}

export const query = graphql`
  query ProjectsQuery {
    person: allMarkdownRemark(
      filter: { frontmatter: { title: { eq: "Person" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            position
            title
            links {
              href
              text
            }
          }
          html
        }
      }
    }
  }
`;

export default ProjectsPage;
