import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '../store'

type FetchCardsParams = {
  currentPage: number, 
  filterBrand: {index: number, title: string, data: string},
  selectedSort: {index: number, name: string, property: string, type: string},
  searchValue: string
}

export const fetchShopCards = createAsyncThunk(
  'shopCards/fetchCardsStatus',
  async (params: FetchCardsParams) => {
    const {currentPage, filterBrand, selectedSort, searchValue} = params
    const { data } = await axios.get(`https://6241abd3042b562927a77458.mockapi.io/goods?page=${currentPage}&limit=9&filter=${encodeURIComponent(filterBrand.data)}&sortBy=${selectedSort.property}&order=${selectedSort.type}&search=${searchValue}`)
    return data 
  }
)

interface IShopCards {
  shopCards: {                                    
    id: string, 
    code: string, 
    title: string,
    img: string,
    price: number,
    producer: string,
    rating: number,
    count?: number
  }[],
  status: 'loading' | 'success' | 'error'
}

const initialState: IShopCards = {
  shopCards: [],
  status: 'loading' // loading | success | error
} 

export const shopCardsSlice = createSlice({
  name: 'shopCards',
  initialState,
  reducers: {
    updateShopCards: (state, action: PayloadAction<{
      id: string, 
      code: string, 
      title: string,
      img: string,
      price: number,
      producer: string,
      rating: number,
      count?: number
    }[]>) => {
      state.shopCards = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchShopCards.pending, (state) => {
      state.status = 'loading'
      state.shopCards = []
    })
    builder.addCase(fetchShopCards.fulfilled, (state, action) => {
      state.status = 'success'
      state.shopCards = action.payload
    })
    builder.addCase(fetchShopCards.rejected, (state) => {
      state.status = 'error'
      state.shopCards = []
    })
  } 
})

//Alternative to useSelector
export const getShopCards = (state: RootState) => state.shopCards.shopCards

export const { updateShopCards } = shopCardsSlice.actions

export default shopCardsSlice.reducer