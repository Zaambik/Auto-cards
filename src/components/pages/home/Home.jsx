import { useState } from 'react'

import styles from './Home.module.scss'
import imgMain from './img/card2.png'


const Home = () => {
  return (
    <div className={styles.container}>
        <img className={styles.image} src={imgMain} alt="Zaambik" />
        <h2>Let's explore site!</h2>
        <div className={styles.text}>
            <p>
                Our website is the largest collection of art for connoisseurs of
                beauty. <br/>Do you like creativity? Let's go!
            </p>
            <a href='#'>Explore</a>
        </div>
    </div>
  )
}

export default Home