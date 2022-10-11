import React from 'react'
import './Testimonials.css'
import {Swiper , SwiperSlide } from 'swiper/react'
import  ProfilePic1  from "../../img/profile1.jpg"
import  ProfilePic2  from "../../img/profile2.jpg"
import  ProfilePic3  from "../../img/profile3.jpg"
import  ProfilePic4  from "../../img/profile4.jpg"
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'

const Testimonials = () => {
   const  clints =[
        {
            img:ProfilePic1,
            review:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id maiores at provident quis ipsa doloribus eligendi neque itaque porro laudantium quam facilis architecto atque eos, ex magni. Cumque, nam corporis?"
        },
        {
            img:ProfilePic2,
            review:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id maiores at provident quis ipsa doloribus eligendi neque itaque porro laudantium quam facilis architecto atque eos, ex magni. Cumque, nam corporis?"
        },
        {
            img:ProfilePic3,
            review:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id maiores at provident quis ipsa doloribus eligendi neque itaque porro laudantium quam facilis architecto atque eos, ex magni. Cumque, nam corporis?"
        },
        {
            img:ProfilePic4,
            review:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id maiores at provident quis ipsa doloribus eligendi neque itaque porro laudantium quam facilis architecto atque eos, ex magni. Cumque, nam corporis?"
        }
       
    ]
  return (
    <div className='t-wrapper' id='Testmonials'>
        <div className="t-heading">
            <span>Clients always get</span>
            <span>  Exceptional Work </span>
            <span>  from me .....</span>
            <div className="blur t-blur1" style={{background:'var(--purple)' ,left:'1000px'}}></div>
            <div className="blur t-blur1" style={{background:"skyblue" ,left:'-40px'}}></div>
        </div>    
        {/* slider */}
        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination= {{clickable:true}}>
            {clints.map((client ,index) => {
                return (
                    <SwiperSlide key={index}>
                        <div className='testimonial'>
                        <img src={client.img} alt="" />
                        <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                )

            })}
        </Swiper>
    </div>
  )
}

export default Testimonials