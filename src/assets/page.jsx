import { useState } from 'react'


export const Page = () => {
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
              <a class="nav-link" aria-current="page" href="index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="favorite image.html"
                >Art cards</a
              >
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
    <div class="container my-5">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
        <div class="col">       
          <div class="card">
           <div class="scale-img">
            <img
              src="карточка1.png"
              class="card-img-top"
              alt="INVALID CONTENT(Изображение не загружено)"
            />
            </div>
            <div class="card-body">
              <h5 class="card-title">
                Dark forest</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum doloribus inventore eligendi in, ea, sapiente adipisci dolores earum soluta nam aperiam doloremque ratione, possimus labore ab quasi architecto fugiat necessitatibus.
              </p>
              <button href="#" class="btn btn-dark">Look this art</button>
            </div>
          </div>
        </div>
        <div class="col">       
          <div class="card">
            <img
              src="карточка4.png"
              class="card-img-top"
              alt="INVALID CONTENT(Изображение не загружено)"
            />
            <div class="card-body">
              <h5 class="card-title">Butterfly in night</h5>
              <p class="card-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptates modi, sed sit ullam ad excepturi harum perferendis consequuntur exercitationem eveniet, a animi deleniti est voluptatibus expedita natus? Vitae, pariatur.
              </p>
              <button href="#" class="btn btn-dark">Look this art</button>
            </div>
          </div>
        </div>
        <div class="col">       
          <div class="card">
            <img
              src="карточка5.png"
              class="card-img-top"
              alt="INVALID CONTENT(Изображение не загружено)"
            />
            <div class="card-body">
              <h5 class="card-title">Last adventure</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eligendi omnis aliquid repudiandae delectus iure minima nostrum, tempore sed enim error reiciendis expedita vel praesentium fugiat! Veniam ullam accusamus minus!
              </p>
              <button href="#" class="btn btn-dark">Look this art</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
};

