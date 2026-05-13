import React from "react";
import Skillitem from "./Skillitem";

export default () => (
  <section className="section section--skills">
    <h2>Skills</h2>
    <div className="section__content">
      <div>
        <h3>Code</h3>
        <ul>
          <Skillitem score="8" name="HTML/CSS" />
          <Skillitem score="9" name="Javascript" />
          <Skillitem score="7" name="React JS" />
          <Skillitem score="8" name="Vue JS / Nuxt JS" />
          <Skillitem score="7" name="PHP" />
        </ul>
      </div>
      <div>
        <h3>Design</h3>
        <ul>
          <Skillitem score="9" name="Blender" />
          <Skillitem score="8" name="Three JS" />
          <Skillitem score="8" name="HTML Canvas" />
        </ul>
      </div>
    </div>
  </section>
);
