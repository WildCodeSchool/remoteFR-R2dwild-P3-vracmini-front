import search from '../img/logoSearch3.png'

import './SearchMiniLogo.css'

const SearchMiniLogo = prevProps => {
  return (
    <div className='search-mini'>
      <button onClick={prevProps.handleClickSearchMini} id='btn-send-mini'>
        <img src={search} alt='rechercher' className='logo-search' />
      </button>
    </div>
  )
}

export default SearchMiniLogo
