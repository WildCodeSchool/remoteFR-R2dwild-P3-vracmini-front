import React from 'react'
import { Link } from 'react-router-dom'

import img from '../img/vracNCo.png'
import img2 from '../img/auFourneaux.png'
import img3 from '../img/contact.png'

import './HomeRight.css'

const HomeRight = () => {
  return (
    <div className='home home right'>
      <div className='section-right vracn-co'>
        <img src={img} id='vrac' alt='liens' />
      </div>
      <div className='section-right aux-fourneaux'>
        <Link to='/aux_fourneaux'>
          <img src={img2} id='fourneaux' alt='liens' />
        </Link>
      </div>
      <div className='section-right contact'>
        <Link to='/contact'>
          <img src={img3} id='contact' alt='liens' />
        </Link>
      </div>
    </div>
  )
}

export default HomeRight
