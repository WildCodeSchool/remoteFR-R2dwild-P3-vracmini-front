import ApiKey from './ApiKey'
import axios from 'axios'
import { Editor } from '@tinymce/tinymce-react'
import { useState } from 'react'

import './AddAliments.css'

const AddAliments = () => {
  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [text, setText] = useState(null)
  const [urlImg, setUrlImg] = useState('')
  const [categorie, setCategorie] = useState('')
  const [categorieList, setCategorieList] = useState('')

  const handleEditorChange = e => {
    setText(e.target.getContent())
  }

  const send = () => {
    const result = {
      name: name,
      title: title,
      content: text,
      url_img: urlImg,
      categories_aliments_id: 10
    }
    axios.post('http://localhost:4242/api/aux_fourneaux/aliments', result)
  }

  return (
    <div className='interface-add-aliments'>
      <div>
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
        <button className='send-button' onClick={() => send()}>
          Envoyer
        </button>
      </div>
      <div className='final'></div>
    </div>
  )
}
export default AddAliments