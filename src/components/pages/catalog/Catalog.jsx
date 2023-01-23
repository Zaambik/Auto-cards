import { useEffect } from 'react'

import Card from './card/Card'

import imgCard1 from './img/card1.png'
import imgCard2 from './img/card2.png'
import imgCard3 from './img/card3.png'
import styles from './Catalog.module.scss'


const Catalog = ({setActivePage}) => {

  useEffect(() => {
    setActivePage('catalog')
  }, [])

  return (
    <>
      <h2>Cards Collection</h2>
      <div className={ styles.container }>
        <Card 
          img={imgCard1} 
          h={"Dark Forest"} 
          text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum doloribus inventore eligendi in, ea, sapiente adipisci dolores earum soluta nam aperiam doloremque ratione, possimus labore ab quasi architecto fugiat necessitatibus. "}
        />
        <Card 
          img={imgCard2} 
          h={"Dark Forest"} 
          text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum doloribus inventore eligendi in, ea, sapiente adipisci dolores earum soluta nam aperiam doloremque ratione, possimus labore ab quasi architecto fugiat necessitatibus. "}
        />
        <Card 
          img={imgCard3} 
          h={"Dark Forest"} 
          text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum doloribus inventore eligendi in, ea, sapiente adipisci dolores earum soluta nam aperiam doloremque ratione, possimus labore ab quasi architecto fugiat necessitatibus. "}
        />
      </div>              
    </>
  )
};

export default Catalog