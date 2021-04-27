import { useState } from 'react'
import './GuideQuantites.css'

const GuideQuantites = () => {
  const [imgIntro1] = useState(
    'https://drive.google.com/uc?id=1hxpf6JEKj1HuDwvcU8KuWcpvPIb-jIYL'
  )
  const [imgIntro2] = useState(
    'https://drive.google.com/uc?id=1ndHYw30vhjUbuP0xhd2GZIu0b9SdH5Ll'
  )
  const [imgIntro3] = useState(
    'https://drive.google.com/uc?id=1g2_pZ3qUhiIVPyG2tyOdkQwS434kLyTT'
  )
  const [imgIntro4] = useState(
    'https://drive.google.com/uc?id=1juHkrfVUmqSwLohuDg-u_5BADq94mSLh'
  )
  const [imgIntro5] = useState(
    'https://drive.google.com/uc?id=1lCPHl6VADn30TkYcbe9kQPAmUx-SGW8D'
  )
  const [imgIntro6] = useState(
    'https://drive.google.com/uc?id=1gnzqqAmrmNByyTgc8WY-bUtjq0cnZTFO'
  )
  const [imgQuantite1] = useState(
    'https://drive.google.com/uc?id=1y8X8Gk8hJSO33Iw8G4E2KdSfOwVyMxBk'
  )
  const [imgQuantites4] = useState(
    'https://drive.google.com/uc?id=1Sm_qv_bMqRc3Z1JFNs9dt4rVzgd-bUCc'
  )

  return (
    <div>
      <div className='pots-position'>
        <img
          className='pot-quantites-intro'
          src={imgIntro1}
          alt='texte intro quantités'
        />
        <img
          className='pot-quantites-intro'
          src={imgIntro2}
          alt='texte intro quantités'
        />
        <img
          className='pot-quantites-intro'
          src={imgIntro3}
          alt='texte intro quantités'
        />
      </div>
      <h2 className='text-intro-quantites'>
        Résultat, la quantité préparée est rarement la bonne...
      </h2>
      <div className='pots-position'>
        <img
          className='pot-quantites-intro'
          src={imgIntro4}
          alt='texte intro quantités'
        />
        <img
          className='pot-quantites-intro'
          src={imgIntro5}
          alt='texte intro quantités'
        />
        <img
          className='pot-quantites-intro'
          src={imgIntro6}
          alt='texte intro quantités'
        />
      </div>
      <div className='indications-global'>
        <div className='indications-quantites'>
          <img
            className='pot-x'
            src={imgQuantite1}
            alt='texte intro quantités'
          />
          <div className='name-aliments'>
            <p>Pâtes coquillette</p>
            <p>Lentille</p>
            <p>Quinoa</p>
            <p>Boulgour</p>
            <p>Pois cassés</p>
            <p>Semoule</p>
            <p>Riz</p>
            <p>Pois chiches</p>
          </div>
          <div className='indications-grammes'>
            <p>100 grs</p>
            <p>60 grs</p>
            <p>70 grs</p>
            <p>80 grs</p>
            <p>60 grs</p>
            <p>80 grs</p>
            <p>50 grs</p>
            <p>70 grs</p>
          </div>
        </div>
        <div className='indications-quantites'>
          <img
            className='pot-x'
            src={imgQuantites4}
            alt='texte intro quantités'
          />
          <div className='name-aliments'>
            <p>Pâtes coquillette</p>
            <p>Lentille</p>
            <p>Quinoa</p>
            <p>Boulgour</p>
            <p>Pois cassés</p>
            <p>Semoule</p>
            <p>Riz</p>
            <p>Pois chiches</p>
          </div>
          <div className='indications-grammes'>
            <p>500 grs</p>
            <p>400 grs</p>
            <p>200 grs</p>
            <p>180 grs</p>
            <p>250 grs</p>
            <p>200 grs</p>
            <p>200 grs</p>
            <p>500 grs</p>
          </div>
        </div>
      </div>
      <div className='infos-indications-global'>
        <div className='infos-indications'>
          Quantités indicatives conseillées pour un repas, en plat principal.
        </div>
        <div className='infos-indications invisible-info'>
          Quantités indicatives conseillées pour un repas, en plat principal.
        </div>
      </div>
    </div>
  )
}

export default GuideQuantites
