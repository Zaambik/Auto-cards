import { useState } from 'react'

import imgCard1 from './img/card1.png'
import imgCard2 from './img/card2.png'
import imgCard3 from './img/card3.png'

const Cards = () => {

  return (
    <div>
      <div className="container my-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
        <div className="col">       
          <div className="card">
           <div className="scale-img">
            <img
              src={ imgCard1 }
              className="card-img-top"
              alt="INVALID CONTENT(Изображение не загружено)"
            />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Dark forest</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum doloribus inventore eligendi in, ea, sapiente adipisci dolores earum soluta nam aperiam doloremque ratione, possimus labore ab quasi architecto fugiat necessitatibus.
              </p>
              <button href="#" className="btn btn-dark">Look this art</button>
            </div>
          </div>
        </div>
        <div className="col">       
          <div className="card">
            <img
              src={ imgCard2 }
              className="card-img-top"
              alt="INVALID CONTENT(Изображение не загружено)"
            />
            <div className="card-body">
              <h5 className="card-title">Butterfly in night</h5>
              <p className="card-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptates modi, sed sit ullam ad excepturi harum perferendis consequuntur exercitationem eveniet, a animi deleniti est voluptatibus expedita natus? Vitae, pariatur.
              </p>
              <button href="#" className="btn btn-dark">Look this art</button>
            </div>
          </div>
        </div>
        <div className="col">       
          <div className="card">
            <img
              src={ imgCard3 }
              className="card-img-top"
              alt="INVALID CONTENT(Изображение не загружено)"
            />
            <div className="card-body">
              <h5 className="card-title">Last adventure</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eligendi omnis aliquid repudiandae delectus iure minima nostrum, tempore sed enim error reiciendis expedita vel praesentium fugiat! Veniam ullam accusamus minus!
              </p>
              <button href="#" className="btn btn-dark">Look this art</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
};

export default Cards