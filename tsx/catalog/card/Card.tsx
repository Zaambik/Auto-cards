import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Card.module.scss';
import close from './img/close.svg'

type props = {
   id: string;
   img: string;
   h: string;
   text: string;
   price: string;
   user: boolean;
};

const Card: FC<props> = ({ id, img, h, text, price, user }) => {
   return (
      <div className={styles.card}>
         <div className={styles.cardUp}>
            <Link to={`/catalog/${id}`}>
               <img src={img} alt={`фото модели мотоцикла ${h}`} />
            </Link>
            <h3>{h}</h3>
            { user && <button type="button"><img src={close}/></button>}
         </div>
         <p>{text}</p>
         <div className={styles.price}>
            <h4>{price.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g,'$1 ')}$</h4>
            <Link to={`/catalog/${id}`}>Подробнее</Link>
         </div>
      </div>
   );
};

export default Card;
