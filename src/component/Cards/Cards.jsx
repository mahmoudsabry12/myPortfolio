import React from 'react'
import './Cards.css'

const Cards = ({emoji , heading , datail}) => {
  return (
    <div className='card'>
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{datail}</span>
        <button className="c-button">Learn More</button>
    </div>
  )
}

export default Cards