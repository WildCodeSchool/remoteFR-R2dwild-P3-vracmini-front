/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'
import ApiKey from './ApiKey'
import { Editor } from '@tinymce/tinymce-react'

import './RecipesDetail.css'

const RecipesDetail = prevProps => {
  const [recipe, setRecipe] = useState('')
  const [name, setName] = useState('')
  const [step, setStep] = useState('')
  const [img, setImg] = useState('')
  const [cookTime, setCookTime] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [nbrPerson, setNbrPerson] = useState('')
  const [categorie, setCategorie] = useState(null)
  const [categorieList, setCategorieList] = useState('')
  const [tips, setTips] = useState('')
  const [deleted, setDeleted] = useState(false)

  useEffect(() => {
    axios
      .get('http://localhost:4242/api/aux_fourneaux/categories_recipes')
      .then(res => setCategorieList(res.data))
  }, [])

  // Function Tiny ///

  const handleEditorChangeStep = e => {
    setStep(e.target.getContent())
  }

  const handleEditorChangeIngredients = e => {
    setIngredients(e.target.getContent())
  }

  const handleEditorChangeTips = e => {
    setTips(e.target.getContent())
  }

  useEffect(() => {
    axios
      .get(
        `http://localhost:4242/api/aux_fourneaux/recipes/${prevProps.match.params.id}`
      )
      .then(res => setRecipe(res.data[0]))
      .then(setCategorie(recipe.categories_recipes_id))
  }, [])

  const deleteRecipe = () => {
    const validation = window.prompt('Tapez "Oui" pour confirmer')
    if (validation == 'Oui') {
      axios
        .delete(
          `http://localhost:4242/api/aux_fourneaux/recipes/${prevProps.match.params.id}`
        )
        .then(setDeleted(true))
    }
  }
  const updateImg = () => {
    const finalImg = {
      url_img: img
    }
    axios.put(
      `http://localhost:4242/api/aux_fourneaux/recipes/${prevProps.match.params.id}`,
      finalImg
    )
  }
  const updateName = () => {
    const finalName = {
      title: name
    }
    axios.put(
      `http://localhost:4242/api/aux_fourneaux/recipes/${prevProps.match.params.id}`,
      finalName
    )
  }
  const updateStep = () => {
    const finalStep = {
      step: step
    }
    axios.put(
      `http://localhost:4242/api/aux_fourneaux/recipes/${prevProps.match.params.id}`,
      finalStep
    )
  }
  const updateCookTime = () => {
    const finalCookTime = {
      cook_time: cookTime
    }
    axios.put(
      `http://localhost:4242/api/aux_fourneaux/recipes/${prevProps.match.params.id}`,
      finalCookTime
    )
  }
  const updateIngredients = () => {
    const finalIngredients = {
      ingredients: ingredients
    }
    axios.put(
      `http://localhost:4242/api/aux_fourneaux/recipes/${prevProps.match.params.id}`,
      finalIngredients
    )
  }
  const updateTips = () => {
    const finalTips = {
      tips: tips
    }
    axios.put(
      `http://localhost:4242/api/aux_fourneaux/recipes/${prevProps.match.params.id}`,
      finalTips
    )
  }
  const updateNbrPerson = () => {
    const finalNbrPerson = {
      person_nb: nbrPerson
    }
    axios.put(
      `http://localhost:4242/api/aux_fourneaux/recipes/${prevProps.match.params.id}`,
      finalNbrPerson
    )
  }

  const updateCategorie = () => {
    const finalCategorie = {
      categories_recipes_id: categorie
    }
    axios.put(
      `http://localhost:4242/api/aux_fourneaux/recipes/${prevProps.match.params.id}`,
      finalCategorie
    )
  }

  return (
    <div className='update-recipe-page'>
      <div className='update-recipe-container'>
        <h1>Modifier la recette </h1>
        <form onSubmit={updateName}>
          <label>Nom de la recette : </label>
          <input
            type='text'
            id='name-recipe-input'
            name='name'
            placeholder={recipe.title}
            onChange={event => setName(event.target.value)}
          />
          <button className='update-recipe-btn' type='submit'>
            Modifier
          </button>
        </form>
        <form onSubmit={updateImg}>
          <label>URL image : </label>
          <input
            type='text'
            id='name-recipe-input'
            name='name'
            placeholder={recipe.url_img}
            onChange={event => setImg(event.target.value)}
          />
          <button className='update-recipe-btn' type='submit'>
            Modifier
          </button>
        </form>
        <form onSubmit={updateStep}>
          <label>Etapes : </label>
          {recipe ? (
            <Editor
              apiKey={ApiKey}
              onChange={handleEditorChangeStep}
              id='tinyStep'
              initialValue={recipe.step}
              init={{
                height: 200,
                menubar: true,
                quickbars_image_toolbar:
                  'alignleft aligncenter alignright | rotateleft rotateright | imageoptions',
                plugins: [
                  'advlist autolink lists link image',
                  'charmap print preview anchor help',
                  'searchreplace visualblocks code',
                  'a_tinymce_plugin',
                  'insertdatetime media table paste wordcount'
                ],
                toolbar:
                  'undo redo | formatselect | bold italic | \
              alignleft aligncenter alignright | \
              bullist numlist outdent indent | help'
              }}
            />
          ) : null}
          <button className='update-recipe-btn' type='submit'>
            Modifier
          </button>
        </form>
        <form onSubmit={updateTips}>
          <label>Astuce : </label>
          {recipe ? (
            <Editor
              apiKey={ApiKey}
              onChange={handleEditorChangeTips}
              id='tinyTips'
              initialValue={recipe.tips !== null ? recipe.tips : ''}
              init={{
                height: 200,
                menubar: true,
                quickbars_image_toolbar:
                  'alignleft aligncenter alignright | rotateleft rotateright | imageoptions',
                plugins: [
                  'advlist autolink lists link image',
                  'charmap print preview anchor help',
                  'searchreplace visualblocks code',
                  'a_tinymce_plugin',
                  'insertdatetime media table paste wordcount'
                ],
                toolbar:
                  'undo redo | formatselect | bold italic | \
              alignleft aligncenter alignright | \
              bullist numlist outdent indent | help'
              }}
            />
          ) : null}
          <button className='update-recipe-btn' type='submit'>
            Modifier
          </button>
        </form>
        <form onSubmit={updateCookTime}>
          <label>Temps préparation : </label>
          <input
            type='text'
            id='cook-time-recipe-input'
            name='cook-time'
            placeholder={recipe.cook_time}
            onChange={event => setCookTime(event.target.value)}
          />
          <button className='update-recipe-btn' type='submit'>
            Modifier
          </button>
        </form>
        <form onSubmit={updateIngredients}>
          <label>Ingredients : </label>
          <div className='editor'>
            {recipe ? (
              <Editor
                apiKey={ApiKey}
                onChange={handleEditorChangeIngredients}
                initialValue={recipe.ingredients}
                id='tinyContent'
                init={{
                  height: 200,
                  menubar: true,
                  quickbars_image_toolbar:
                    'alignleft aligncenter alignright | rotateleft rotateright | imageoptions',
                  plugins: [
                    'advlist autolink lists link image',
                    'charmap print preview anchor help',
                    'searchreplace visualblocks code',
                    'a_tinymce_plugin',
                    'insertdatetime media table paste wordcount'
                  ],
                  toolbar:
                    'undo redo | formatselect | bold italic | \
              alignleft aligncenter alignright | \
              bullist numlist outdent indent | help'
                }}
              />
            ) : null}
          </div>
          <button className='update-recipe-btn' type='submit'>
            Modifier
          </button>
        </form>
        <form onSubmit={updateNbrPerson}>
          <label>Nbr de personnes : </label>
          <input
            type='text'
            id='ingredients-recipe-input'
            name='cook-time'
            placeholder={recipe.person_nb}
            onChange={event => setNbrPerson(event.target.value)}
          />
          <button className='update-recipe-btn' type='submit'>
            Modifier
          </button>
        </form>
        <form onSubmit={updateCategorie}>
          <label>Categorie de la recette : </label>
          {categorie !== null ? (
            <select
              onChange={event => {
                setCategorie(event.target.value)
              }}
            >
              <option selected>Modifier catégorie :</option>
              {categorieList
                ? categorieList.map((cat, i) => (
                    <option value={cat.id} key={i}>
                      {cat.name}
                    </option>
                  ))
                : null}
            </select>
          ) : null}

          <button className='update-recipe-btn' type='submit'>
            Modifier
          </button>
        </form>
        <div className='recipe-btn-container'>
          <button className='back-recipe-page'>
            <Link to='/admin/recipes'>Voir toute les recettes</Link>
          </button>
          {deleted ? (
            <button className='delete-recipe-btn'>
              <Link to='/admin/recipes'>Supprimer la recette</Link>
            </button>
          ) : (
            <button className='delete-recipe-btn' onClick={deleteRecipe}>
              Supprimer la recette
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default RecipesDetail
