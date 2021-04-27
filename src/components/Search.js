import axios from 'axios'
import { Link } from 'react-router-dom'
import search from '../img/logoSearch3.png'
import { useState, useEffect } from 'react'

import './Search.css'

const Search = () => {
  const [ask, setAsk] = useState('')
  const [searchPodarts, setSearchPodarts] = useState([])
  const [searchAlims, setSearchAlims] = useState([])
  const [searchRecipes, setSearchRecipes] = useState([])
  const [resultContent, setResultContent] = useState('invisible-content')
  const onSearch = e => {
    setAsk(e.target.value)
  }
  const hideResult = () => {
    setResultContent('invisible-results')
  }
  const setResult = () => {
    if (ask !== '') {
      setResultContent('visible-results')
    }
  }
  useEffect(() => {
    ask !== '' ? setResult() : hideResult()
  }, [ask])
  useEffect(() => {
    axios.all[
      (axios
        .get(`http://localhost:4242/api/podcasts_articles/search?title=${ask}`)
        .then(res => setSearchPodarts(res.data)),
      axios
        .get(
          `http://localhost:4242/api/aux_fourneaux/aliments/search?name=${ask}`
        )
        .then(res => setSearchAlims(res.data)),
      axios
        .get(
          `http://localhost:4242/api/aux_fourneaux/recipes/search?title=${ask}`
        )
        .then(res => setSearchRecipes(res.data)))
    ]
  }, [ask])
  return (
    <div
      onMouseEnter={setResult}
      onMouseLeave={hideResult}
      className='container-search'
    >
      <div className='search-bar'>
        <input
          type='search'
          id='site-search'
          name='searchBar'
          placeholder='Rechercher'
          onChange={onSearch}
          className='input-search-bar'
        />
        <button id='btn-send'>
          <img src={search} alt='rechercher' className='logo-search' />
        </button>
      </div>
      <div className={resultContent}>
        {searchAlims[0] === undefined &&
        searchPodarts[0] === undefined &&
        searchRecipes[0] === undefined ? (
          <div>Pas de résultat</div>
        ) : (
          ''
        )}
        <div className='result'>
          {ask !== ''
            ? searchPodarts.map((podart, i) => {
                return (
                  <Link
                    key={i}
                    to={{
                      pathname: `/vracnco/podcasts_articles/${podart.id}`
                    }}
                    className='current-result'
                  >
                    {podart.title}
                    <span className='categorie-result'>
                      {podart.isPodcast !== 0 ? ',(podcast)' : ',(article)'}
                    </span>
                  </Link>
                )
              })
            : ''}
        </div>
        <div className='result'>
          {ask !== ''
            ? searchAlims.map((alim, i) => {
                return (
                  <Link
                    key={i}
                    to={{
                      pathname: `/aux_fourneaux/curieux_aliments/detail/${alim.id}`
                    }}
                    className='current-result'
                  >
                    {alim.name}
                    <span className='categorie-result'>,(aliments)</span>
                  </Link>
                )
              })
            : ''}
        </div>
        <div className='result'>
          {ask !== ''
            ? searchRecipes.map((recipe, i) => {
                return (
                  <Link
                    key={i}
                    to={{
                      pathname: `/aux_fourneaux/recipes/detail/${recipe.id}`
                    }}
                    className='current-result'
                  >
                    {recipe.title}
                    <span className='categorie-result'>,(recette)</span>
                  </Link>
                )
              })
            : ''}
        </div>
      </div>
    </div>
  )
}

export default Search
