
import first_project from '../../assets/first_project.png'
import second_project from '../../assets/second_project.png'
import book from '../../assets/book.jpeg'
import React from 'react'

import './Projects.css'
const Projects = () => {
  return (
    <div id='work' className='projects'>
        <div className="projects-section">
            <h1>Projects</h1>
        </div>
        <div className='projects-section-details'>
            <div className="projects-details">
                <img src={first_project} alt="projects" />
                <p>NODE MCU HOME AUTOMATION</p>
            </div>
            <div className="projects-details">
                <img src={second_project} alt="projects" />
                <p>MOVIES SEARCH WEBSITE</p>
            </div>
            <div className="projects-details">
                <img src={book} alt="projects" />
                <p>BOOK RECOMMENDATION SYSTEM</p>
            </div>
        </div>
    </div>
  )
}

export default Projects
