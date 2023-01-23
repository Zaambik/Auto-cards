import { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './Header.module.scss'
import imgLogo from '../../../assets/img/logo.png'

const pages = [
    {name: 'Home', path: '/'},
    {name: 'Catalog', path: '/catalog'},
    {name: 'Contacts', path: '/contacts'}
]

const Header = ({activePage}) => {
  return (
    <header>
        <div className={styles.container}>
            <div>
                <Link className="logo" to="/">
                    <img src={imgLogo} alt="logo" width="75" />
                </Link>
                <nav> 
                    <ul className={styles.navbar}>
                        { pages.map((item, index) => (
                            <li key={index} className={ activePage.toLowerCase() === item.name.toLowerCase() ? `${styles.activePage}` : ''}>
                            <Link to={item.path}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <form className={styles.searchContainer} role="search">
                <input
                    className={styles.searchInput}
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                />
                <button className={styles.button} type="submit">
                    Search
                </button>
            </form>
        </div>
    </header>
  )
}

export default Header