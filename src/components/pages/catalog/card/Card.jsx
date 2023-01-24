import { useState } from 'react' 

import styles from './Card.module.scss'
  
const Card = ({img, h, text}) => { 
  
  return ( 
    <div className={styles.card}>
      <img src={img}/>
      <h3>{h}</h3>
      <p>{text}</p>
    </div>
  ) 
}; 
 
export default Card