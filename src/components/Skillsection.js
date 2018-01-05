import React from 'react';
import Skillitem from './Skillitem';

export default () => (
  <section>
    <h2>Fähigkeiten</h2>
    <h3>Design</h3>
    <ul>
      <Skillitem score="7" name="Sketch.app"/>
      <Skillitem score="8" name="Adobe CC"/>
    </ul>
    <h3>Code</h3>
    <ul>
      <Skillitem score="8" name="HTML/CSS"/>
      <Skillitem score="7" name="Javascript"/>
      <Skillitem score="4" name="Bash"/>
    </ul>
  </section>
)