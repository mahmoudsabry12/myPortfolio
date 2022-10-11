import React from 'react'
import './Footer.css'
import Wave from "..//../img/wave.png"
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'

const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width :" 100%"}} />
        <div className="f-content">
            <span className='name'> Engineer : Mahmoud Sabry</span>
            <div className="f-icons">
              <a href='https://www.instagram.com/mahmoudsabry1235/'  target="blank">
                <Insta  color='white'  size='3rem'/>
                </a>
                <a href='https://web.facebook.com/profile.php?id=100022112833534' target="blank">
                <Facebook  color='white'  size='3rem'/>
                </a>
                <a href='https://github.com/mahmoudsabry12' target="blank">
                <Github color='white'  size='3rem'/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer