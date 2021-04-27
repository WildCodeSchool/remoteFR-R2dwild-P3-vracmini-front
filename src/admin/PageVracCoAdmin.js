import { useState, useEffect } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import ApiKey from './ApiKey'

import axios from 'axios'

import './PageVracCoAdmin.css'

const PageVracCoAdmin = () => {
  const [vracCo, setVracCo] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')

  useEffect(() => {
    axios.get('http://localhost:4242/api/vracn_co').then(response => {
      setVracCo(response.data[0])
    })
  }, [])

  const handleChangeTitle = () => {
    const finalTitle = {
      title: title
    }
    axios.put(`http://localhost:4242/api/vracn_co/${vracCo.id}`, finalTitle)
  }

  const handleEditorIntro = e => {
    setContent(e.target.getContent())
  }

  const handleChangeContent = () => {
    const finalContent = {
      content: content
    }
    axios.put(`http://localhost:4242/api/vracn_co/${vracCo.id}`, finalContent)
  }

  const handleChangeImg = () => {
    const finalImg = {
      url_img: imgUrl
    }
    axios.put(`http://localhost:4242/api/vracn_co/${vracCo.id}`, finalImg)
  }

  return (
    <div className='vrac-co-page'>
      <div className='vrac-co-container'>
        <form onSubmit={handleChangeTitle}>
          <label>Titre de la Page : </label>
          <input
            type='text'
            id='title-page-input'
            name='title'
            placeholder={vracCo.title}
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
            placeholder={vracCo.url_img}
            onChange={event => setImgUrl(event.target.value)}
          />
          <button type='submit'>Modifier</button>
        </form>
        <form onSubmit={handleChangeContent}>
          <label>Bloc Introduction : </label>
          {vracCo ? (
            <Editor
              apiKey={ApiKey}
              onChange={handleEditorIntro}
              id='tinyIntro'
              initialValue={vracCo.content}
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

export default PageVracCoAdmin
