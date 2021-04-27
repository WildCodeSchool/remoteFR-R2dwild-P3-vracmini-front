/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Editor } from '@tinymce/tinymce-react'

import axios from 'axios'

import ApiKey from './ApiKey'

import './AddAliments.css'

const AddAliments = () => {
  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [text, setText] = useState(null)
  const [urlImg, setUrlImg] = useState('')
  const [categorie, setCategorie] = useState('')
  const [categorieList, setCategorieList] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:4242/api/aux_fourneaux/categories_aliments')
      .then(res => setCategorieList(res.data))
  }, [])

  const handleEditorChange = e => {
    setText(e.target.getContent())
  }

  const send = () => {
    const result = {
      name: name,
      title: title,
      content: text,
      url_img: urlImg,
      categories_aliments_id: categorie
    }
    axios.post('http://localhost:4242/api/aux_fourneaux/aliments', result)
  }

  return (
    <div className='interface-add-aliments'>
      <form onSubmit={send}>
        <h1 id='title-add-recipe'>Ajouter un aliment</h1>
        <label>Nom aliment :</label>
        <input
          type='text'
          id='name-categorie-input'
          placeholder='Pois chiche'
          name='name'
          onChange={event => setName(event.target.value)}
        />
        <label>Titre :</label>
        <input
          type='text'
          id='title-input'
          placeholder='Meet Substitute'
          name='title'
          onChange={event => setTitle(event.target.value)}
        />
        <label>URL image :</label>
        <input
          type='text'
          id='urlimg-input'
          placeholder='http..'
          name='urlimg'
          onChange={event => setUrlImg(event.target.value)}
        />
        <label>Contenu :</label>
        <div className='editor'>
          <Editor
            apiKey={ApiKey}
            onChange={handleEditorChange}
            id='thisContent'
            init={{
              height: 500,
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
        </div>
        <label>Categorie de l'aliment : </label>
        <select
          className='categorie-aliment-select'
          onChange={event => setCategorie(Number(event.target.value))}
        >
          <option selected>Choisir une catégorie</option>
          {categorieList
            ? categorieList.map((cat, i) => (
                <option value={cat.id} key={i}>
                  {cat.name}
                </option>
              ))
            : null}
        </select>
        <div className='add-aliment-btn-container'>
          <button className='send-button' type='submit'>
            Ajouter aliment
          </button>
          <button className='send-button'>
            <Link to='/admin/aliments'>Voir toute les recettes</Link>
          </button>
        </div>
      </form>
    </div>
  )
}
export default AddAliments
