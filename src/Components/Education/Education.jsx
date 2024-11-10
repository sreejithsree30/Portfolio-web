
import React from 'react'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

import clg_icon from '../../assets/clg_icon.png'

import './Education.css'


const Education = () => {
  return (
    <div id='education' className='education'>
        <div className="eductaion-head">
            <h1>Education</h1>
        </div>
        <div className="education-section">
            <div className="education-details">
                <img src={clg_icon} alt="icon" />
                <h6>Bachelor of Degree</h6>
                <p>Electronics and Communicaion Engineering</p>
                <p>Rathinam technical Campus Coimbatore</p>
                <p className="cgpa">CGPA 7.8</p>
            </div>
            <div className="education-details">
                <img src={clg_icon} alt="icon" />
                <h6>Higher Secondary Certificate</h6>
                <p>Computer Science</p>
                <p>Yettacode Higher Secondary School Attoor</p>
                <p className="cgpa">CGPA 8.7</p>
            </div>
            <div className="education-details">
                <img src={clg_icon} alt="icon" />
                <h6>Secondary School Leaving Certificate</h6>
                <p>State Board</p>
                <p>Yettacode Higher Secondary School Attoor</p>
                <p className="cgpa">CGPA 8.5</p>
            </div>
        </div>
      
    </div>
  )
}

export default Education
