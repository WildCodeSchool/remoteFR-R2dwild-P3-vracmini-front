import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const AddCategorieAliment = () => {
  const [categorie, setCategorie] = useState('')
  const [id, setId] = useState('')
  const [newName, setNewName] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:4242/api/aux_fourneaux/categories_aliments')
      .then(res => setCategorie(res.data))
  }, [])
  return (
    <div className='categorie-page-admin'>
      <button className='back-page-admin'>
        <Link to='/admin/aliments'>Voir tout les aliments</Link>
      </button>
      <div className='all-categories-container'>
        {categorie.length !== 0 ? (
          categorie.map((cat, i) => (
            <div className='categories-card-aliments-recipes' key={i}>
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
                    `http://localhost:4242/api/aux_fourneaux/categories_aliments/${id}`,
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

export default AddCategorieAliment
