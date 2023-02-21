import styles from './AdminPage.module.scss';

const AdminPage = () => {
   return (
      <>
         <form className={styles.container}>
            <h2>Добавить модель:</h2>
            <span className={styles.name}>
               <label>Название</label>
               <input className={styles.forName} type="text" placeholder="< Укажите название карточки />" />
            </span>

            <span className={styles.image}>
               <label>Фото</label>
               <input type="url" placeholder="< Вставьте ссылку на фотографию />" />
            </span>
            <div>
               <h3> Общие характеристики автомобиля: </h3>
               <span>
                  <label>Тип двигателя:</label>

                  <select name="engineType" id="engineType-select">
                     <option value="">Выберите тип двигателя</option>
                     <option value="gazoline">Бензиновый</option>
                     <option value="electro">Электрический</option>
                     <option value="hybrid">Гибридный</option>
                  </select>
               </span>

               <span>
                  <label>Мощность:</label>
                  <input type="text" placeholder="В лошадинных силах" />
               </span>

               <span>
                  <label>Привод:</label>
                  <select name="driveType" id="driveType-select">
                     <option value="">Выберите тип привода</option>
                     <option value="full">Полный</option>
                     <option value="back">Задний</option>
                     <option value="front">Передний</option>
                  </select>
               </span>

               <span>
                  <label>Разгон до 100 км/ч:</label>
                  <input type="text" placeholder="В секунду" />
               </span>

               <span>
                  <label>Транспортный налог:</label>
                  <input type="text" placeholder="Рублей в год" />
               </span>

               <span>
                  <label>Год выпуска:</label>
                  <input type="text" placeholder="Год" />
               </span>
            </div>
            <button type="button">Применить</button>
         </form>
      </>
   );
};

export default AdminPage;
