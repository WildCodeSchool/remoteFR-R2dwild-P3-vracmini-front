import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import './InterfaceArticles.css'

const InterfacePodcasts = () => {
  const [listPodcasts, setListPodcasts] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:4242/api/podcasts_articles/podcast')
      .then(res => {
        setListPodcasts(res.data)
      })
  }, [])

  return (
    <div className='interface-podart-container'>
      <div className='interface-podart-btn-container'>
        <div className='add-btn'>
          <Link to='/admin/podcasts/add'>Ajouter un podcast</Link>
        </div>
        <div className='add-btn'>
          <Link to='/admin/podcasts/categorie'>
            Modifier / Voir les categories
          </Link>
        </div>
      </div>
      <div className='podart-cards-container'>
        {listPodcasts ? (
          listPodcasts.map((art, i) => {
            return (
              <div key={i} className='podart-card'>
                <h1>{art.title}</h1>
                <Link to={`/admin/podcasts/${art.id}`}>
                  <button>Modifier / Supprimer</button>
                </Link>
              </div>
            )
          })
        ) : (
          <p>Aucun podcast trouvé</p>
        )}
      </div>
    </div>
  )
}

export default InterfacePodcasts
