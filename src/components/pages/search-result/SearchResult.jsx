import { FC, useEffect, useState, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { fetchProducts, getProducts, productsStatus, updateStatus } from '../../../redux/slice/productsSlice';

import Card from './card/Card';

import imgCard1 from './img/card1.jpg';
import imgCard2 from './img/card2.png';
import imgCard3 from './img/card3.webp';
import styles from './SearchResult.module.scss';

const SearchResult = ({ setActivePage }) => {
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
      return <h2>...loading</h2>;
   }

   return (
      <>
         <h2>
            Pезультат по запросу {'<'} {search} {'/>'}
         </h2>
         <div className={styles.container}>
            {products.map((item, index) => (
               <Card key={index} id={item._id} img={item.image} h={item.model} text={item.info} price={String(item.price)} />
            ))}
         </div>
      </>
   );
};

export default SearchResult;
