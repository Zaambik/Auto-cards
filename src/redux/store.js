import { configureStore } from '@reduxjs/toolkit'

import productsReducer from './slice/productsSlice'
import oneProductReducer from './slice/oneProductSlice'
import filtersReducer from './slice/filtersSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    filters: filtersReducer,
    oneProduct: oneProductReducer
  },
})

