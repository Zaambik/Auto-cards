import { useState } from 'react' 

import styles from './OldCard.module.scss'
  
const Card = ({img, h, text}) => { 
  
  return ( 
    <div className={ styles.card }> 
      <div className={ styles.imgWrapper }>
        <a href="#"><img 
        src={img} 
        alt="Img Lake" 
        width="400px" /> 
        </a>
      </div>
      <div className={ styles.cardText }> 
        <h3>{h}</h3> 
        <p>{text}</p> 
        <a href="#">Look this art</a>
      </div> 
    </div> 
  ) 
}; 
 
export default Card