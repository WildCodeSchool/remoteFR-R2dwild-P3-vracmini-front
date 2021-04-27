import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'

import './AuxFourneaux.css'

const AuxFourneaux = () => {
  const [showAliments, setShowAliments] = useState(false)
  const [showRecipes, setShowRecipes] = useState(false)
  const [auxFourneaux, setAuxFourneaux] = useState([])
  const [categoriesAlim, setCategoriesAlim] = useState([])
  const [content, setContent] = useState('')
  const [img, setImg] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)
  const [isLoaded2, setIsLoaded2] = useState(false)
  const [isLoaded3, setIsLoaded3] = useState(false)
  const [categorieRecipe, setCategorieRecipe] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:4242/api/aux_fourneaux/')
      .then(res => {
        setAuxFourneaux(res.data)
        setContent(res.data[0].content)
        setImg(res.data[0].url_img)
      })
      .then(() => setIsLoaded(true))
  }, [])

  useEffect(() => {
    axios
      .get('http://localhost:4242/api/aux_fourneaux/categories_aliments')

      .then(res => {
        setCategoriesAlim(res.data)
      })
      .then(() => setIsLoaded2(true))
  }, [])

  useEffect(() => {
    axios
      .get('http://localhost:4242/api/aux_fourneaux/categories_recipes')
      .then(res => {
        setCategorieRecipe(res.data)
      })
      .then(() => setIsLoaded3(true))
  }, [])

  return (
    <div>
      {isLoaded ? (
        <div className='all-fourneaux'>
          <div className='left-side-menu'>
            <h1 className='title-fourneaux'>{auxFourneaux[0].title}</h1>
            <div className='categories-fourneaux'>
              <div className='curieux-aliments'>
                <span className={showAliments ? 'arrow-down' : 'arrow-right'}>
                  &gt;
                </span>
                <p onClick={() => setShowAliments(!showAliments)}>
                  Les curieux aliments
                </p>
              </div>
              {isLoaded2 ? (
                <div
                  className={
                    showAliments ? 'visible-aliments' : 'invisible-aliments'
                  }
                >
                  {categoriesAlim.map((cat, i) => (
                    <Link
                      key={i}
                      to={{
                        pathname: `/aux_fourneaux/curieux_aliments/${cat.id}`
                      }}
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <div> En chargement </div>
              )}
              <div className='curieux-aliments'>
                <span className={showRecipes ? 'arrow-down' : 'arrow-right'}>
                  &gt;
                </span>
                <p onClick={() => setShowRecipes(!showRecipes)}>Les recettes</p>
              </div>
              {isLoaded3 ? (
                <div
                  className={
                    showRecipes ? 'visible-aliments' : 'invisible-aliments'
                  }
                >
                  {categorieRecipe.map((cat, i) => (
                    <Link
                      key={i}
                      to={{
                        pathname: `/aux_fourneaux/recipes/${cat.id}`
                      }}
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <div> En chargement </div>
              )}
              <div className='curieux-aliments'>
                <span className='arrow-right'>&gt;</span>
                <Link to='/aux_fourneaux/guide_quantites'>
                  Guide des quantités
                </Link>
              </div>
              <div className='curieux-aliments'>
                <span className='arrow-right'>&gt;</span>
                <Link
                  className='tableau-conversion'
                  to='/aux_fourneaux/tableau_de_conversion'
                >
                  Guide des conversions
                </Link>
              </div>
            </div>
          </div>
          <div className='contain-character'>
            <img className='img-fourneaux' src={img} alt='coupe de légumes' />
          </div>
          <div className='right-side-content'>
            {isLoaded ? (
              <div
                dangerouslySetInnerHTML={{ __html: content }}
                className='content-fourneaux'
              ></div>
            ) : null}
          </div>
          <div className='right-content-character-mini'>
            <div className='contain-character-mini'>
              <img className='img-fourneaux' src={img} alt='coupe de légumes' />
            </div>
            <div className='right-side-content-mini'>
              {isLoaded ? (
                <div
                  dangerouslySetInnerHTML={{ __html: content }}
                  className='content-fourneaux'
                ></div>
              ) : null}
            </div>
          </div>
        </div>
      ) : (
        <div> En chargement </div>
      )}
    </div>
  )
}

export default AuxFourneaux
