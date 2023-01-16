import { useState } from 'react'

import imgCard2 from './img/card2.png'

const Home = () => {
  
  return (
    <div>
      <div className="container text-center my-5">
        <div className="row">
          <div className="col-lg-6 col-md-8 mx-auto">
            <img className="rounded-img" src={imgCard2} alt="Zaambik" />
            <h1 className="fw-light">Let's explore site!</h1>
            <div main className="main-page">
              <br/>
              <p className="lead text-mudet">
                <b>Our website is the largest collection of art for connoisseurs of
                beauty. Do you like creativity? Let's go!</b>
              </p>
              <br/>
              <a
                href="favorite image.html"
                target="_blank"
                className="btn btn-secondary container px-3 "
              >
                ~ Explore ~
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
  
export default Home