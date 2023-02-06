import { configureStore } from '@reduxjs/toolkit'

import productsReducer from './slice/productsSlice'
import oneProductReducer from './slice/oneProductSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    oneProduct: oneProductReducer
  },
})

