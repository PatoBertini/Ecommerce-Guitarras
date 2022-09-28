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
        <h3>Where we found love in lyrics and music. Check our first virtual shop and buy the best products in store.</h3>
      </div>
    </div>
  )
}

export default Banner
