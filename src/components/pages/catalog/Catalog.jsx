import { useEffect, useState, useRef, useCallback } from 'react';
import debounce from 'lodash.debounce';
import { useNavigate } from 'react-router-dom';
import qs from 'qs'

import Card from './card/Card';

import { fetchProducts, getProducts, productsStatus, updateStatus } from '../../../redux/slice/productsSlice';
import { fetchFilters, filtersStatus, getFilters } from '../../../redux/slice/filtersSlice'
import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';


import styles from './Catalog.module.scss';

const Catalog = ({ setActivePage }) => {
   const products = useAppSelector(getProducts);
   const statusProducts = useAppSelector(productsStatus);
   const statusFilters = useAppSelector(filtersStatus);
   const filters = useAppSelector(getFilters);
   const dispatch = useAppDispatch('');
   const navigate = useNavigate('');

   const [typeFilter, setTypeFilter] = useState([]);
   const [producerFilter, setProducerFilter] = useState([]);
   const [colorFilter, setColorFilter] = useState([]);
   const [priceMin, setPriceMin] = useState(0);
   const [priceMax, setPriceMax] = useState(100000000);
   const isMounted = useRef(false);
   const isSearch = useRef(false);

   const [localMin, setLocalMin] = useState(0);
   const [localMax, setLocalMax] = useState(100000000);

   useEffect(() => {
      setActivePage('catalog');
      window.scrollTo(0, 0);
      const fetchData = () => {
         dispatch(fetchFilters());
      };
      fetchData();
   }, []);

   useEffect(() => {
      if (isMounted.current) {
         const queryString = qs.stringify({
            typeFilter,
            modelFilter: producerFilter,
            colorsFilter: colorFilter,
            minPrice: priceMin,
            maxPrice: priceMax,
         });
         navigate(`?${queryString}`);
         console.log(queryString);
      }
      isMounted.current = true;
   }, [typeFilter, producerFilter, colorFilter, priceMin, priceMax]);

   //если был первый рендер, то проверяем URL-параметры и сохраняем в редуксе
   useEffect(() => {
      if (window.location.search) {
         const params = qs.parse(window.location.search.substring(1));
         setTypeFilter(params.typeFilter !== undefined ? String(params?.typeFilter).split(',') : []);
         // console.log(String(params?.typeFilter).split(','));
         setProducerFilter(params.modelFilter !== undefined ? String(params?.modelFilter).split(',') : []);
         // console.log(String(params?.producerFilter).split(','));
         setColorFilter(params.colorsFilter !== undefined ? String(params?.colorsFilter).split(',') : []);
         // console.log(String(params?.colorsFilter).split(','));
         setPriceMin(params.minPrice !== undefined ? Number(params.minPrice) : 0);
         setPriceMax(params.maxPrice !== undefined ? Number(params.maxPrice) : 1000000000000);

         isSearch.current = true;
      }
   }, []);

   useEffect(() => {
      if (!isSearch.current) {
         const fetchData = () => {
            dispatch(fetchProducts({ typeFilter, producerFilter, colorFilter, priceMin, priceMax }));
         };
         fetchData();
      }
      isSearch.current = false;
   }, [typeFilter, producerFilter, colorFilter, priceMin, priceMax]);

   const addFilter = (type, el) => {
      if (type === 'тип') {
         if (typeFilter.includes(el.value)) {
            setTypeFilter([...typeFilter].filter((item) => item !== el.value));
            console.log(typeFilter);
         } else {
            setTypeFilter([...typeFilter, el.value]);
            console.log(typeFilter);
         }
      }
      if (type === 'производитель') {
         if (producerFilter.includes(el.value)) {
            setProducerFilter([...producerFilter].filter((item) => item !== el.value));
            console.log(producerFilter);
         } else {
            setProducerFilter([...producerFilter, el.value]);
            console.log(producerFilter);
         }
      }
      if (type === 'цвет') {
         if (colorFilter.includes(el.value)) {
            setColorFilter([...colorFilter].filter((item) => item !== el.value));
            console.log(colorFilter);
         } else {
            setColorFilter([...colorFilter, el.value]);
            console.log(colorFilter);
         }
      }
   };

   if (statusProducts === 'error' || statusFilters === 'error') {
      alert('something went wrong, please try again later');
      navigate('/');
      dispatch(updateStatus('loading'));
   }

   if (statusProducts === 'loading' || statusFilters === 'error') {
      return <h2>Loading...</h2>;
   }

    //////////////////////

      const updateMinPrice = useCallback(
         debounce((number) => {
            setPriceMin(number);
         }, 1500),
         [],
      );

        const updateMaxPrice = useCallback(
           debounce((number) => {
              setPriceMax(number);
           }, 1500),
           [],
        );

           const onMinInput = (event) => {
              setLocalMin(Number(event.target.value));
              updateMinPrice(Number(event.target.value));
           };

           const onMaxInput = (event) => {
              setLocalMax(Number(event.target.value));
              updateMaxPrice(Number(event.target.value));
           };

              useEffect(() => {
      if (!isSearch.current) {
         const fetchData = () => {
            dispatch(
               fetchProducts({
                  typeFilter,
                  producerFilter,
                  colorFilter,
                  priceMin,
                  priceMax,
               }),
            );
         };
         fetchData();
      }
      isSearch.current = false;
   }, [typeFilter, producerFilter, colorFilter, priceMin, priceMax]);

      useEffect(() => {
      if (isMounted.current) {
         // const queryMin = priceMin !== localMin && { minPrice: priceMin };
         const queryString = qs.stringify({
            typeFilter,
            modelFilter: producerFilter,
            colorsFilter: colorFilter,
            minPrice: priceMin,
            maxPrice: priceMax,
         });
         navigate(`?${queryString}`);
         console.log(queryString);
      }
      isMounted.current = true;
   }, [typeFilter, producerFilter, colorFilter, priceMin, priceMax]);

   //////////////////////

   return (
      <>
         <h2>Каталог автомобилей</h2>
         <section className={styles.filters}>
            <h3>фильтры</h3>
            <form>
               {filters.map((item, index) => (
                  <div key={index}>
                     <legend>{item.type}</legend>
                     {item?.filters.map((el, index) => (
                        <label key={index}>
                           <input
                              checked={
                                 typeFilter.includes(el.value)
                                    ? true
                                    : false || producerFilter.includes(el.value)
                                    ? true
                                    : false || colorFilter.includes(el.value)
                                    ? true
                                    : false
                              }
                              onClick={() => addFilter(item.type, el)}
                              type="checkbox"
                              id={el.name}
                              name={el.name}
                              value={el.value}
                              onChange={(e) => {}}
                           />
                           <span></span>
                           {el.name}
                        </label>
                     ))}
                  </div>
               ))}
               <label>min</label>
               <input type="number" onChange={(event) => setPriceMin(event.target.value)} value={priceMin} />
               <label>max</label>
               <input type="number" onChange={(event) => setPriceMax(event.target.value)} value={priceMax} />
               <button
                  type="button"
                  onClick={() => {
                     setTypeFilter([]);
                     setProducerFilter([]);
                     setColorFilter([]);
                     setPriceMin(0);
                     setPriceMax(100000000);
                     setLocalMin(0);
                     setLocalMax(100000000);
                  }}>
                  сброс
                  <svg width="26" height="26" viewBox="0 -0.5 20 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M5.33929 4.46777H7.33929V7.02487C8.52931 6.08978 10.0299 5.53207 11.6607 5.53207C15.5267 5.53207 18.6607 8.66608 18.6607 12.5321C18.6607 16.3981 15.5267 19.5321 11.6607 19.5321C9.51025 19.5321 7.58625 18.5623 6.30219 17.0363L7.92151 15.8515C8.83741 16.8825 10.1732 17.5321 11.6607 17.5321C14.4222 17.5321 16.6607 15.2935 16.6607 12.5321C16.6607 9.77065 14.4222 7.53207 11.6607 7.53207C10.5739 7.53207 9.56805 7.87884 8.74779 8.46777L11.3393 8.46777V10.4678H5.33929V4.46777Z"
                        fill="currentColor"
                     />
                  </svg>
               </button>
            </form>
         </section>
         <section className={styles.container}>
            {products.map((item, index) => (
               <Card key={index} id={item._id} img={item.image} h={item.model} text={item.info} price={String(item.price)} />
            ))}
         </section>

         <label>
            <input
               className={styles.priceInput}
               type="number"
               placeholder="0"
               min="0"
               onChange={(event) => onMinInput(event)}
               value={localMin === 0 ? '' : localMin}
            />
            минимальная цена
         </label>
         <label>
            <input
               className={styles.priceInput}
               type="number"
               placeholder="100000000"
               max="100000000"
               onChange={(event) => onMaxInput(event)}
               value={localMax === 100000000 ? '' : localMax}
            />
            максимальная цена
         </label>
      </>
   );
};

export default Catalog;
