import React from 'react'

const size = 60;
const length = size * Math.PI;
const padding = 50;
const strokeWidth = 30;
const gap = 2;

export default ({score, name}) => (
    <li className="skill-item">
        <svg height={size + padding} width={size + padding}>
        <circle
        cx={(size + padding) * 0.5}
        cy={(size + padding) * 0.5}
        r={size * 0.5}
        fill="transparent"
        stroke="coral"
        strokeWidth={strokeWidth}
        transform={`rotate(-90 ${(size + padding) * 0.5},${(size + padding) * 0.5})`}
        />
        <circle
        cx={(size + padding) * 0.5}
        cy={(size + padding) * 0.5}
        r={size * 0.5}
        fill="transparent"
        stroke="black"
        strokeWidth={strokeWidth}
        strokeDasharray={`${length * score / 10} ${length * (10 - score) / 10}`}
        transform={`rotate(-90 ${(size + padding) * 0.5},${(size + padding) * 0.5})`}
        />
        </svg>
        {name}
    </li>
)