import React, { useState, useEffect } from 'react'
import './ListArticlePodcast.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function ListArticlePodcast() {
  const [vracnCo, setVracnCo] = useState([])
  const [categories, setCategories] = useState([])
  const [list, setList] = useState([])
  const [activeMediaType, setActiveMediaType] = useState(-1)
  const [activeIndex, setActiveIndex] = useState(-1)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    axios
      .get('http://localhost:4242/api/vracn_co')
      .then(res => setVracnCo(res.data[0]))
      .then(setIsLoading(true))
  }, [])

  useEffect(() => {
    axios
      .get('http://localhost:4242/api/categories_podcasts_articles')
      .then(res => setCategories(res.data))
  }, [])
  useEffect(() => {
    axios
      .get(`http://localhost:4242/api/podcasts_articles?id=${activeIndex}`)
      .then(res => setList(res.data))
  }, [activeIndex])
  console.log(activeIndex)
  console.log(list)
  const activePodcast = () => {
    setActiveMediaType(1)
  }
  const activeArticle = () => {
    setActiveMediaType(0)
  }
  const getCategories = () => {
    return categories.map((categorie, index) => (
      <div
        onClick={() => {
          setActiveIndex(index)
        }}
        key={index}
        className={
          activeIndex === index
            ? 'active-categorie-vracnco'
            : 'categorie-vracnco'
        }
      >
        {categorie.name}
      </div>
    ))
  }
  const getList = () => {
    return list
      .filter(e => e.isPodcast === activeMediaType)
      .map((e, index) => (
        <Link
          className='list-element'
          to={`/articles_podcasts/:${e.id}`}
          key={index}
        >
          <div>
            {/* <img className='elem-image'></img> */}
            <h1 className="title-element">{e.title}</h1>
            <p className="contenu-element">{e.content}</p>
          </div>
        </Link>
      ))
  }
  const accueil = () => {
    return (
      <div className='accueil-vracnco'>
        <div className='title-vracnco'>{vracnCo.title}</div>
        <img className='img-accueil' src={vracnCo.url_img}></img>
        <div className='texte-intro-vracnco'>{vracnCo.content}</div>
      </div>
    )
  }
  return (
    <div>
      {isLoading ? (
        <div className='listArticlePodcast'>
          {activeMediaType !== -1 ? '' : accueil()}
          <div className='mediatype'>
            <div
              onClick={activePodcast}
              className={activeMediaType === 1 ? 'active-podcast' : 'podcast'}
            >
              Podcasts
            </div>
            <div className='separate'></div>
            <div
              onClick={activeArticle}
              className={activeMediaType === 0 ? 'active-article' : 'article'}
            >
              Articles
            </div>
          </div>
          <div
            className={
              activeMediaType === -1
                ? 'inactive-categories-vracno'
                : 'categories-vracnco'
            }
          >
            {getCategories()}
          </div>
          {activeIndex !== -1 ? <div className='list'>{getList()}</div> : ''}
        </div>
      ) : (
        <div> En chargement </div>
      )}
    </div>
  )
}