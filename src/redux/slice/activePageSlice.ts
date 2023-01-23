import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IActivePage {
  value: number
}

const initialState: IActivePage = {
  value: 0,
}

export const activePageSlice = createSlice({
  name: 'activePage',
  initialState,
  reducers: {
    changeActivePage: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeActivePage } = activePageSlice.actions

export default activePageSlice.reducer