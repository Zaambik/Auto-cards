import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import styles from './Home.module.scss'
import imgMain from './img/card2.png'


const Home = ({setActivePage}) => {

  useEffect(() => {
    setActivePage('home')
  }, [])

  return (
    <div className={styles.container}>
      <div className={ styles.imgWrapper}>
        <Link to="/catalog"><img className={styles.image} src={imgMain} alt="Zaambik" /></Link>
      </div>
      <h2>Let's explore site!</h2>
      <div className={styles.text}>
          <p>
            Our website is the largest collection of art for connoisseurs of
            beauty. <br/>Do you like creativity? Let's go!
          </p>
          <Link to='/catalog'>Explore</Link>
      </div>
    </div>
  )
}

export default Home