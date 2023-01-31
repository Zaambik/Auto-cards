import { useState } from 'react' 
import { Link } from 'react-router-dom';

import styles from './Card.module.scss'
  
const Card = ({ id, img, h, text, price }) => {
  return (
   <div className={styles.card}>
   <img src={img} />
   <h3>{h}</h3>
      <h4>{price}₽</h4>
      <Link to={`/catalog/${id}`}>Подробнее</Link>
   </div>
  );
};
 
export default Card