import React from 'react';
import profile from '../../assets/profilePhoto.jpg';
import './About.css';

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile} alt="profile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Front-end developers using React.js specialize in building interactive web interfaces with JSX and component-based architecture. They manage state, integrate APIs, and optimize performance for seamless user experiences across devices</p>
            <p>Phone Number : +91 9626111480</p>
            <p>Email Id : <a href="mailto:sreejithss1480@gmail.com">sreejithss1480@gmail.com</a></p>
            <p>LinkedIn : <a href="https://www.linkedin.com/in/sreejith-s-s-76469922b/">http://www.linkedin.com/in/sreejith-s-s-76469922</a></p>
            <p>GitHub : <a href="https://github.com/sreejithsree30">https://github.com/sreejithsree30</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
