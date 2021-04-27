import { useState, useEffect } from 'react'

import axios from 'axios'

import Form from '../components/Form.js'
import Logo from '../components/Logo.js'
import Woman from '../img/personnage.jpg'

import './Contact.css'

const Contact = () => {
  return (
    <div className='container-contact'>
      <div>
        <img className='img-woman' src={Woman} />
      </div>
      <div className='container-intro-contact'>
        <h1>Contact</h1>
        <p className='intro-contact'>
          Une question? C’est par ici! <br></br>Contactez nous via le formulaire
          ou via les réseaux sociaux en message privé.<br></br>Nous ferons le
          maximum pour y répondre dans les meilleurs délais.<br></br>A bientôt!
        </p>
        <Logo />
        <Form />
      </div>
    </div>
  )
}

export default Contact
