import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import styles from './Home.module.scss'
import imgL3 from './img/L3.png'


const Home = ({setActivePage}) => {

  useEffect(() => {
    setActivePage('home')
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <Link to="/catalog"><img className={styles.image} src={imgL3} alt="main image" /></Link>
      </div>
      <h2>Загляни в будущее!</h2>
      <div className={styles.text}>
          <p>
          Наш сайт представляет собой большую коллекцию современных моделей премиальных автомобилей. <br/> Ознакомьтесь с ними в нашем каталоге и изучите всю коллекцию!
          </p>
          <Link to='/catalog'>Ознакомиться</Link>
      </div>
    </div>
  )
}

export default Home