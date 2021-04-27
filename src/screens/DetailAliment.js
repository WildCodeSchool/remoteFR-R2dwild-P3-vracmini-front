import { useState, useEffect } from 'react'
import axios from 'axios'

import './DetailAliment.css'

const DetailAliment = prevProps => {
  const [content, setContent] = useState('')
  const [aliment, setAliment] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() =>
    axios
      .get(
        `http://localhost:4242/api/aux_fourneaux/aliments/${prevProps.match.params.id}`
      )
      .then(res => {
        setAliment(res.data[0])
        setContent(res.data[0].content)
        setIsLoaded(true)
      })
  )
  return (
    <>
      {isLoaded ? (
        <div className='aliment-page'>
          <div id='title-aliment-detail'>
            <div className='title-aliment-container'>
              <h2>{aliment.name}</h2>
              <h3>{aliment.title}</h3>
            </div>
            <div>
              <img
                src={aliment.url_img}
                className='aliment-img'
                alt={`image ${aliment.name}`}
              />
            </div>
          </div>
          <div id='content-aliment-detail'>
            <div
              id='tiny-content-aliment'
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
          </div>
        </div>
      ) : (
        <p>En chargement</p>
      )}
    </>
  )
}

export default DetailAliment
