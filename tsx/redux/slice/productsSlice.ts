import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

type FetchProducts = {
   typeFilter?: string[];
   producerFilter?: string[];
   colorFilter?: string[];
   searchValue?: string;
   priceMin?: number;
   priceMax?: number;
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (params?: FetchProducts) => {
   const queryParams = params ? '?' : '';
   if (params?.searchValue) {
      const { data } = await axios.get(`http://localhost:4200/api/catalog${queryParams}searchTerm=${params.searchValue}`);
      return data;
   }
   const priceFilter = `priceFilter=${params?.priceMin === undefined ? 0 : params?.priceMin},${
      params?.priceMax === undefined ? 100000000 : params?.priceMax
   }&`;
   // if (params.priceMin !== 0 || params.priceMax !== 100000000) {
   //    priceFilter = `priceFilter=${params.priceMin},${params.priceMax}&`
   // }
   const typeFilter = params?.typeFilter?.length !== 0 && params?.typeFilter?.length !== undefined ? `typeFilter=${params?.typeFilter}&` : '';
   const producerFilter =
      params?.producerFilter?.length !== 0 && params?.producerFilter?.length !== undefined ? `modelFilter=${params?.producerFilter}&` : '';
   const colorFilter = params?.colorFilter?.length !== 0 && params?.colorFilter?.length !== undefined ? `colorsFilter=${params?.colorFilter}&` : '';
   const { data } = await axios.get(`http://localhost:4200/api/catalog${queryParams}${typeFilter}${producerFilter}${colorFilter}${priceFilter}`);
   return data;
});

interface IProducts {
   products: {
      _id: string;
      title: string;
      info: string;
      mode: string;
      price: number;
      colors: string[];
      power: string;
      cub: string;
      year: string;
      type: string;
      img: string;
   }[];
   status: 'loading' | 'success' | 'error';
}

const initialState: IProducts = {
   products: [],
   status: 'loading', // loading | success | error
};

export const productsSlice = createSlice({
   name: 'products',
   initialState,
   reducers: {
      updateStatus: (state, action: PayloadAction<'loading' | 'success' | 'error'>) => {
         state.status = action.payload;
      },
      filterProducts: (
         state,
         action: PayloadAction<{
            _id: string;
         }>,
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
export const getProducts = (state: RootState) => state.products.products;
export const productsStatus = (state: RootState) => state.products.status;

export const { updateStatus } = productsSlice.actions;
export const { filterProducts } = productsSlice.actions;

export default productsSlice.reducer;
