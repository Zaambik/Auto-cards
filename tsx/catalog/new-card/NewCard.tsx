import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './NewCard.module.scss';

const NewCard: FC = () => {
   return (
      <Link to={`/catalog/add`} className={styles.card}>
         <span className={styles.cardUp}>
            +
         </span>
         <p>добавить модель</p>
      </Link>
   );
};

export default NewCard;
