import React from 'react'

import './Header.scss'

const Header = () => {
  return (
    <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand p-0" href="index.html">
                    <img src="лого к сайту.png" alt="logo" width="50" />
                </a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="index.html">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" src="">Art cards</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            >
                            What else?
                            </a>
                            {/* <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="https://vk.com/zaambik">Developer</a></li>
                            <li><a className="dropdown-item" href="#">About us</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li>
                                <a className="dropdown-item" href="https://vk.com/bur_mister">Support</a>
                            </li>
                            </ul> */}
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                        Search
                    </button>
                    </form>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header;