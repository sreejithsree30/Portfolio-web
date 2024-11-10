import React from 'react'
import './Contacts.css'

import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location from '../../assets/location_icon.svg'

const Contacts = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c3bbce2d-8c11-4617-8196-0285f4ccd336");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
      console.log("Success", res);
    }
  };


  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in Touch</h1>
      </div>
      <div className="contact-secton">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>For any queries related to frontend development, feel free to contact me. I'm available to assist with front-end technologies.Let's collaborate and create exceptional user experiences together!</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p><a href="sreejithss1480@gmail.com">sreejithss1480@gmail.com</a></p>
            </div>
            <div className="contact-detail"> 
              <img src={call_icon} alt="" /> <p>+91 9626111480</p>
            </div>
            <div className="contact-detail">
              <img src={location} alt="" /> <p>Kanyakumari</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} action="" className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter Your Name' name='name' />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='Enter Your Email' name='email' />
          <label htmlFor="">Write your message here</label>
          <textarea name="message" id="" rows='8' placeholder='Enter your message'></textarea>
          <button type='submit' className="contact-submit">Submit Now</button>
        </form>
      </div>



    </div>
      
  )
}

export default Contacts
