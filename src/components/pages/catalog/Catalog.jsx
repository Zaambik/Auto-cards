import { useEffect, useState, useRef } from 'react';
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
         {/* <div className={styles.container}>
            <Card
               id={'2'}
               img={imgB2}
               h={'BMW XM'}
               text={
                  'Эксклюзивный, экспрессивный, электрифицированный: новый BMW XM сочетает в себе экспрессивный дизайн с высокой динамикой BMW M и мощной технологией подключаемого гибрида последнего поколения.'
               }
               price={'31 000 000 '}
            />
            <Card
               id={'3'}
               img={imgB3}
               h={'BMW X5 M F95'}
               text={
                  "Оснащенный новыми технологиями, обеспечивающими больше безопасности и максимум динамики на любых покрытиях, BMW X5 является безусловным лидером."
               }
               price={'7 190 000  '}
            />
            <Card
               id={'4'}
               img={imgB4}
               h={'BMW X4'}
               text={
                  "Новый BMW X4 это настоящий покоритель дорог. Это Sports Activity Coupe (SAC), оснащенный двигателями BMW TwinPower Turbo и имеющий более широкую колесную базу для превосходной управляемости, а также множество усовершенствованных элементов дизайна экстерьера и интерьера."
               }
               price={'5 700 000 '}
            />
            <Card
               id={'5'}
               img={imgF3}
               h={'Ferrari F8 Tributo'}
               text={
                  'BMW iX M60: Электрическая динамика движения высочайшего уровня. Cочетает в себе инновационную мощь BMW i и BMW M. Узнайте больше об этом первом полностью электрическом автомобиле BMW M в сегменте мощных SAV.'
               }
               price={'18 630 000 '}
            />
            <Card
               id={'6'}
               img={imgF2}
               h={'Ferrari Roma'}
               text={
                  "Обновленный BMW 8 серии Cabrio – это роскошный автомобиль, который позволяет Вам наслаждаться чувством эксклюзивной свободы на каждом километре пути. Испытайте сами!"
               }
               price={'17 200 000 '}
            />
            <Card
               id={'7'}
               img={imgF1}
               h={'Ferrari 296 GTB'}
               text={
                  "Потрясающая элегантность и разнообразные информационно-развлекательные возможности сочетаются в новом BMW 7 серии, обеспечивая премиальные впечатления от поездки!"
               }
               price={'23 690 000 '}
            />
            <Card
               id={'8'}
               img={imgM3}
               h={'Mercedes AMG H247'}
               text={
                  'Бескомпромиссный и неповторимый: новый BMW 4 серии Coupe решительно и элегантно разрушает стереотипы. Его независимый дизайн и классический купеобразный силуэт напоминают о легендарных моделях прошлого, и в то же время подчеркивают прогрессивный характер автомобиля.'
               }
               price={'4 450 000 '}
            />
            <Card
               id={'9'}
               img={imgM2}
               h={'Mercedes AMG W177'}
               text={
                  "BMW Z4 сочетает в себе динамику спорткара с ощущением свободы, которое дарит родстер. Испытайте сами: Современная эстетика культового дизайна родстера. Впечатляющая динамика благодаря мощности до 387 л.с. и безупречная управляемость. Аэродинамический пакет M для большей эффективности и динамики!"
               }
               price={'5 110 000 '}
            />
            <Card
               id={'10'}
               img={imgM1}
               h={'Mercedes A-Класс'}
               text={
                  "Ссылка на сайт, откуда можно брать картинки: https://quto.ru/mercedes-benz/a-class/w177f/hatchback5d"
               }
               price={'3 220 000 '}
            />
         </div> */}
      </>
   );
};

export default Catalog;
