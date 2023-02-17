import { useState } from 'react' 
import { Link } from 'react-router-dom';

import styles from './Card.module.scss'
  
const Card = ({ id, img, h, text, price }) => {

  return (
     <div className={styles.card}>
        <Link to={`/catalog/${id}`}>
           <img src={img} />
        </Link>
        <h3>{h}</h3>
        <h4>{price.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}{'  '}₽</h4>
        <Link className={styles.button} to={`/catalog/${id}`}>
           Подробнее
        </Link>
     </div>
  );
};
 
export default Card