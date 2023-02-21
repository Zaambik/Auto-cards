import { FC, useState, useEffect, Dispatch, SetStateAction } from 'react';

type props = {
   index: number;
   item: { id: string; value: string | undefined };
   state: { id: string; value: string | undefined }[];
   setState: Dispatch<
      SetStateAction<
         {
            id: string;
            value: string | undefined;
         }[]
      >
   >;
};

const NameInput: FC<props> = ({ index, item, state, setState }) => {

   const [photo, setPhoto] = useState<string>('')
   
   const onChangeInput = (event: {target: HTMLInputElement}) => {
      setPhoto(event.target.value)
   }

   const onSaveInput = (id: string) => {
      state.filter((item) => item.id !== id);
      setState([...state, { id, value: photo }]);
   };

   return (
      <>
         <input
            key={index}
            type="text"
            id="modelPhoto"
            value={photo}
            onChange={(event) => onChangeInput(event)}
            name="modelPhoto"
            placeholder={`< ССЫЛКА НА ОДНО ФОТО />`}
         />
         <button onClick={() => onSaveInput(item.id)} type="button">
            save
         </button>
      </>
   );
};

export default NameInput;
