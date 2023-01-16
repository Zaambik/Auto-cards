import { useState } from 'react'

export const Home = () => {
    const [count, setCount] = useState(0)
  
    return (
<div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand p-0" href="index.html">
          <img src="лого к сайту.png" alt="logo" width="50" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="index.html"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" src="">Art cards</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                What else?
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="https://vk.com/zaambik">Developer</a></li>
                <li><a class="dropdown-item" href="#">About us</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="https://vk.com/bur_mister">Support</a>
                </li>
              </ul>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
    <div class="container text-center my-5">
      <div class="row">
        <div class="col-lg-6 col-md-8 mx-auto">
          <img class="rounded-img" src="карточка3.png" alt="Zaambik" />
          <h1 class="fw-light">Let's explore site!</h1>
          <div main class="main-page">
            <br/>
            <p class="lead text-mudet">
              <b>Our website is the largest collection of art for connoisseurs of
              beauty. Do you like creativity? Let's go!</b>
            </p>
            <br/>
            <a
              href="favorite image.html"
              target="_blank"
              class="btn btn-secondary container px-3 "
            >
              ~ Explore ~
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
    )
  };
  
  