import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

export const fetchFilters = createAsyncThunk('filters/fetchFilters', async () => {
   const { data } = await axios.get(`http://localhost:4200/api/filters/`);
   return data;
});

interface IFilters {
   filters: {
      id: string;
      type: string;
      filters: {
         name: string;
         value: string;
      }[]
   }[];
   status: 'loading' | 'success' | 'error';
}

const initialState: IFilters = {
   filters: [],
   status: 'loading', // loading | success | error
};

export const filtersSlice = createSlice({
   name: 'filters',
   initialState,
   reducers: {
      updateFiltersStatus: (state, action: PayloadAction<'loading' | 'success' | 'error'>) => {
         state.status = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder.addCase(fetchFilters.pending, (state) => {
         state.status = 'loading';
         state.filters = [];
      });
      builder.addCase(fetchFilters.fulfilled, (state, action) => {
         state.status = 'success';
         state.filters = action.payload;
      });
      builder.addCase(fetchFilters.rejected, (state) => {
         state.status = 'error';
         state.filters = [];
      });
   },
});

//Alternative to useSelector
export const getFilters = (state: RootState) => state.filters.filters;
export const filtersStatus = (state: RootState) => state.filters.status;

export const { updateFiltersStatus } = filtersSlice.actions;

export default filtersSlice.reducer;
