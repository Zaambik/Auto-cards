import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (params) => {
   const queryParams = params ? '?' : '';
   if (params?.searchValue) {
      const { data } = await axios.get(`http://localhost:8080/api/catalog${queryParams}searchTerm=${params.searchValue}`);
      return data;
   } else {
      const { data } = await axios.get(`http://localhost:8080/api/catalog`);
      return data;
   }
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
