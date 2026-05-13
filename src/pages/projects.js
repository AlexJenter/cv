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

const LERP = 0.1;
const FADE_MS = 250;

class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenshots: {},
      hoveredUrl: null,
      displayUrl: null,
      prevUrl: null,
      tooltipPos: { x: 0, y: 0 }
    };
    this.targetPos = { x: 0, y: 0 };
    this.easedPos = { x: 0, y: 0 };
    this.rafId = null;
    this.fadeTimer = null;
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.animateTooltip = this.animateTooltip.bind(this);
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
              this.setState(
                prev => ({
                  screenshots: {
                    ...prev.screenshots,
                    [url]: data.data.screenshot.url
                  }
                }),
                () => {
                  if (this.state.hoveredUrl === url) this.showScreenshot(url);
                }
              );
            }
          })
          .catch(() => {});
      });
    });
  }

  componentWillUnmount() {
    if (this.rafId) cancelAnimationFrame(this.rafId);
    if (this.fadeTimer) clearTimeout(this.fadeTimer);
  }

  showScreenshot(url) {
    const { displayUrl, screenshots } = this.state;
    if (!screenshots[url] || url === displayUrl) return;
    clearTimeout(this.fadeTimer);
    this.setState({ displayUrl: url, prevUrl: displayUrl });
    this.fadeTimer = setTimeout(
      () => this.setState({ prevUrl: null }),
      FADE_MS
    );
  }

  hideScreenshot() {
    const { displayUrl } = this.state;
    if (!displayUrl) return;
    clearTimeout(this.fadeTimer);
    this.setState({ displayUrl: null, prevUrl: displayUrl });
    this.fadeTimer = setTimeout(
      () => this.setState({ prevUrl: null }),
      FADE_MS
    );
  }

  animateTooltip() {
    this.easedPos = {
      x: this.easedPos.x + (this.targetPos.x - this.easedPos.x) * LERP,
      y: this.easedPos.y + (this.targetPos.y - this.easedPos.y) * LERP
    };

    this.setState({ tooltipPos: { ...this.easedPos } });

    const dx = Math.abs(this.targetPos.x - this.easedPos.x);
    const dy = Math.abs(this.targetPos.y - this.easedPos.y);

    if (dx > 0.1 || dy > 0.1) {
      this.rafId = requestAnimationFrame(this.animateTooltip);
    } else {
      this.rafId = null;
    }
  }

  handleMouseMove(e) {
    this.targetPos = { x: e.clientX + 20, y: e.clientY + 20 };
    if (this.state.hoveredUrl && !this.rafId) {
      this.rafId = requestAnimationFrame(this.animateTooltip);
    }
  }

  render() {
    const { data } = this.props;
    const { screenshots, displayUrl, prevUrl, tooltipPos } = this.state;

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
              <li key={url} className="recent-work-item">
                <a
                  className="recent-work-link"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={e => {
                    const x = e.clientX + 20;
                    const y = e.clientY + 20;
                    this.targetPos = { x, y };
                    this.easedPos = { x, y };
                    this.setState({ hoveredUrl: url, tooltipPos: { x, y } });
                    this.showScreenshot(url);
                  }}
                  onMouseLeave={() => {
                    if (this.rafId) {
                      cancelAnimationFrame(this.rafId);
                      this.rafId = null;
                    }
                    this.setState({ hoveredUrl: null });
                    this.hideScreenshot();
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </main>

        {(displayUrl || prevUrl) && (
          <div
            className="preview-tooltip"
            style={{ left: tooltipPos.x, top: tooltipPos.y }}
          >
            {prevUrl && (
              <img
                key={prevUrl}
                src={screenshots[prevUrl]}
                className="preview-tooltip__layer preview-tooltip__layer--out"
                alt=""
              />
            )}
            {displayUrl && (
              <img
                key={displayUrl}
                src={screenshots[displayUrl]}
                className="preview-tooltip__layer preview-tooltip__layer--in"
                alt=""
              />
            )}
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
