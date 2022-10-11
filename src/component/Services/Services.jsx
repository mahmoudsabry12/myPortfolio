import React from 'react'
import Cards from '../Cards/Cards'
import './Services.css'
import Heartemoji from "../../img/heartemoji.png"
import glasses from "../../img/glasses.png"
import humble from "../../img/humble.png"
import Resume from "./resume.pdf"
 import {motion} from '../../../node_modules/framer-motion/dist/framer-motion'

const Services = () => {
  const transition = {duration : 1.5 ,type: 'spring'}
  return (
    <div className='services' id='Services'>
        {/* left side */}
        <div className="awesome">
        <span > My Awesome</span>
        <span > services</span>
        <spane> Lorem ipsum dolor sit amet consectetur,
            <br/>
             adipisicing elit. Ad officia excepturi nihil? 
             Harum provident
         </spane>
         <a href={Resume} download>
         <button className="button s-button">Download CV</button>
         </a>
    </div>
    {/* right side */}
    <div className="cards">
       
        <motion.div 
         whileInView = {{left:"14rem"}}
         initial = {{left:'25rem'}}
         transition = {transition} style={{left:'14rem'}}>
        <Cards 
        emoji={Heartemoji}
        heading= {'Design'}
        datail={"Figma,Sketch ,Photoshop"}
        />
        </motion.div>
        <motion.div 
        whileInView = {{left:"-4rem"}}
        initial = {{left:'-14rem'}}
        transition = {transition}
        style={{left:'-4rem', top:"12rem"}}>
        <Cards 
        emoji={glasses}
        heading= {'Design'}
        datail={"Figma,Sketch ,Photoshop"}
        />
        </motion.div>
        <motion.div
        whileInView = {{left:"12rem"}}
        initial = {{left:'20rem'}}
        transition = {transition}
        style={{left:'12rem', top:"19rem"}}>
        <Cards 
        emoji={humble}
        heading= {'Design'}
        datail={"Figma,Sketch ,Photoshop"}
        />
        </motion.div>
        <div className="blur s-blur2" style={{background:"var(--parpule)"}}></div>
    </div>
    </div>
  )
}

export default Services