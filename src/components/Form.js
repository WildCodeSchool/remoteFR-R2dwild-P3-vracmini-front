import React, { useState } from 'react'

import emailjs from 'emailjs-com'

import './Form.css'

const Form = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [objet, setObjet] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

    emailjs
      .send(
        'service_hnqbq6o',
        'template_1tlxhgf',
        {
          name,
          email,
          objet,
          message
        },
        'user_VPjZRh5QyEXSnsw9fTRds'
      )
      .then(() => {
        setName('')
        setEmail('')
        setObjet('')
        setMessage('')
      })
      .catch(
        () =>
          (document.querySelector('.form-message').innerHTML =
            "Une erreur s'est produite, veuillez réessayer.")
      )
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className='formulaire'>
          <input
            className='input-contact'
            type='text'
            value={name}
            placeholder='Name'
            onChange={event => setName(event.target.value)}
          />
          <input
            className='input-contact'
            type='email'
            value={email}
            placeholder='Email'
            onChange={event => setEmail(event.target.value)}
          />
          <input
            className='input-contact'
            type='text'
            value={objet}
            placeholder='Objet'
            onChange={event => setObjet(event.target.value)}
          />
          <textarea
            type='text'
            placeholder='Message'
            value={message}
            onChange={event => setMessage(event.target.value)}
          />
          <input className='button-send' type='submit' value='Envoyer' />
        </label>
        <div className='form-message'></div>
      </form>
    </div>
  )
}

export default Form
