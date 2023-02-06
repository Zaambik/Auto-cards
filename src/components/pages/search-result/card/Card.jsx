import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Card.module.scss';

const Card = ({ id, img, h, text, price }) => {
   return (
      <div className={styles.card}>
         <div className={styles.cardUp}>
            <Link to={`/catalog/${id}`}>
               <img src={img} alt={`фото модели мотоцикла ${h}`}/>
            </Link>
            <h3>{h}</h3>
         </div>
         <p>{text}</p>
         <div className={styles.price}>
            <h4>{price}$</h4>
            <Link to={`/catalog/${id}`}>Подробнее</Link>
         </div>
      </div>
   );
};

export default Card;
