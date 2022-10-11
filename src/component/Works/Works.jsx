import React from 'react'
import './Works.css'
import upwork from '../../img/Upwork.png'
import facebook from '../../img/Facebook.png'
import fiverr from '../../img/fiverr.png'
import amazon from '../../img/amazon.png'
import shopify from '../../img/Shopify.png'
import {motion} from '../../../node_modules/framer-motion/dist/framer-motion'


const Works = () => {
  return (
    <div className='works'>
        <div className="awesome">
        <span > Works for All these</span>
        <span > Brands & Client</span>
        <spane> Lorem ipsum dolor sit amet consectetur,
            <br/>
             adipisicing elit. Ad officia excepturi nihil? 
             Harum provident
             <br/>
             adipisicing elit. Ad officia excepturi nihil? 
         </spane>
         <button className="button s-button">Hire Me </button>
         <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
         <div className="blur" style={{background:"#97D2EC" ,left:'-17rem', top:'-46rem'}}></div>
    </div>
    {/* right side */}
    <div className="w-right">
        <motion.div
        initial = {{rotate: 45}}
        whileInView = {{rotate:0}} 
        viewport= {{margin:'-40px'}}
        transition = {{duration: 2.5 , type :'spring'}}
        className="w-mainCircle">
            <div className="w-secCircle">
                <img src= {upwork} alt="" />
            </div>
            <div className="w-secCircle">
                <img src= {facebook} alt="" />
            </div>
            <div className="w-secCircle">
                <img src= {fiverr} alt="" />
            </div>
            <div className="w-secCircle">
                <img src= {amazon} alt="" />
            </div>
            <div className="w-secCircle">
                <img src= {shopify} alt="" />
            </div>
            <div className="backCircle blueCircle"></div>
            <div className="backCircle yellowCircle"></div>
            

        </motion.div>
    </div>
    </div>
  )
}

export default Works