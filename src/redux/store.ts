import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';

import activePageReducer from './slice/activePageSlice'
import shopCardsReducer from './slice/shopCardsSlice'
import sortSliceReducer from './slice/sortSlice'
import filterSliceReducer from './slice/filterSlice'
import cartSliceReducer from './slice/cartSlice'

export const store = configureStore({
  reducer: {
    activePage: activePageReducer,
    shopCards: shopCardsReducer,
    sort: sortSliceReducer,
    filter: filterSliceReducer,
    cart: cartSliceReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();


