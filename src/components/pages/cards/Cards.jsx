import { useState } from 'react'

import imgCard1 from './img/card1.png'
import imgCard2 from './img/card2.png'
import imgCard3 from './img/card3.png'
import styles from './Cards.module.scss'


const Cards = () => {

  return (
    <div className={ styles.container }>

      <div className="card">
        <img
          src={ imgCard1 }
          className="card-img-top"
          alt="INVALID CONTENT(Изображение не загружено)"
          width="400px"
        />
        <div className="card-body">
          <h3 className="card-title">
            Dark forest</h3>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum doloribus inventore eligendi in, ea, sapiente adipisci dolores earum soluta nam aperiam doloremque ratione, possimus labore ab quasi architecto fugiat necessitatibus.
          </p>
          <button href="#" className="btn btn-dark">Look this art</button>
        </div>
      </div>

      <div className="card">
        <img
          src={ imgCard2 }
          className="card-img-top"
          alt="INVALID CONTENT(Изображение не загружено)"
          width="400px"
        />
        <div className="card-body">
          <h3 className="card-title">Butterfly in night</h3>
          <p className="card-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptates modi, sed sit ullam ad excepturi harum perferendis consequuntur exercitationem eveniet, a animi deleniti est voluptatibus expedita natus? Vitae, pariatur.
          </p>
          <button href="#" className="btn btn-dark">Look this art</button>
        </div>
      </div>

      <div className="card">
        <img
          src={ imgCard3 }
          className="card-img-top"
          alt="INVALID CONTENT(Изображение не загружено)"
          width="400px"
        />
        <div className="card-body">
          <h3 className="card-title">Last adventure</h3>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eligendi omnis aliquid repudiandae delectus iure minima nostrum, tempore sed enim error reiciendis expedita vel praesentium fugiat! Veniam ullam accusamus minus!
          </p>
          <button href="#" className="btn btn-dark">Look this art</button>
        </div>
      </div>

    </div>
  )
};

export default Cards