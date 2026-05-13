import React from "react";
import Link from "gatsby-link";

import Skillsection from "../components/Skillsection";
import FirstSection from "../components/FirstSection";
import Section from "../components/Section";

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

const ProjectsPage = ({ data }) => (
  <article>
    <header>
      <h1>
        <Link to="/">Alex Jenter</Link>
      </h1>
      <img className="portrait" src={image} alt="portrait of alex jenter" />
      {data.person.edges.map(x => (
        <FirstSection key={x.node.id} {...x.node} />
      ))}
    </header>

    <main>
      <h2>Recent Projects</h2>
      <ul>
        {links.map(({ url, label }) => (
          <li>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </main>
  </article>
);

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
