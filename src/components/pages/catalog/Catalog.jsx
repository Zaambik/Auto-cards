import { useEffect } from 'react';

import Card from './card/Card';

import imgCard1 from './img/card1.png';
import imgCard2 from './img/card2.png';
import imgCard3 from './img/card3.png';
import styles from './Catalog.module.scss';

const Catalog = ({ setActivePage }) => {
   useEffect(() => {
      setActivePage('catalog');
   }, []);

   return (
      <>
         <h2>Cards Collection</h2>
         <div className={styles.container}>
            <Card
               id={'1'}
               img={imgCard1}
               h={'Dark Forest'}
               text={
                  "The dark forest is full of mysteries. This is the last adventure on the way to the answers to life's questions. Each hummock of this swamp is full of mysteries, because behind each of them is a mysterious past. "
               }
               price={'+100500'}
            />
            <Card
               id={'2'}
               img={imgCard2}
               h={'Last Lantern'}
               text={
                  'This lantern gives hope even in the darkest forest. Everyone needs it, but not everyone deserves it. Everyone dies, but not everyone lives. How will you go about this journey? The last frnar will answer questions.'
               }
               price={'+100500'}
            />
            <Card
               id={'3'}
               img={imgCard3}
               h={'Fireflies'}
               text={
                  "Fireflies will light up even the darkest corner. It's hard not to get lost in this scary forest. Follow their lights and find your way out of this endless maze! Be true to yourself and find your way home!"
               }
               price={'+100500'}
            />
            <Card
               id={'4'}
               img={imgCard1}
               h={'Dark Forest'}
               text={
                  "The dark forest is full of mysteries. This is the last adventure on the way to the answers to life's questions. Each hummock of this swamp is full of mysteries, because behind each of them is a mysterious past. "
               }
               price={'+100500'}
            />
            <Card
               id={'5'}
               img={imgCard2}
               h={'Last Lantern'}
               text={
                  'This lantern gives hope even in the darkest forest. Everyone needs it, but not everyone deserves it. Everyone dies, but not everyone lives. How will you go about this journey? The last frnar will answer questions.'
               }
               price={'+100500'}
            />
            <Card
               id={'6'}
               img={imgCard3}
               h={'Fireflies'}
               text={
                  "Fireflies will light up even the darkest corner. It's hard not to get lost in this scary forest. Follow their lights and find your way out of this endless maze! Be true to yourself and find your way home!"
               }
               price={'+100500'}
            />
            <Card
               id={'7'}
               img={imgCard1}
               h={'Dark Forest'}
               text={
                  "The dark forest is full of mysteries. This is the last adventure on the way to the answers to life's questions. Each hummock of this swamp is full of mysteries, because behind each of them is a mysterious past. "
               }
               price={'+100500'}
            />
            <Card
               id={'8'}
               img={imgCard2}
               h={'Last Lantern'}
               text={
                  'This lantern gives hope even in the darkest forest. Everyone needs it, but not everyone deserves it. Everyone dies, but not everyone lives. How will you go about this journey? The last frnar will answer questions.'
               }
               price={'+100500'}
            />
            <Card
               id={'9'}
               img={imgCard3}
               h={'Fireflies'}
               text={
                  "Fireflies will light up even the darkest corner. It's hard not to get lost in this scary forest. Follow their lights and find your way out of this endless maze! Be true to yourself and find your way home!"
               }
               price={'+100500'}
            />
         </div>
      </>
   );
};

export default Catalog;
