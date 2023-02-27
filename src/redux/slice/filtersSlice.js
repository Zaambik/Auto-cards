import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { urlAPI } from '../../api/api.constants';

export const fetchFilters = createAsyncThunk('filters/fetchFilters', async () => {
   const { data } = await axios.get(`${urlAPI}/filters/`);
   return data;
});

const initialState  = {
   filters: [],
   status: 'loading', // loading | success | error
};

export const filtersSlice = createSlice({
   name: 'filters',
   initialState,
   reducers: {
      updateFiltersStatus: (state) => {
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
export const getFilters = (state) => state.filters.filters;
export const filtersStatus = (state) => state.filters.status;

export const { updateFiltersStatus } = filtersSlice.actions;

export default filtersSlice.reducer;
