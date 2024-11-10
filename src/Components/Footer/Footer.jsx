import React from 'react'

// import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

import './Footer.css'

const Footer = () => {

  
  return (
    <div className='footer'>
        {/* <div className="footer-top">
            <div className="footer-top-left">
                <p>Front End developer</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' name='email' />
                </div>  
                <div className="footer-submit">Submit</div>
            </div>
        </div> */}
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">@2024 Sreejith S S. All rights reserved</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
