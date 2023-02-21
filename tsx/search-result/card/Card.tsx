import Cookies from 'js-cookie';
import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../hooks/useRedux';
import { productTitle, deleteStatus, deleteOneProduct } from '../../../../redux/slice/deleteProductSlice';

import styles from './Card.module.scss';
import close from './img/close.svg';

type props = {
   isUser: boolean;
   id: string;
   img: string;
   h: string;
   text: string;
   price: string;
};

const Card: FC<props> = ({ isUser, id, img, h, text, price }) => {
   const deleteProductTitle = useAppSelector(productTitle);
   const deleteProductStatus = useAppSelector(deleteStatus);
   const dispatch = useAppDispatch();

   console.log(deleteProductStatus);

   const token = Cookies.get('accessToken');

   const deleteModel = (id: string) => {
      if (confirm(`удалить модель: ${h}`)) {
         token && dispatch(deleteOneProduct({ id, token }));
      }
   };

   return (
      <div className={styles.card}>
         <div className={styles.cardUp}>
            <Link to={`/catalog/${id}`}>
               <img src={img} alt={`фото модели мотоцикла ${h}`} />
            </Link>
            <h3>{h}</h3>
            {isUser && (
               <button onClick={() => deleteModel(id)} type="button">
                  <img src={close} />
               </button>
            )}
         </div>
         <p>{text}</p>
         <div className={styles.price}>
            <h4>{price.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}$</h4>
            <Link to={`/catalog/${id}`}>Подробнее</Link>
         </div>
      </div>
   );
};

export default Card;
