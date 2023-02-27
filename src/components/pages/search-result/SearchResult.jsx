import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { fetchProducts, getProducts, productsStatus, updateStatus } from '../../../redux/slice/productsSlice';
import { isLoggedIn } from '../../../redux/slice/authSlice';

import Card from './card/Card';

import styles from './SearchResult.module.scss';

const SearchResult = ({ setActivePage }) => {
   const isUser = useAppSelector(isLoggedIn);
   const [search, setSearch] = useState();
   const [searchParams, setSearchParams] = useSearchParams();
   const navigate = useNavigate();

   const products = useAppSelector(getProducts);
   const status = useAppSelector(productsStatus);
   const dispatch = useAppDispatch();

   useEffect(() => {
      setActivePage('search-result');
      window.scrollTo(0, 0);
      if (window.location.search) {
         const search = searchParams.get('search');
         search && setSearch(search);
         const fetchData = () => {
            search && dispatch(fetchProducts({ searchValue: search }));
         };
         fetchData();
      }
   }, [searchParams]);

   if (status === 'error') {
      alert('something went wrong, please try again later');
      navigate('/');
      dispatch(updateStatus('loading'));
   }

   if (status === 'loading') {
      return <h2>Загрузка...</h2>;
   }

   return (
      <>
         <h2>
            Pезультат по запросу {'<'} {search} {'/>'}
         </h2>
         <div className={styles.container}>
            {products.map((item, index) => (
               <Card isUser={isUser} key={index} id={item._id} img={item.image} h={item.model} text={item.info} price={String(item.price)} />
            ))}
         </div>
      </>
   );
};

export default SearchResult;
