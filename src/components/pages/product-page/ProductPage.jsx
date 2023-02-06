import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { fetchOneProduct, getOneProduct, productStatus, updateStatus } from '../../../redux/slice/oneProductSlice';

import styles from './ProductPage.module.scss'
import imgCard from './card1.png'
import Slider from '../../ui/slider/Slider';


const ProductPage = ({setActivePage}) => {
   const product = useAppSelector(getOneProduct);
   const status = useAppSelector(productStatus);
   const dispatch = useAppDispatch();

   const [id, setId] = useState();

   const params = useParams();
   const navigate = useNavigate();

   useEffect(() => {
      setId(params.id);
      setActivePage('catalog/card');
      const fetchData = async () => {
         id && dispatch(fetchOneProduct(id));
      };
      fetchData();
   }, [id]);

   if (product === null && status === 'error') {
      alert('something went wrong, please try again later');
      navigate('/catalog');
      dispatch(updateStatus('loading'))
   }

   if (product === null) {
      return <h2>...loading</h2>;
   }

   return (
      <>
         <h2>{product.title}</h2>
         <div className={styles.container}>
            <Slider img={imgCard}/>
            <h3>Об автомобиле</h3>
            <ul>
               <li> Общие характеристики автомобиля: <br/> 
                  <br/> Двигатель: 3.0 л / 340 л.с. / Бензиновый
                  <br/>Коробка: Автоматическая
                  <br/>Привод: Полный
                  <br/>Расход топлива: 10,9 л в городе / 7,9 л за городом
                  <br/>Разгон до 100 км/ч: 5,5 с
                  <br/>Транспортный налог: 102 000 рублей в год</li>
            </ul>
         </div>
      </>
   )
}

export default ProductPage