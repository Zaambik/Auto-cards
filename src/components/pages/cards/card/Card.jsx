import { useState } from 'react' 
 
import imgCard1 from '../img/card1.png' 
import imgCard2 from '../img/card2.png' 
import imgCard3 from '../img/card3.png' 
import styles from './Card.module.scss' 
 
 
const Cards = ({img, h, text}) => { 
 
  return ( 
    <div className={ styles.card }> 
      <div className={ styles.imgWrapper }><img 
        src={ imgCard1 } 
        alt="Img Lake" 
        width="400px" 
      /> </div>
      <div className={ styles.cardText }> 
          <h2>Dark forest</h2> 
          <div>
            <p> 
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum doloribus inventore eligendi in, ea, sapiente adipisci dolores earum soluta nam aperiam doloremque ratione, possimus labore ab quasi architecto fugiat necessitatibus. 
            </p> 
            <a href="#">Look this art</a>
          </div> 
      </div> 
    </div> 
  ) 
}; 
 
export default Cards