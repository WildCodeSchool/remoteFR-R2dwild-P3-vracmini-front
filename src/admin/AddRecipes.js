import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import ApiKey from './ApiKey'
import { Editor } from '@tinymce/tinymce-react'

import './AddRecipes.css'

const InterfaceAddRecipes = () => {
  const [name, setName] = useState('')
  const [step, setStep] = useState('')
  const [img, setImg] = useState('')
  const [cookTime, setCookTime] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [tips, setTips] = useState('')
  const [nbrPerson, setNbrPerson] = useState('')
  const [categorie, setCategorie] = useState('')
  const [categorieList, setCategorieList] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:4242/api/aux_fourneaux/categories_recipes')
      .then(res => setCategorieList(res.data))
  }, [])

  const addRecipe = () => {
    const finalRecipe = {
      title: name,
      step: step,
      url_img: img,
      cook_time: cookTime,
      ingredients: ingredients,
      tips: tips,
      person_nb: nbrPerson,
      categories_recipes_id: categorie
    }
    axios.post('http://localhost:4242/api/aux_fourneaux/recipes', finalRecipe)
  }
  // FUNCTION TINY
  const handleEditorChangeStep = e => {
    setStep(e.target.getContent())
  }
  const handleEditorChangeIngredients = e => {
    setIngredients(e.target.getContent())
  }
  const handleEditorChangeTips = e => {
    setTips(e.target.getContent())
  }
  return (
    <div id='add-recipes-page'>
      <form onSubmit={addRecipe} id='add-recipes'>
        <h2 id='title-add-recipes'>Ajouter une recette</h2>
        <label>Nom de la recette : </label>
        <input
          type='text'
          id='name-recipe-input'
          name='name'
          onChange={event => setName(event.target.value)}
        />
        <label>Url Image :</label>
        <input
          type='text'
          id='name-recipe-input'
          name='name'
          onChange={event => setImg(event.target.value)}
        />
        <label>Etapes : </label>
        <Editor
          apiKey={ApiKey}
          onChange={handleEditorChangeStep}
          id='tinyStep'
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
        <label>Astuce :</label>
        <Editor
          apiKey={ApiKey}
          onChange={handleEditorChangeTips}
          id='tinyTips'
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
        <label>Temps préparation : </label>
        <input
          type='text'
          id='cook-time-recipe-input'
          name='cook-time'
          onChange={event => setCookTime(event.target.value)}
        />
        <label>Ingredients : </label>
        <Editor
          apiKey={ApiKey}
          onChange={handleEditorChangeIngredients}
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
        <label>Nbr de personnes : </label>
        <input
          type='text'
          id='ingredients-recipe-input'
          name='cook-time'
          onChange={event => setNbrPerson(event.target.value)}
        />
        <label>Categorie de la recette : </label>
        <select onChange={event => setCategorie(Number(event.target.value))}>
          <option selected>Choisir une catégorie</option>
          {categorieList
            ? categorieList.map((cat, i) => (
                <option value={cat.id} key={i}>
                  {cat.name}
                </option>
              ))
            : null}
        </select>
        <div className='btn-container'>
          <button id='btn-add-recipe' type='submit'>
            Ajouter la recette
          </button>
          <button>
            <Link to='/admin/recipes'>Voir toute les recettes</Link>
          </button>
        </div>
      </form>
    </div>
  )
}

export default InterfaceAddRecipes
