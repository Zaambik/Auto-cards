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
         <h2>{id}BMW X6</h2>
         <div className={styles.container}>
            <img src={imgCard}></img>
            <h3>Об автомобиле</h3>
            <ul>
               <li> Общие характеристики автомобиля: <br/> 
                  <br/> Двигатель: 3.0 л / 340 л.с. / Бензиновый
                  <br/>Коробка: Автоматическая
                  <br/>Привод: Полный
                  <br/>Расход топлива: 10,9 л в городе / 7,9 л за городом
                  <br/>Разгон до 100 км/ч: 5,5 с
                  <br/>Транспортный налог: 102 000 рублей в год</li>
            </ul>
         </div>
      </>
   )
}

export default ProductPage