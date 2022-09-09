import React from 'react'
import '../Home.css'
import fotoBanner from '../../../assets/images/mango-1.jpeg'

const Banner = () => {
  return (
    <div className='bannerConteiner'>
      <div className='bannerImgContainer'>
        <img src={fotoBanner} alt="" />
      </div>
      <div className='bannerTextContent'>
        <h1>Chords of angel's</h1>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem similique earum, reiciendis accusamus ad ab.</h3>
      </div>
    </div>
  )
}

export default Banner
