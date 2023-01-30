import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import styles from './ProductPage.module.scss'
import imgCard from './card1.png'


const ProductPage = ({setActivePage}) => {

   const [id, setId] = useState()
   const params = useParams()

   useEffect(() => {
      setId(params.id)
      setActivePage('catalog/card')
   }, [])

   return (
      <>
         <h2>Description page {id}</h2>
         <div className={styles.container}>
            <img src={imgCard}></img>
            <h3>About card</h3>
            <ul>
               <li> Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus repudiandae quibusdam atque commodi dolore natus? Cumque, eligendi maxime possimus obcaecati modi saepe, repellat enim nemo, totam quos est quod nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus repudiandae quibusdam atque commodi dolore natus? Cumque, eligendi maxime possimus obcaecati modi saepe, repellat enim nemo, totam quos est quod nobis.</li>
            </ul>
         </div>
      </>
   )
}

export default ProductPage