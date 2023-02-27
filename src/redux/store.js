import { configureStore } from '@reduxjs/toolkit'

import productsReducer from './slice/productsSlice'
import oneProductReducer from './slice/oneProductSlice'
import filtersReducer from './slice/filtersSlice'
import deleteProductReducer from './slice/deleteProductSlice';
import authReducer from './slice/authSlice';
import addProductReducer from './slice/addProductSlice';


export const store = configureStore({
   reducer: {
      products: productsReducer,
      filters: filtersReducer,
      oneProduct: oneProductReducer,
      deleteProduct: deleteProductReducer,
      auth: authReducer,
      addProduct: addProductReducer,
   },
});

