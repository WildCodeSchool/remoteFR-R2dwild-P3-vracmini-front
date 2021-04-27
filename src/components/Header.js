import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Search from './Search'
import SearchMiniLogo from './SearchMiniLogo'
import SearchMiniPage from './SearchMiniPage'
import LogoBurger from './LogoBurger'
import BurgerMenu from './BurgerMenu'

import user from '../img/userGreen.png'

import './Header.css'

const Header = () => {
  const [openBurger, setOpenBurger] = useState(false)
  const [burgerContent, setBurgerContent] = useState('hide')
  const [openSearchMini, setOpenSearchMini] = useState(false)
  const [searchPage, setSearchPage] = useState('none')

  const handleChangeBurger = () => {
    if (openBurger === true) {
      setBurgerContent('visible-menu')
    } else if (burgerContent === 'hide') {
      return
    } else {
      setBurgerContent('invisible-menu')
    }
  }

  useEffect(() => {
    handleChangeBurger()
  }, [openBurger])

  const handleClickBurger = () => {
    setOpenBurger(!openBurger)
    setOpenSearchMini(false)
  }
  const handleClickSearchMini = () => {
    setOpenSearchMini(!openSearchMini)
  }

  const handleChangeSearchMini = () => {
    if (openSearchMini === true) {
      setSearchPage('visible-page')
    } else if (searchPage === 'none') {
      return
    } else {
      setSearchPage('invisible-page')
    }
  }
  useEffect(() => {
    handleChangeSearchMini()
  }, [openSearchMini])

  return (
    <div className='header'>
      <div className='menu-container'>
        <SearchMiniPage
          handleClickSearchMini={handleClickSearchMini}
          searchPage={searchPage}
        />
        <BurgerMenu
          handleClickBurger={handleClickBurger}
          burgerContent={burgerContent}
        />
      </div>
      <div className='header-content'>
        <div className='search-content'>
          <div className='search-mini'>
            <SearchMiniLogo handleClickSearchMini={handleClickSearchMini} />
          </div>
          <div className='search-full-bar'>
            <Search />
          </div>
        </div>
        <div className='title-website'>
          <h1>
            <Link to='/'>
              <span className='yellow'>m</span>ini
              <span className='yellow'>m</span>
              al
            </Link>
          </h1>
        </div>
        <div className='content-burger-user'>
          <div id={openSearchMini ? null : 'logo-menu-burger'}>
            <LogoBurger
              openBurger={openBurger}
              handleClickBurger={handleClickBurger}
            />
          </div>
          <Link to='/login'>
            <img src={user} alt='connexion user' className='user-logo' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
