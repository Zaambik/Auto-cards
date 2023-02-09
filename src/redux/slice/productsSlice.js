import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (params) => {
   const queryParams = params ? '?' : '';
   if (params.searchValue) {
      const { data } = await axios.get(`http://localhost:4200/api/catalog${queryParams}searchTerm=${params.searchValue}`);
      return data;
   }
   const priceFilter = `priceFilter=${params.priceMin},${params.priceMax}&`
   // if (params.priceMin !== 0 || params.priceMax !== 100000000) {
   //    priceFilter = `priceFilter=${params.priceMin},${params.priceMax}&`
   // }
   const typeFilter = params?.typeFilter?.length !== 0 && params?.typeFilter?.length !== undefined ? `typeFilter=${params?.typeFilter}&` : '';
   const producerFilter = params?.producerFilter?.length !== 0 && params?.producerFilter?.length !== undefined ? `modelFilter=${params?.producerFilter}&` : '';
   const colorFilter = params?.colorFilter?.length !== 0 && params?.colorFilter?.length !== undefined ? `colorsFilter=${params?.colorFilter}&` : '';
   const { data } = await axios.get(`http://localhost:8080/api/catalog${queryParams}${typeFilter}${producerFilter}${colorFilter}${priceFilter}`);
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

export default productsSlice.reducer;
