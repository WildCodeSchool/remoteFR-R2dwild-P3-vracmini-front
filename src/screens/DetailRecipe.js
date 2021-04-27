import { useState, useEffect } from 'react'
import axios from 'axios'

import img from '../img/fork.png'
import img2 from '../img/hourglass.png'

import './DetailRecipe.css'

const DetailRecipe = prevProps => {
  const [step, setStep] = useState('')
  const [recipe, setRecipe] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [tips, setTips] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() =>
    axios
      .get(
        `http://localhost:4242/api/aux_fourneaux/recipes/${prevProps.match.params.id}`
      )
      .then(res => {
        setRecipe(res.data[0])
        setStep(res.data[0].step)
        setIngredients(res.data[0].ingredients)
        setTips(res.data[0].tips)
        setIsLoaded(true)
      })
  )
  return (
    <>
      {isLoaded ? (
        <div className='recipe-page'>
          <div className='recipe-header'>
            <div id='title-recipe-detail'>
              <h1 className='title-recipe'>{recipe.title}</h1>
              <div className='recipe-time-person'>
                <div>
                  <img className='recipe-icons' src={img} alt='fork' />
                  <p>{recipe.person_nb}</p>
                </div>
                <div>
                  <img className='recipe-icons' src={img2} alt='sablier' />
                  <p>{recipe.cook_time}</p>
                </div>
              </div>
            </div>
            <img
              className='recipe-img'
              src={recipe.url_img}
              alt={`image ${recipe.name}`}
            />
          </div>
          <div className='indication-ingredients-container'>
            <div className='indication-ingredients'>
              <div className='title-recipe-grad'>
                <h3 className='recipe-indication grad-yellow'>Il vous faut</h3>
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: ingredients }}
                className='recipe-ingredients'
              ></div>
            </div>
            <div className='indication-preparation'>
              <div className='title-recipe-grad'>
                <h3 className='recipe-indication grad-yellow'>
                  Marche à suivre
                </h3>
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: step }}
                className='recipe-step'
              ></div>
            </div>
          </div>
          <div className='recipe-astuces'>
            <div id='bar1'></div>
            <div className='title-recipe-grad'>
              <h3 className='recipe-indication tips-recipe grad-yellow'>
                Trucs et astuces
              </h3>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: tips }}
              className='recipe-tips'
            ></div>
          </div>
        </div>
      ) : (
        <p>En chargement</p>
      )}
    </>
  )
}

export default DetailRecipe
