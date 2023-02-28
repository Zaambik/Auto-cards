import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { urlAPI } from '../../api/api.constants';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (params) => {
   const queryParams = params ? '?' : '';
   if (params.searchValue) {
      const { data } = await axios.get(`${urlAPI}/catalog${queryParams}searchTerm=${params.searchValue}`);
      return data;
   }
   const priceFilter = `priceFilter=${params?.priceMin === undefined ? 0 : params?.priceMin},${
      params?.priceMax === undefined ? 100000000 : params?.priceMax
   }&`;  
   const producerFilter = params?.producerFilter?.length !== 0 && params?.producerFilter?.length !== undefined ? `modelFilter=${params?.producerFilter}&` : '';
   const { data } = await axios.get(`${urlAPI}/catalog${queryParams}${producerFilter}${priceFilter}`);
   return data;
});

const initialState = {
   products: [],
   status: 'loading', // loading | success | error
};

export const productsSlice = createSlice({
   name: 'products',
   initialState,
   reducers: {
      updateStatus: (state, action) => {
         state.status = action.payload;
      },
      filterProducts: (
         state,
         action
      ) => {
         state.products = state.products.filter((item) => item._id !== action.payload._id);
      },
   },
   extraReducers: (builder) => {
      builder.addCase(fetchProducts.pending, (state) => {
         state.status = 'loading';
         state.products = [];
      });
      builder.addCase(fetchProducts.fulfilled, (state, action) => {
         state.status = 'success';
         state.products = action.payload;
      });
      builder.addCase(fetchProducts.rejected, (state) => {
         state.status = 'error';
         state.products = [];
      });
   },
});

//Alternative to useSelector
export const getProducts = (state) => state.products.products;
export const productsStatus = (state) => state.products.status;

export const { updateStatus } = productsSlice.actions;
export const { filterProducts } = productsSlice.actions;

export default productsSlice.reducer;
