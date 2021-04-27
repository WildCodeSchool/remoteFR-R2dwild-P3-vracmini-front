import { useHistory } from 'react-router-dom'

import axios from 'axios'

import './Login.css'

import img from '../img/mail.png'
import padlock from '../img/padlock.png'

const Login = () => {
  let history = useHistory()
  const onSubmit = e => {
    e.preventDefault()
    console.log('onSubmit')
    axios
      .post('http://localhost:4242/auth/signin', {
        password: e.target.password.value,
        email: e.target.email.value
      })
      .then(res => {
        console.log(res)
        history.push('/admin')
        localStorage.setItem('token', res.headers['x-access-token'])
        console.log('token', localStorage.getItem('token'))
      })
  }

  return (
    <div className='page-login-container'>
      <div className='contentGlob'>
        <h1 className='title-connexion grad-yellow'>Connexion</h1>
        <div className='login'>
          <form className='form-connexion' onSubmit={onSubmit}>
            <div className='mail-container'>
              <label htmlFor='email'>
                <img className='connexion-icons' src={img} alt='mail' />
              </label>
              <input className='input-connexion' type='email' name='email' />
            </div>
            <div className='password-container'>
              <label htmlFor='password'>
                <img className='connexion-icons' src={padlock} alt='padlock' />
              </label>
              <input
                className='input-connexion'
                type='password'
                name='password'
              />
            </div>
            <button className='button-connexion' type='submit'>
              Se connecter
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
