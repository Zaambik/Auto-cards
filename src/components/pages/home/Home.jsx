import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import styles from './Home.module.scss'
import imgMain from './img/L3.jpeg'


const Home = ({setActivePage}) => {

  useEffect(() => {
    setActivePage('home')
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <Link to="/catalog"><img className={styles.image} src={imgMain} alt="Zaambik" /></Link>
      </div>
      <h2>Let's explore future!</h2>
      <div className={styles.text}>
          <p>
          Our site is a large collection of modern models of BMW cars. <br/> Check them out in card format and explore the entire collection!
          </p>
          <Link to='/catalog'>Explore</Link>
      </div>
    </div>
  )
}

export default Home