import { FC, useEffect, useState, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { isLoggedIn } from '../../../redux/slice/authSlice';
import { fetchProducts, getProducts, productsStatus, updateStatus } from '../../../redux/slice/productsSlice';

import Card from './card/Card';

import imgCard1 from './img/card1.jpg';
import styles from './SearchResult.module.scss';

type props = {
   setActivePage: (value: React.SetStateAction<string>) => void;
};

const SearchResult: FC<props> = ({ setActivePage }) => {
   const isUser = useAppSelector(isLoggedIn);
   const [search, setSearch] = useState<string>();
   const [searchParams, setSearchParams] = useSearchParams();
   const navigate = useNavigate();

   const products = useAppSelector(getProducts);
   const status = useAppSelector(productsStatus);
   const dispatch = useAppDispatch();

   useEffect(() => {
      setActivePage('search');
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
         <h2>{products.length === 0 ? `модели по запросу < ${search} /> не найдены` : `результат по запросу < ${search} />`}</h2>
         <div className={styles.container}>
            {products.map((item, index) => (
               <Card isUser={isUser} key={index} id={item._id} img={item.img} h={item.title} text={item.info} price={String(item.price)} />
            ))}
         </div>
      </>
   );
};

export default SearchResult;
