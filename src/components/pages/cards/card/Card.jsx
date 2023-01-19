import { useState } from 'react'

import imgCard1 from '../img/card1.png'
import imgCard2 from '../img/card2.png'
import imgCard3 from '../img/card3.png'
import styles from './Card.module.scss'


const Cards = ({img, h, text}) => {

  return (
    <div className={ styles.card }>
        <img
            src={ imgCard1 }
            alt="INVALID CONTENT(Изображение не загружено)"
            width="400px"
        />
        <div className={ styles.cardText }>
            <h3 className="card-title">
            Dark forest</h3>
            <p className="card-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum doloribus inventore eligendi in, ea, sapiente adipisci dolores earum soluta nam aperiam doloremque ratione, possimus labore ab quasi architecto fugiat necessitatibus.
            </p>
            <button href="#" className="btn btn-dark">Look this art</button>
        </div>
    </div>
  )
};

export default Cards