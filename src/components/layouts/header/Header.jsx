import { useState } from 'react'

import styles from './Header.module.scss'
import imgLogo from '../../../assets/img/logo.png'


const Header = () => {
  return (
    <header>
        <div className={styles.container}>
            <div>
                <a className="logo" href="index.html">
                    <img src={imgLogo} alt="logo" width="75" />
                </a>
                <nav> 
                    <ul className={styles.navbar}>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Art cards</a>
                        </li>
                        <li>
                            <a href="#">What else?</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="search">
                <form className="" role="search">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <button className={styles.button} type="submit">
                        Search
                    </button>
                </form>
            </div>
        </div>
    </header>
  )
}

export default Header