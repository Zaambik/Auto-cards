import { Link } from 'react-router-dom';

import styles from './NewCard.module.scss';

const NewCard = () => {
   return (
      <Link to={`/admin`} className={styles.card}>
         <span className={styles.cardUp}>
            +
         </span>
         <p>добавить модель</p>
      </Link>
   );
};

export default NewCard;
