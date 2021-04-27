import Search from './Search'

import './SearchMiniPage.css'

const SearchMiniPage = prevProps => {
  return (
    <div id='search-page' className={prevProps.searchPage}>
      <div id='search-page-content'>
        <div id='close-search-page' onClick={prevProps.handleClickSearchMini}>
          <div className='close-bar1'></div>
          <div className='close-bar2'></div>
        </div>
        <Search />
      </div>
    </div>
  )
}

export default SearchMiniPage
