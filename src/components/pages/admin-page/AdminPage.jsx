import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { isLoggedIn } from '../../../redux/slice/authSlice';
import { addProduct } from '../../../redux/slice/addProductSlice';

import styles from './AdminPage.module.scss';

const AdminPage = ({ setActivePage }) => {
   const [photo1, setPhoto1] = useState();
   const [modelPrice, setModelPrice] = useState();
   const [modelName, setModelName] = useState();
   const [modelEngine, setModelEngine] = useState();
   const [modelYear, setModelYear] = useState();
   const [modelPower, setModelPower] = useState();
   const [modelPrivod, setModelPrivod] = useState();
   const [modelSpeed, setModelSpeed] = useState();
   const [modelNalog, setModelNalog] = useState();

   const dispatch = useAppDispatch();

   const isUser = useAppSelector(isLoggedIn);
   const token = Cookies.get('accessToken');

   useEffect(() => {
      setActivePage('catalog/add');
      window.scrollTo(0, 0);
   }, []);

   const submitForm = () => {
      if (photo1 && modelPrice && modelName && modelEngine && modelYear && modelPower && modelPrivod && modelSpeed && modelNalog) {
         const object = {
            image: photo1,
            engine: modelEngine,
            price: modelPrice,
            model: modelName,
            power: modelEngine,
            year: modelYear,
            power: modelPower,
            privod: modelPrivod,
            speed: modelSpeed,
            nalog: modelNalog
         };
         token && dispatch(addProduct({ object, token }));
         console.log(object);
      } else {
         alert('все поля должны быть заполнены!');
      }
   };

   if (!isUser) {
      return <h2>страница недоступна</h2>;
   }

   return (
      <>
         <form className={styles.container}>
            <h2>Добавить модель:</h2>
            <span className={styles.name}>
               <label>Название</label>
               <input
                  className={styles.forName}
                  type="text"
                  placeholder="< Укажите название карточки />"
                  value={modelName}
                  onChange={(event) => setModelName(event.target.value)}
               />
            </span>

            <span className={styles.image}>
               <label>Фото</label>
               <input
                  type="url"
                  placeholder="< Вставьте ссылку на фотографию />"
                  value={photo1}
                  onChange={(event) => setPhoto1(event.target.value)}
               />
            </span>
            <div>
               <h3> Общие характеристики автомобиля: </h3>
               <span>
                  <label>Тип двигателя:</label>

                  <select name="engineType" id="engineType-select" value={modelEngine} onChange={(event) => setModelEngine(event.target.value)}>
                     <option value="">Выберите тип двигателя</option>
                     <option value="Бензиновый">Бензиновый</option>
                     <option value="Электрический">Электрический</option>
                     <option value="Гибридный">Гибридный</option>
                  </select>
               </span>

               <span>
                  <label>Мощность:</label>
                  <input type="text" placeholder="В лошадинных силах" value={modelPower} onChange={(event) => setModelPower(event.target.value)} />
               </span>

               <span>
                  <label>Привод:</label>
                  <select name="driveType" id="driveType-select" value={modelPrivod} onChange={(event) => setModelPrivod(event.target.value)}>
                     <option value="">Выберите тип привода</option>
                     <option value="Полный">Полный</option>
                     <option value="Задний">Задний</option>
                     <option value="Передний">Передний</option>
                  </select>
               </span>

               <span>
                  <label>Разгон до 100 км/ч:</label>
                  <input type="text" placeholder="В секунду" value={modelSpeed} onChange={(event) => setModelSpeed(event.target.value)} />
               </span>

               <span>
                  <label>Транспортный налог:</label>
                  <input type="number" placeholder="Рублей в год" value={modelNalog} onChange={(event) => setModelNalog(event.target.value)} />
               </span>

               <span>
                  <label>Год выпуска:</label>
                  <input type="text" placeholder="Год" value={modelYear} onChange={(event) => setModelYear(event.target.value)} />
               </span>

               <span>
                  <label>Цена:</label>
                  <input type="number" placeholder="Цена" value={modelPrice} onChange={(event) => setModelPrice(event.target.value)} />
               </span>
            </div>
            <button type="button" onClick={() => submitForm()}>
               Применить
            </button>
         </form>
      </>
   );
};

export default AdminPage;
