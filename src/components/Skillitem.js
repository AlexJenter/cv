import React from 'react'

const size = 60
const length = size * Math.PI
const padding = 50
const strokeWidth = 30
const gap = 2

export default ({ score, name }) => (
  <li className="skill-item">
    {name}
    <div className="skill-item__indicator">
      <div className="skill-item__level" style={{ width: `${score}0%` }} />
    </div>
  </li>
)
