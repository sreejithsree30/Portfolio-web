import React from 'react';
import './index.css';
import profile from '../../assets/profilePhoto.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import resume from '../../assets/resume.pdf'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile} alt='' />
      <h1>
        <span>I'm Sreejith</span>,Frontend developer based in India
      </h1>
      <p>
        Front-end developers using React.js leverage its component-based architecture to build dynamic user interfaces. They utilize JSX for templating within JavaScript, manage state effectively with hooks like useState and useEffect, and implement routing with React Router for single-page applications.
      </p>
      <div className='hero-action'>
        <div className='hero-connect'>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Connect with me
          </AnchorLink>
        </div>
        <div className='hero-resume'>
          <a href={resume} download>Me Resume</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
