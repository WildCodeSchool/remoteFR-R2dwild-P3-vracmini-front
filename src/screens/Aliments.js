import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Aliments.css'

const Aliments = prevProps => {
  const [categoryAlim, setCategoryAlim] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    axios
      .get(
        `http://localhost:4242/api/aux_fourneaux/aliments?categories_aliments_id=${prevProps.match.params.id}`
      )
      .then(res => setCategoryAlim(res.data))
      .then(() => setIsLoading(true))
  }, [])

  return (
    <div>
      {isLoading ? (
        <div className='list-aliments'>
          {categoryAlim.map((alim, i) => (
            <div key={i} className='card-ingredient'>
              <h2 className='name-ingredient'>{alim.name}</h2>
              <img
                src={alim.url_img}
                className='img-ingredient'
                alt={`image ${alim.name}`}
              />
              <h3>{alim.title}</h3>
              <div>
                <Link
                  className='see-ingredient'
                  key={i}
                  to={{
                    pathname: `/aux_fourneaux/curieux_aliments/detail/${alim.id}`
                  }}
                >
                  En Savoir Plus
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div> En chargement </div>
      )}
    </div>
  )
}

export default Aliments
