import Cookies from 'js-cookie';
import { useState } from 'react' 
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../hooks/useRedux';
import { productTitle, deleteStatus, deleteOneProduct } from '../../../../redux/slice/deleteProductSlice';
import { filterProducts } from '../../../../redux/slice/productsSlice';

import styles from './Card.module.scss'
  
const Card = ({ id, img, h, text, price, isUser }) => {
      const deleteProductTitle = useAppSelector(productTitle);
      const deleteProductStatus = useAppSelector(deleteStatus);
      const dispatch = useAppDispatch();

      console.log(deleteProductStatus);

      const token = Cookies.get('accessToken');

      const deleteModel = (id) => {
         if (confirm(`удалить модель: ${h}`)) {
            token && dispatch(deleteOneProduct({ id, token }))
         }
      };


  return (
     <div className={styles.card}>
        <Link to={`/catalog/${id}`}>
           <img src={img} />
        </Link>
        <h3>{h}</h3>{' '}
        {isUser && (
           <button className={styles.delete} onClick={() => deleteModel(id)} type="button">
              {/* <img src={close} /> */}
              delete
           </button>
        )}
        <h4>
           {price.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}
           {'  '}₽
        </h4>
        <Link className={styles.button} to={`/catalog/${id}`}>
           Подробнее
        </Link>
     </div>
  );
};
 
export default Card