import { useState, useEffect } from 'react'
import axios from 'axios'
import ApiKey from './ApiKey'
import { Editor } from '@tinymce/tinymce-react'
import './PageFourneauxAdmin.css'

const PageFourneauxAdmin = () => {
  const [fourneaux, setFourneaux] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')

  useEffect(() => {
    axios.get('http://localhost:4242/api/aux_fourneaux').then(response => {
      setFourneaux(response.data[0])
    })
  }, [])

  const handleChangeTitle = event => {
    event.preventDefault()
    const finalTitle = {
      title: title
    }
    axios.put(
      `http://localhost:4242/api/aux_fourneaux/${fourneaux.id}`,
      finalTitle
    )
  }
  const handleEditorIntro = e => {
    setContent(e.target.getContent())
  }
  const handleChangeContent = event => {
    event.preventDefault()
    const finalContent = {
      content: content
    }
    axios.put(
      `http://localhost:4242/api/aux_fourneaux/${fourneaux.id}`,
      finalContent
    )
  }
  const handleChangeImg = event => {
    event.preventDefault()
    const finalImg = {
      url_img: imgUrl
    }
    axios.put(
      `http://localhost:4242/api/aux_fourneaux/${fourneaux.id}`,
      finalImg
    )
  }

  return (
    <div className='amdin-fourneaux-page'>
      <div className='admin-fourneaux-container'>
        <form onSubmit={handleChangeTitle}>
          <label>Titre de la Page : </label>
          <input
            type='text'
            id='title-page-input'
            name='title'
            placeholder={fourneaux.title}
            onChange={event => setTitle(event.target.value)}
          />
          <button type='submit'>Modifier</button>
        </form>
        <form onSubmit={handleChangeImg}>
          <label>Url Image : </label>
          <input
            type='text'
            id='img-url-input'
            name='url_img'
            placeholder={fourneaux.url_img}
            onChange={event => setImgUrl(event.target.value)}
          />
          <button type='submit'>Modifier</button>
        </form>
        <form onSubmit={handleChangeContent}>
          <label>Bloc Introduction : </label>
          {fourneaux ? (
            <Editor
              apiKey={ApiKey}
              onChange={handleEditorIntro}
              id='tinyIntro'
              initialValue={fourneaux.content}
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
          <button type='submit'>Modifier</button>
        </form>
      </div>
    </div>
  )
}

export default PageFourneauxAdmin
