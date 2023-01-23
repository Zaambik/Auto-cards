import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchCart = createAsyncThunk(
   'cart/fetchCartStatus',
   async () => {
      const { data } = await axios.get(`https://6241abd3042b562927a77458.mockapi.io/itemsOfCart`)
      return data
   }
)

type ShopCard = {
   id: string, 
   code: string, 
   title: string,
   img: string,
   price: number,
   producer: string,
   rating: number,
   count?: number
}


type CartCard = {
   id: string, 
   code: string, 
   title: string,
   img: string,
   price: number,
   producer: string,
   rating: number,
   count: number
}

interface ICartSlice {
   cartItems: CartCard[],
   totalPrice: number,
   status:  'loading' | 'success' | 'error'
}

const initialState: ICartSlice = {
   cartItems: [],
   totalPrice: 0,
   status: 'loading' // loading | success | error
}

const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addItem(state, action: PayloadAction<ShopCard>) {
         const findItem = state.cartItems.find(obj => Number(obj.code) === Number(action.payload.code))

         if (findItem) {
            findItem.count && findItem.count++
         } else {
            state.cartItems.push({
               ...action.payload,
               count: 1
            })
         }

         state.totalPrice = state.cartItems.reduce((sum, obj) => {
            return (obj.price * obj.count) + sum
         }, 0)
      },
      removeItem(state, action: PayloadAction<ShopCard>) {
         const findItem = state.cartItems.find(obj => Number(obj.code) === Number(action.payload.code))

         if ( findItem && findItem.count && findItem.count > 1) {
            findItem.count--
         } else {
            state.cartItems = state.cartItems.filter(obj => Number(obj.code !== action.payload.code))
         }

         state.totalPrice = state.totalPrice - action.payload.price
      },
      clearItems(state) {
         state.cartItems = []
         state.totalPrice = 0
      }
   },
   extraReducers: (builder) => {
      builder.addCase(fetchCart.pending, (state) => {
         state.status = 'loading'
         state.cartItems = []
      })
      builder.addCase(fetchCart.fulfilled, (state, action) => {
         state.status = 'success' 
         action.payload.map((obj: ShopCard) => {
            const findItem = state.cartItems.find(item => Number(item.code) === Number(obj.code))

            if (findItem) {
               findItem.count && findItem.count++
            } else {
               state.cartItems.push(
                  { ...obj, count: 1}
               )
            }
         })
         state.totalPrice = state.cartItems.reduce((sum, obj) => {
            return (obj.price * obj.count) + sum
         }, 0)
      })
      builder.addCase(fetchCart.rejected, (state) => {
         state.status = 'error'
         state.cartItems = []
      })
   } 
})

export const { addItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;

