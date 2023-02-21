import { FC, SetStateAction, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { isLoggedIn } from '../../../redux/slice/authSlice';
import Cookies from 'js-cookie';

import styles from './AddProduct.module.scss';
import { addProduct } from '../../../redux/slice/addProductSlice';
// import NameInput from './name-input/NameInput';

type props = {
   setActivePage: (value: SetStateAction<string>) => void;
};

const AdminPage: FC<props> = ({ setActivePage }) => {
   // const [amountPhoto, setAmountPhoto] = useState<{id: string, value: string | undefined}[]>([{id: nanoid(), value: undefined}])
   const [modelHead, setModelHead] = useState<string>();
   const [photo1, setPhoto1] = useState<string>();
   const [photo2, setPhoto2] = useState<string>();
   const [photo3, setPhoto3] = useState<string>();
   const [modelInfo, setModelInfo] = useState<string>();
   const [modelPrice, setModelPrice] = useState<number>();
   const [modelName, setModelName] = useState<string>();
   const [modelProducer, setModelProducer] = useState<string>();
   const [modelType, setModelType] = useState<string>();
   const [modelEngine, setModelEngine] = useState<string>();
   const [modelCub, setModelCub] = useState<string>();
   // TODO colors arn't string
   const [modelColors, setModelColors] = useState<string>();
   const [modelYear, setModelYear] = useState<string>();

   const dispatch = useAppDispatch()

   const isUser = useAppSelector(isLoggedIn);
   const token = Cookies.get('accessToken');


   useEffect(() => {
      setActivePage('catalog/add');
      window.scrollTo(0, 0);
   }, []);

   // const addPhotoInput = () => {
   //    if (amountPhoto[amountPhoto.length - 1].value !== undefined && amountPhoto.length <= 10) {
   //       setAmountPhoto([...amountPhoto, { id: nanoid(), value: '' }]);
   //    }
   // }

   const submitForm = () => {
      if (
         modelHead &&
         photo1 &&
         modelInfo &&
         modelPrice &&
         modelName &&
         modelProducer &&
         modelType &&
         modelEngine &&
         modelCub &&
         modelColors &&
         modelYear
      ) {
         const json = {
            title: modelHead,
            img: photo1,
            // photo2,
            // photo3,
            info: modelInfo,
            price: modelPrice,
            model: modelName,
            producer: modelProducer,
            type: modelType,
            engine: modelEngine,
            cub: modelCub,
            colors: [modelColors],
            year: modelYear,
         };
         dispatch(addProduct(json, token))
         console.log(json)
      } else {
         alert('все поля должны быть заполнены!')
      }
   };

   if (!isUser) {
      return <h2>страница недоступна</h2>
   }

   return (
      <>
         <h2>добавить модель</h2>
         <form className={styles.container}>
            <span className={styles.name}>
               <label htmlFor="modelHead">Заголовок</label>
               <input
                  id="modelHead"
                  name="modelHead"
                  value={modelHead}
                  onChange={(event) => setModelHead(event.target.value)}
                  type="text"
                  placeholder="< ЗАГАЛОВОК ДЛЯ СТРАНИЦЫ МОДЕЛИ />"
               />
            </span>
            <span className={styles.image}>
               <label htmlFor="modelPhoto">Фото:</label>
               {/* {amountPhoto.map((item, index) => (
                  <NameInput index={index} item={item} state={amountPhoto} setState={setAmountPhoto} />
               ))} */}
               {/* <button
                  className={
                     amountPhoto[amountPhoto.length - 1].value !== undefined && amountPhoto.length <= 10 ? styles.addPhoto : styles.disabledAddPhoto
                  }
                  type="button"
                  onClick={() => addPhotoInput()}>
                  +
               </button> */}
               <input
                  type="text"
                  id="modelPhoto"
                  value={photo1}
                  onChange={(event) => setPhoto1(event.target.value)}
                  name="modelPhoto"
                  placeholder={`< ССЫЛКА НА ОДНО ФОТО />`}
               />
               <input
                  type="text"
                  id="modelPhoto"
                  value={photo2}
                  onChange={(event) => setPhoto2(event.target.value)}
                  name="modelPhoto"
                  placeholder={`< ССЫЛКА НА ОДНО ФОТО />`}
               />
               <input
                  type="text"
                  value={photo3}
                  onChange={(event) => setPhoto3(event.target.value)}
                  name="modelPhoto"
                  placeholder={`< ССЫЛКА НА ОДНО ФОТО />`}
               />
            </span>
            <div className={styles.text}>
               <span className={styles.information}>
                  <label htmlFor="modelInfo">основная информация</label>
                  <textarea
                     id="modelInfo"
                     value={modelInfo}
                     onChange={(event) => setModelInfo(event.target.value)}
                     rows={10}
                     cols={40}
                     name="modelInfo"
                     placeholder="ИНФОРМАЦИЯ О МОДЕЛЕ"
                  />
               </span>
               <span className={styles.price}>
                  <label htmlFor="modelPrice">цена такого чуда</label>
                  <input
                     id="modelPrice"
                     type="number"
                     value={modelPrice}
                     onChange={(event) => setModelPrice(Number(event.target.value))}
                     name="modelPrice"
                     placeholder="ЦЕНА"
                  />
               </span>
               <div className={styles.feature}>
                  <h3>характеристики</h3>
                  <span>
                     <label htmlFor="modelName">модель</label>
                     <input
                        id="modelName"
                        type="text"
                        name="modelName"
                        value={modelName}
                        onChange={(event) => setModelName(event.target.value)}
                        placeholder="ПОЛНОЕ НАЗВАНИЕ"
                     />
                  </span>
                  <span>
                     <label htmlFor="modelProducer">производитель</label>
                     <input
                        id="modelProducer"
                        type="text"
                        name="modelProducer"
                        value={modelProducer}
                        onChange={(event) => setModelProducer(event.target.value)}
                        placeholder="НАЗВАНИЕ ПРОИЗВОДИТЕЛЯ"
                     />
                  </span>
                  <span>
                     <label htmlFor="modelType">тип</label>
                     <input
                        id="modelType"
                        type="text"
                        name="modelType"
                        value={modelType}
                        onChange={(event) => setModelType(event.target.value)}
                        placeholder="ТИП МОДЕЛИ"
                     />
                  </span>
                  <span>
                     <label htmlFor="modelEngine">мощность</label>
                     <input
                        id="modelEngine"
                        type="text"
                        name="modelEngine"
                        value={modelEngine}
                        onChange={(event) => setModelEngine(event.target.value)}
                        placeholder="МОЩНОСТЬ"
                     />
                  </span>
                  <span>
                     <label htmlFor="modelCapacity">кубатура</label>
                     <input
                        id="modelCapacity"
                        type="text"
                        name="modelCapacity"
                        value={modelCub}
                        onChange={(event) => setModelCub(event.target.value)}
                        placeholder="ОБЪЕМ ДВИГАТЕЛЯ"
                     />
                  </span>
                  <span>
                     <label htmlFor="modelColor">цвет</label>
                     <input
                        id="modelColor"
                        type="text"
                        name="modelColor"
                        value={modelColors}
                        onChange={(event) => setModelColors(event.target.value)}
                        placeholder="ЦВЕТА (ЧЕРЕЗ ЗАПЯТУЮ)"
                     />
                  </span>
                  <span>
                     <label htmlFor="modelYear">год</label>
                     <input
                        id="modelYear"
                        type="text"
                        name="modelYear"
                        value={modelYear}
                        onChange={(event) => setModelYear(event.target.value)}
                        placeholder="ГОД ПРОИЗВОДСТВА"
                     />
                  </span>
               </div>
            </div>
            <button type="button" onClick={() => submitForm()}>Применить</button>
         </form>
      </>
   )
};

export default AdminPage;
