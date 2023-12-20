import React from 'react'
import banner from "../assets/img/banner-felicesfiestas.jpg"
import "../assets/styles/style.css"

const Banner = () => {
  return (
    <div className='banner'>
        <div className='item-banner'>
            <img src={banner} />
            <div className='banner-text'>
                <h1>¡Comprá todo lo que necesitás para estas fiestas con OCA!</h1>
                <button className='btn-banner btn-blue'>Mirá todos los beneficios</button>
            </div>
        </div>
    </div>
  )
}

export default Banner