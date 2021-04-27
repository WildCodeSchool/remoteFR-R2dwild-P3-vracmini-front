import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import './AddCategorieArticle.css'

const AddCategoriePodcast = () => {
  const [listCategorie, setListCategorie] = useState('')
  const [id, setId] = useState('')
  const [newName, setNewName] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:4242/api/categories_podcasts_articles')
      .then(res => setListCategorie(res.data))
  }, [])

  return (
    <div className='categorie-article-page'>
      <button className='back-page-admin'>
        <Link to='/admin/podcasts'>Voir tout les podcasts</Link>
      </button>
      <div className='all-categories-container'>
        {listCategorie.length !== 0 ? (
          listCategorie.map((cat, i) => (
            <div className='categorie-card-article' key={i}>
              <input
                defaultValue={cat.name}
                key={i}
                onMouseEnter={() => {
                  setId(cat.id)
                }}
                onChange={e => setNewName(e.target.value)}
              />
              <button
                onClick={() => {
                  let finalName = {
                    name: newName
                  }
                  axios.put(
                    `http://localhost:4242/api/categories_podcasts_articles/${id}`,
                    finalName
                  )
                }}
              >
                Modifier
              </button>
            </div>
          ))
        ) : (
          <p>Categories not found</p>
        )}
      </div>
    </div>
  )
}

export default AddCategoriePodcast
