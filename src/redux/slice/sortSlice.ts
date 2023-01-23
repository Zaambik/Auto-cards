import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type SortItem = {
   index: number, name: string, property: string, type: string
}

interface ISortSlice {
   sortList: SortItem[], 
   selectedSort: SortItem
}
 
const initialState: ISortSlice = {
   sortList: [
      {index: 0, name: 'популярности', property: 'rating', type: 'asc'}, 
      {index: 1, name: 'популярности', property: 'rating', type: 'desc'},
      {index: 2, name:'цене', property: 'price', type: 'asc'}, 
      {index: 3, name:'цене', property: 'price', type: 'desc'}, 
      {index: 4, name: 'алфавиту', property: 'title', type: 'asc'}    
   ],
   selectedSort: {index: 1, name: 'популярности', property: 'rating', type: 'desc'}
}

export const sortSlice = createSlice({
   name: 'sort',
   initialState,
   reducers: {
      changeSelectedSort: (state, action: PayloadAction<SortItem>) => {
         state.selectedSort = action.payload
      },
   },
})

export const { changeSelectedSort } = sortSlice.actions

export default sortSlice.reducer