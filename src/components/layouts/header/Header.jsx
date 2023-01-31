import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styles from './Header.module.scss';
import imgLogo from '../../../assets/img/logo.png';

const pages = [
   { name: 'Home', path: '/' },
   { name: 'Catalog', path: '/catalog' },
   { name: 'Contacts', path: '/contacts' },
];

const Header = ({ activePage }) => {
   const searchRef = useRef(null);
   const navigate = useNavigate()
   const [localSearch, setLocalSearch] = useState('');

   const onSearchInput = (event) => {
      setLocalSearch(event.target.value);
      // console.log(localSearch, 'state');
      // console.log(searchRef?.current?.value, 'Ref');
   };

   const clickOnSearch = () => {
      //fetch => ----------------------- -- --  -- -- -- - - - - --- - -- - --------------------
      console.log(searchRef?.current?.value);
      navigate("fetchResponse")
   }

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
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={onSearchInput}
                  value={localSearch}
                  ref={searchRef}
               />
               <button className={styles.button} type="button" onClick={clickOnSearch}>
                  Search
               </button>
            </form>
         </div>
      </header>
   );
};

export default Header;
