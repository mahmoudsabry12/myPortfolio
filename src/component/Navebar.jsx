import React from 'react'
import './Navebar.css'
import Toggle from './Toggle/Toggle'
import { Link } from 'react-scroll'

const Navebar = () => {
  return (
    <div className="n-wrapper" id='Navebar'>
        <div className="n-left">
            <div className="n-name">Mahmoud</div>
            <Toggle />
        </div>
        <div className="n-right">
            <div className="u-list">
                <ul>
                  <Link spy={true} to= 'Navebar' smooth={true} activeClass="activeClass">
                <li>Home</li>
                </Link>
                <Link spy={true} to= 'Services' smooth={true} >
                <li>Services</li>
                </Link>
                <Link spy={true} to= 'Experience' smooth={true} >
                <li>Experience</li>
                </Link>
                <Link spy={true} to= 'Portfolio' smooth={true}>
                <li>Portfolio</li>
                </Link>
                <Link spy={true} to= 'Testmonials' smooth={true} >
                <li>Testmonials</li></Link>
                </ul>
                </div>
                <button className="button n-button">
                    Contact 
                </button>

            
        </div>
    </div>
  )
}

export default Navebar