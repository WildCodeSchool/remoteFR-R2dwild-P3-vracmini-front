/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'
import ApiKey from './ApiKey'
import { Editor } from '@tinymce/tinymce-react'

import './ArticlesDetail.css'

const ArticlesDetail = prevProps => {
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')
  const [urlImg, setUrlImg] = useState('')
  const [article, setArticle] = useState({})
  const [categorieList, setCategorieList] = useState([])
  const [deleted, setDeleted] = useState(false)
  const [artCategories, setArtCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios.all[
      (axios
        .get(
          `http://localhost:4242/api/podcasts_articles/${prevProps.match.params.id}`
        )
        .then(res => {
          setArticle(res.data)
        }),
      axios
        .get('http://localhost:4242/api/categories_podcasts_articles/')
        .then(res => {
          setCategorieList(res.data)
        }),
      axios
        .get(
          `http://localhost:4242/api/podcasts_articles/join/${prevProps.match.params.id}`
        )
        .then(res => {
          setArtCategories(res.data)
        })
        .then(() => setIsLoading(false)))
    ]
  }, [])
  const handleEditorChangeContent = e => {
    setContent(e.target.getContent())
  }
  const deleteArticle = () => {
    const validation = window.prompt('Tapez "Oui" pour confirmer')
    if (validation == 'Oui') {
      axios
        .delete(
          `http://localhost:4242/api/podcasts_articles/${prevProps.match.params.id}`
        )
        .then(setDeleted(true))
    }
  }
  const updateArticle = arg => {
    switch (arg) {
      case 'btn-modify-title':
        axios.put(
          `http://localhost:4242/api/podcasts_articles/${prevProps.match.params.id}`,
          { title: title }
        )
        break
      case 'btn-modify-content':
        axios.put(
          `http://localhost:4242/api/podcasts_articles/${prevProps.match.params.id}`,
          { content: content }
        )
        break
      case 'btn-modify-img':
        axios.put(
          `http://localhost:4242/api/podcasts_articles/${prevProps.match.params.id}`,
          { url_img: urlImg }
        )
        break
    }
  }
  return (
    <div className='update-podart-page'>
      <div className='update-podart-container'>
        <h1>Modifier l'article</h1>
        <label>Title :</label>
        <input
          type='text'
          id='title-input'
          name='title'
          defaultValue={article.title}
          onChange={event => setTitle(event.target.value)}
        />
        <button
          className='update-podart-btn'
          id='btn-modify-title'
          onClick={() => updateArticle('btn-modify-title')}
        >
          Modifer le titre
        </button>
        <label>Url Image :</label>
        <input
          type='text'
          id='urlimg-input'
          defaultValue={article.url_img}
          name='urlimg'
          onChange={event => setUrlImg(event.target.value)}
        />
        <button
          id='btn-modify-img'
          className='update-podart-btn'
          onClick={() => updateArticle('btn-modify-img')}
        >
          Modifer l'image
        </button>
        <label>Contenu :</label>
        {article.content ? (
          <Editor
            apiKey={ApiKey}
            initialValue={`${article.content}`}
            onChange={handleEditorChangeContent}
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
        <button
          className='update-podart-btn'
          id='btn-modify-content'
          onClick={() => updateArticle('btn-modify-content')}
        >
          Modifer le contenu
        </button>
        <label>Categories de l'article :</label>
        <div className='check-categories'>
          {isLoading ? (
            <div> ...loading </div>
          ) : categorieList ? (
            categorieList.map((cat, i) => {
              return (
                <div key={i}>
                  <input
                    id={cat.name}
                    defaultChecked={
                      artCategories.some(
                        elem => elem.categories_podcasts_articles_id === cat.id
                      )
                        ? true
                        : false
                    }
                    className='categorie-checkbox'
                    type='checkbox'
                    onChange={e => {
                      e.target.checked
                        ? axios.post(
                            'http://localhost:4242/api/podcasts_articles/join',
                            {
                              categories_podcasts_articles_id: cat.id,
                              podcasts_articles_id: prevProps.match.params.id
                            }
                          )
                        : axios.delete(
                            `http://localhost:4242/api/podcasts_articles/join/${prevProps.match.params.id}/${cat.id}`
                          )
                    }}
                  />
                  <label htmlFor={cat.name}>{cat.name}</label>
                </div>
              )
            })
          ) : null}
        </div>
        <div className='update-podart-btn-container'>
          <button className='return-page-admin'>
            <Link to='/admin/articles'>Voir tout les articles</Link>
          </button>
          {deleted ? (
            <Link className='delete-podart-btn' to='/admin/articles'>
              Supprimer l'article
            </Link>
          ) : (
            <button onClick={deleteArticle} className='delete-podart-btn'>
              Supprimer l'article
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ArticlesDetail
