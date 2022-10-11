import React from 'react'
import './Contact.css';
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const Contact = () => {
   
        const form = useRef();
        const [done ,setdone] = useState(false)

        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm
          ('service_r613a1d', 
          'template_5rn9mak', 
          form.current, 'OeGMwSnasdAI59Nmh')
            .then((result) => {
                console.log(result.text);
                setdone(true)
            }, (error) => {
                console.log(error.text);
            });
        };
  return (
    <div className='contact-form'>
        <div className="w-left">
            <div className="awesome">
            <span>Get in touch</span>
            <span>Contact me</span>
            <div className="blur s-blur1" style={{background:"#ABF1FF94", top:"15rem" ,left:"-15rem"}}></div>
            </div>
        </div>

        {/* rightside */}
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail} >
                <input  type= "text" name='user_name' className='user' placeholder='Name'/>
                <input  type= "email" name='user_email' className='user' placeholder='Email' />
                <textarea className='user' placeholder='Message' name='message'/>
                <input className='button' value="Send" type= "submit" />
                <span>{done && "Thanks for contanning  me"}</span>
            <div className="blur s-blur1"
            style={{background:"var(--purple)"}}>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Contact ;