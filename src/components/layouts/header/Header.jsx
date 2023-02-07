import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styles from './Header.module.scss';
import imgLogo from '../../../assets/img/logo.png';

const pages = [
   { name: 'Home', path: '/', value: 'Главная' },
   { name: 'Catalog', path: '/catalog', value: 'Каталог' },
   { name: 'Contacts', path: '/contacts', value: 'Контакты' },
];

const Header = ({ activePage }) => {
   const navigate = useNavigate()
   const searchRef = useRef(null);
   const [localSearch, setLocalSearch] = useState('');

   const onSearchInput = (event) => {
      setLocalSearch(event.target.value);
      // console.log(localSearch, 'state');
      // console.log(searchRef?.current?.value, 'Ref');
   };

   const clickOnSearch = () => {
      navigate(searchRef?.current?.value === '' ? '/catalog' : `/search-result?search=${searchRef?.current?.value}`)
   }

   const enterClick = (event) => {
      if (event.key === 'Enter') {
         event.preventDefault();
         navigate(searchRef?.current?.value === '' ? '/catalog' : `/search-result?search=${searchRef?.current?.value}`);
      }
   };

   return (
      <header>
         <div className={styles.container}>
            <div>
               <Link className="logo" to="/">
                  <img src={imgLogo} alt="logo" width="75" />
               </Link>
               <nav>
                  <ul className={styles.navbar}>
                     {pages.map((item, index) => (
                        <li
                           key={index}
                           className={
                              activePage.toLowerCase() === item.name.toLowerCase()
                                 ? `${styles.activePage}`
                                 : ''
                           }>
                           <Link to={item.path}>{item.name}</Link>
                        </li>
                     ))}
                  </ul>
               </nav>
            </div>
            <form className={styles.searchContainer} role="search">
               {/* {localSearch && (
                  <img className="clear" src={iconClear} onClick={() => onSearchClear()} alt="X" />
               )} */}
               <input
                  className={styles.searchInput}
                  placeholder="Поиск модели"
                  type="search"
                  aria-label="Поиск модели"
                  onChange={onSearchInput}
                  value={localSearch}
                  ref={searchRef}
                  onKeyDown={enterClick}
               />
               <button className={styles.button} type="button" onClick={clickOnSearch}>
                  Поиск
               </button>
            </form>
         </div>
      </header>
   );
};

export default Header;
