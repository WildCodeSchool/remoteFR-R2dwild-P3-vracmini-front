import React from 'react'

import fb from '../img/facebook.jpg'
import instagram from '../img/insta.jpg'
import twitter from '../img/twitter.jpg'

import './Logo.css'

const Logo = () => {
  const urlFacebook = 'http://www.facebook.com'
  const urlInstagram = ''
  const urlTwitter = ''

  return (
    <div className='logos'>
      <a href={urlFacebook} target='blank'>
        <img className='logo' src={fb} alt='facebook' />
      </a>
      <a href={urlTwitter} target='blank'>
        <img className='logo' src={instagram} alt='twitter' />
      </a>
      <a href={urlInstagram} target='blank'>
        <img className='logo' src={twitter} alt='instagram' />
      </a>
    </div>
  )
}

export default Logo
