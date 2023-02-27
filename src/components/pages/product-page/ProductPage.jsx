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
      return <h2>Loading...</h2>;
   }

   return (
      <>
         <h2>{product.model}</h2>
         <div className={styles.container}>
            <Slider img={product.image}/>
            <h3>Об автомобиле</h3>
            <ul>
               <li> Общие характеристики автомобиля: <br/> 
                  <br/> Двигатель: {product.power} / { product.engine } 
                  <br/>Привод: {product.privod}
                  <br/>Разгон до 100 км/ч: {product.speed}
                  <br/>Транспортный налог: {product.nalog} 
                  <br/>Год выпуска: {product.year}
                  </li>
            </ul>
         </div>
      </>
   )
}

export default ProductPage