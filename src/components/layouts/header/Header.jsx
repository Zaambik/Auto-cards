import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoEnterOutline } from 'react-icons/io5'
import { useOutside } from '../../../hooks/useOutside'
import { useAppSelector, useAppDispatch } from '../../../hooks/useRedux'
import { isLoggedIn, login as loginUser, logout } from '../../../redux/slice/authSlice'

import styles from './Header.module.scss';
import imgLogo from '../../../assets/img/logo.png'

const pages = [
   { name: 'Home', path: '/', value: 'Главная' },
   { name: 'Catalog', path: '/catalog', value: 'Каталог' },
   { name: 'Contacts', path: '/contacts', value: 'Контакты' },
];

const Header = ({ activePage }) => {
   const navigate = useNavigate()
   const searchRef = useRef(null);
   const [localSearch, setLocalSearch] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const isUser = useAppSelector(isLoggedIn);
   const dispatch = useAppDispatch();

   const { ref, isShow, setIsShow } = useOutside(false);

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
                        <li key={index} className={activePage.toLowerCase() === item.name.toLowerCase() ? `${styles.activePage}` : ''}>
                           <Link to={item.path}>{item.value}</Link>
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
            {isUser ? (
               <button className={styles.logout} type="button" onClick={() => dispatch(logout())}>
                  Выйти
               </button>
            ) : (
               <button className={styles.preBtn} type="button" onClick={() => setIsShow(!isShow)}>
                  {/* <img src={IoEnterOutline} width="30px" /> */}
                  <IoEnterOutline />
               </button>
            )}

            {isShow && (
               <div className={styles.wrapper} ref={ref}>
                  <form className={styles.loginForm}>
                     <span>
                        <input className={styles.email} type="email" placeholder="Почта" value={email} onChange={(e) => setEmail(e.target.value)} />
                     </span>
                     <span>
                        <input
                           className={styles.pass}
                           type="password"
                           placeholder="Пароль"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                        />
                     </span>
                     <button className={styles.enterBtn} type="button" onClick={() => dispatch(loginUser({ email, password }))}>
                        Логин
                     </button>
                  </form>
               </div>
            )}
         </div>
      </header>
   );
};

export default Header;
