import React from 'react'
import './css/contact.css'
import headphoneBoy from "../../images/headphoneBoy.png"
import facebook from "../../images/facebook.png"
import instagram from '../../images/instagram.png'
import twitter from "../../images/twitter.png"
import youtube from "../../images/youtube.png"

const ContactUs = () => {
    const handleSubmit=()=>{

    }
  return (
    <div className='contact-us'>
        <h1 className='contact-heading'>Have any Queries or Just say hello!</h1>
        <br />
        <div className="contact-form-sec">
            <div>
                <img src={headphoneBoy} alt="" className='headphone-boy' />
            </div>
            <div className='form-container'>
                <form action="https://formsubmit.co/abhishekrawat9956088862@gmail.com" method="POST" onClick={handleSubmit} className="contact-form">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required placeholder="Your name.."/>
                    </div>
                    

                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required placeholder="Your email" />
                    </div>
                    
                    <div>
                        <label htmlFor="message">Subject</label>
                        <textarea id="message" name="message" required placeholder="Write something.." style={ {height:"200px"}}></textarea>
                    </div>
                    

                    <input type="submit" value="Submit" className='contact-btn-submit'/>
                </form>
                
            </div>
        </div>
        <div className="social-links">
                    <div><img src={facebook} alt="" onClick={()=>{alert("links not added yet")}} /></div>
                    <div><img src={instagram} alt="" onClick={()=>{alert("links not added yet")}} /></div>
                    <div><img src={youtube} alt="" onClick={()=>{alert("links not added yet")}} /></div>
                    <div><img src={twitter} alt="" onClick={()=>{alert("links not added yet")}} /></div>
                </div>
    </div>
  )
}

export default ContactUs;