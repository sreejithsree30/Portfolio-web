
import React from 'react'

import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import node from '../../assets/node.png'
import sql_server from '../../assets/sql_server.png'

import "./Skills.css";


const Skills = () => {
  return (
    <div id="skills" className="skills">
        <div className="skills-title">
            <h1>Skills</h1>
        </div>
        <div className="skills-sections">
            <div className="skills-section-cart">
                <img src={html} alt="html" />
                <p>html</p>
            </div>
            <div className="skills-section-cart">
                <img src={css} alt="html" />
                <p>css</p>
            </div>
            <div className="skills-section-cart">
                <img src={js} alt="html" />
                <p>javascript</p>
            </div>
            <div className="skills-section-cart">
                <img src={react} alt="html" />
                <p>react js</p>
            </div>
            <div className="skills-section-cart">
                <img src={node} alt="html" />
                <p>node</p>
            </div>
            <div className="skills-section-cart">
                <img src={sql_server} alt="html" />
                <p>sql</p>
            </div>
        </div>
      
    </div>
  )
}

export default Skills