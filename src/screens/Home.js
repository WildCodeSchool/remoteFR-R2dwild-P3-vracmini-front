import React from 'react'
import { Link } from 'react-router-dom'

import imgEnVrac from '../img/histoireEnVrac.png'
import imgVracons from '../img/ensembleVracons.png'
import imgEshop from '../img/e-shop.png'
import imgCommunity from '../img/vracCommunity.png'
import imgVracNCo from '../img/vracNCo.png'
import imgFourneaux from '../img/auFourneaux.png'
import imgContact from '../img/contact.png'
import imgWoman from '../img/personnage1Reduit.png'

import './Home.css'

const Home = () => {
  return (
    <div id='home-page'>
      <div className='home home-left'>
        <div className='section-left histoire-vrac'>
          <img src={imgEnVrac} alt='links' />
        </div>
        <div className='section-left ensemble-vracons'>
          <img src={imgVracons} alt='links' />
        </div>
        <div className='section-left e-shop'>
          <img src={imgEshop} alt='links' />
        </div>
        <div className='section-left vrac-community'>
          <img src={imgCommunity} alt='links' />
        </div>
      </div>
      <div className='woman'>
        <img src={imgWoman} alt='femme' />
      </div>
      <div className='home home-right'>
        <div className='section-right vracn-co'>
          <Link to='/vracnco'>
            <img src={imgVracNCo} alt='links' />
          </Link>
        </div>
        <div className='section-right aux-fourneaux'>
          <Link to='/aux_fourneaux'>
            <img src={imgFourneaux} alt='links' />
          </Link>
        </div>
        <div className='section-right contact'>
          <Link to='/contact'>
            <img src={imgContact} alt='liens' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
