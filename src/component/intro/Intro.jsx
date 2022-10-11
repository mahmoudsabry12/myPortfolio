import React from 'react'
import './Intro.css'

import Githup from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import vector1 from '../../img/Vector1.png';
import vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import glassesimoji from '../../img/glassesimoji.png';
import crown from '../../img/crown.png';
import thumbup from '../../img/thumbup.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
// import motion from 'framer-motion'
import {motion} from '../../../node_modules/framer-motion/dist/framer-motion';



const Intro = () => {
  const transition = {duration : 2 ,type: 'spring'}
  return (
    <div className='intro'>
        <div className="i-left">
            <div className="i-name">
                <span>Hy! I Am</span>
                <span>Mahmoud Sabry</span>
                <span>Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit.
                </span>
               </div>
               <button className=" button i-button">Hire Me</button>
               <div className="i-icons">
                <img src={Githup} alt="" />
                <img src={LinkedIn} alt="" />
                <img src={Instagram} alt="" />
               </div>
               
        </div>
        <div className="i-right">
            <img src={vector1} alt="" />
            <img src={vector2} alt="" />
            <img src={boy} alt="" />
            <motion.img
            initial = {{left:'-36%'}}
            whileInView = {{left:'-24%'}}
            transition = {transition}
            src={glassesimoji} alt="" />
        
        <motion.div 
          initial = {{left:'74%' ,top:'-4%'}}
          whileInView = {{left:'68%'}}
          transition = {transition}style={{top :'-4%' , left:'68%'}}>
          <FloatingDiv image={crown} txt1='Web' txt2='Developer'/>
        </motion.div>
        <motion.div 
        initial = {{left:'9rem' ,top:'18rem'}}
        whileInView = {{left:'1.1rem'}}
        transition = {transition}
        style={{top :'18.35rem' , left:'2.5%'}}>
          <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award!'/>
        </motion.div>
        <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
        <div className="blur" style={{
          background:'#C1F5FF' ,
          top:'17rem',
          hight:'11rem',
          width:'21rem'
          }}></div>
    </div>
    </div>
  )
}

export default Intro