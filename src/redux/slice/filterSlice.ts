import { createSlice, PayloadAction } from '@reduxjs/toolkit';


type FilterItem = {
  index: number, title: string, data: string
}

interface IFilterSlice { 
  filterList: FilterItem[],
  selectedFilter: FilterItem
}

const initialState: IFilterSlice = {
  filterList: [
    { index: 1, title: 'all', data: '' },
    { index: 2, title: 'baxter of california', data: 'baxter of california' },
    { index: 3, title: 'mr natty', data: 'mr natty' },
    { index: 4, title: 'suavecito', data: 'suavecito' },
    { index: 5, title: 'malin+goetz', data: 'malin' },
    { index: 6, title: "murray's", data: "murray's" },
    { index: 7, title: 'american crew', data: 'american crew' },
  ],
  selectedFilter: { index: 1, title: 'all', data: '' },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilterList: (state, action: PayloadAction<FilterItem[]>) => {
      state.filterList = action.payload;
    },
    changeSelectedFilter: (state, action: PayloadAction<FilterItem>) => {
      state.selectedFilter = action.payload;
    },
  },
});

export const { changeSelectedFilter } = filterSlice.actions;

export default filterSlice.reducer;
