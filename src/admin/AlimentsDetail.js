/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'
import ApiKey from './ApiKey'
import { Editor } from '@tinymce/tinymce-react'

import './AlimentsDetail.css'

const AlimentsDetail = prevProps => {
  const [aliment, setAliment] = useState('')
  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [urlImg, setUrlImg] = useState('')
  const [categorie, setCategorie] = useState('')
  const [categorieList, setCategorieList] = useState('')
  const [deleted, setDeleted] = useState(false)

  useEffect(() => {
    axios
      .get('http://localhost:4242/api/aux_fourneaux/categories_aliments')
      .then(res => setCategorieList(res.data))
  }, [])

  // Function Tiny ///
  const handleEditorChangeContent = e => {
    setContent(e.target.getContent())
  }

  useEffect(() => {
    axios
      .get(
        `http://localhost:4242/api/aux_fourneaux/aliments/${prevProps.match.params.id}`
      )
      .then(res => setAliment(res.data[0]))
  }, [])

  const updateName = () => {
    const finalName = {
      name: name
    }
    axios.put(
      `http://localhost:4242/api/aux_fourneaux/aliments/${prevProps.match.params.id}`,
      finalName
    )
  }
  const updateTitle = () => {
    const finalTitle = {
      title: title
    }
    axios.put(
      `http://localhost:4242/api/aux_fourneaux/aliments/${prevProps.match.params.id}`,
      finalTitle
    )
  }
  const updateContent = () => {
    const finalContent = {
      content: content
    }
    axios.put(
      `http://localhost:4242/api/aux_fourneaux/aliments/${prevProps.match.params.id}`,
      finalContent
    )
  }
  const updateUrlImg = () => {
    const finalUrlImg = {
      url_img: urlImg
    }
    axios.put(
      `http://localhost:4242/api/aux_fourneaux/aliments/${prevProps.match.params.id}`,
      finalUrlImg
    )
  }

  const updateCategorie = () => {
    const finalCategorie = {
      categories_aliments_id: categorie
    }
    axios.put(
      `http://localhost:4242/api/aux_fourneaux/aliments/${prevProps.match.params.id}`,
      finalCategorie
    )
  }
  const deleteAliment = () => {
    const validation = window.prompt('Tapez "Oui" pour confirmer')
    if (validation == 'Oui') {
      axios
        .delete(
          `http://localhost:4242/api/aux_fourneaux/aliments/${prevProps.match.params.id}`
        )
        .then(setDeleted(true))
    }
  }
  return (
    <div className='update-aliment-page'>
      <div className='update-aliment-container'>
        <h1>Modifier l'aliment</h1>
        <form onSubmit={updateName}>
          <label>Nom Aliment</label>
          <input
            type='text'
            id='name-aliment'
            name='name-aliment'
            placeholder={aliment.name}
            onChange={event => setName(event.target.value)}
          />
          <button className='update-btn-aliment' type='submit'>
            Modifier
          </button>
        </form>
        <form onSubmit={updateTitle}>
          <label>Sous-titre</label>
          <input
            type='text'
            id='title-aliment'
            name='title-aliment'
            placeholder={aliment.title}
            onChange={event => setTitle(event.target.value)}
          />
          <button className='update-btn-aliment' type='submit'>
            Modifier
          </button>
        </form>
        <form onSubmit={updateContent}>
          <label>Contenu : </label>
          <div className='editor'>
            {aliment ? (
              <Editor
                apiKey={ApiKey}
                onChange={handleEditorChangeContent}
                initialValue={aliment.content}
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
          <button className='update-btn-aliment' type='submit'>
            Modifier
          </button>
        </form>
        <form onSubmit={updateUrlImg}>
          <label>Url Image </label>
          <input
            type='text'
            id='url-img-aliment-input'
            name='url-img'
            placeholder={aliment.url_img}
            onChange={event => setUrlImg(event.target.value)}
          />
          <button className='update-btn-aliment' type='submit'>
            Modifier
          </button>
        </form>
        <form onSubmit={updateCategorie}>
          <label>Categorie de l'aliment : </label>
          <select onChange={event => setCategorie(event.target.value)}>
            <option selected>Modifier catégorie :</option>
            {categorieList
              ? categorieList.map((cat, i) => (
                  <option value={cat.id} key={i}>
                    {cat.name}
                  </option>
                ))
              : null}
          </select>
          <button className='update-btn-aliment' type='submit'>
            Modifier
          </button>
        </form>
        <div className='btn-container'>
          <button className='back-page-aliment'>
            <Link to='/admin/aliments'>Voir tout les aliments</Link>
          </button>
          {deleted ? (
            <button className='delete-aliment-btn'>
              <Link to='/admin/aliments'>Supprimer l'aliment</Link>
            </button>
          ) : (
            <button className='delete-aliment-btn' onClick={deleteAliment}>
              Supprimer l'aliment
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default AlimentsDetail
