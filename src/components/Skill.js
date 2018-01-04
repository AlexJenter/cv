import React from 'react'

export default ({score, name}) => (
    <li
        className="skill-item"
        style={{
            background: `linear-gradient(90deg, lightblue, lightblue ${score * 10}%, black ${score * 10}%, black)`
        }}
    >
    {name}
    </li>
)