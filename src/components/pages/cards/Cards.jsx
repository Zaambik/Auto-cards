import { useState } from 'react'

import Card from './card/Card'

import imgCard1 from './img/card1.png'
import imgCard2 from './img/card2.png'
import imgCard3 from './img/card3.png'
import styles from './Cards.module.scss'


const Cards = ({setActivePage}) => {

  useEffect(() => {
    setActivePage('catalog')
  }, [])

  return (
    <div className={ styles.container }>

      <Card />
      
    </div>
  )
};

export default Cards