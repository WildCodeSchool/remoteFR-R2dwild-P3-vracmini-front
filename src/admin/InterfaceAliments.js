import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'

import './InterfaceAliments.css'

const InterfaceAliments = () => {
  const [allAliments, setAllAliments] = useState('')
  useEffect(() => {
    axios.get('http://localhost:4242/api/aux_fourneaux/aliments').then(res => {
      setAllAliments(res.data)
    })
  }, [])

  return (
    <div className='interface-aliments'>
      <div className='interface-btn-container-aliments'>
        <div className='add-btn'>
          <Link to='/admin/aliments/add'>Ajouter un aliment</Link>
        </div>
        <div className='add-btn'>
          <Link to='/admin/aliments/add_categorie'>
            Modifier / Voir les catégories
          </Link>
        </div>
      </div>

      <div className='aliments-cards-container'>
        {allAliments ? (
          allAliments.length !== 0 ? (
            allAliments.map((alim, i) => (
              <div key={i} className='aliment-card'>
                <p key={i}>{alim.name}</p>
                <div>
                  <Link to={`/admin/aliments/${alim.id}`}>
                    Modifier / Supprimer
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>No aliments found</p>
          )
        ) : null}
      </div>
    </div>
  )
}

export default InterfaceAliments
