import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import './InterfaceArticles.css'

const InterfaceArticles = () => {
  const [listArticles, setListArticles] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:4242/api/podcasts_articles/article')
      .then(res => {
        setListArticles(res.data)
      })
  }, [])

  return (
    <div className='interface-podart-container'>
      <div className='interface-podart-btn-container'>
        <div className='add-btn'>
          <Link to='/admin/articles/add'>Ajouter un article</Link>
        </div>
        <div className='add-btn'>
          <Link to='/admin/articles/categorie'>
            Modifier / Voir les categories
          </Link>
        </div>
      </div>
      <div className='podart-cards-container'>
        {listArticles ? (
          listArticles.map((art, i) => {
            return (
              <div key={i} className='podart-card'>
                <h1>{art.title}</h1>
                <Link to={`/admin/articles/${art.id}`}>
                  <button>Modifier / Supprimer</button>
                </Link>
              </div>
            )
          })
        ) : (
          <p>Aucun article trouvé</p>
        )}
      </div>
    </div>
  )
}

export default InterfaceArticles
