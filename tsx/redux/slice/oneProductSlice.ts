import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

export const fetchOneProduct = createAsyncThunk('oneProduct/fetchOneProduct', async (id: string) => {
   const { data } = await axios.get(`http://localhost:4200/api/catalog/${id}`);
   return data;
});

interface IOneProduct {
   oneProduct: {
      _id: string;
      title: string;
      info: string;
      model: string;
      price: number;
      colors: string[];
      power: string;
      cub: string;
      year: string;
      type: string;
      img: string;
   } | null;
   status: 'loading' | 'success' | 'error';
}

const initialState: IOneProduct = {
   oneProduct: null,
   status: 'loading', // loading | success | error
};

export const oneProductSlice = createSlice({
   name: 'oneProduct',
   initialState,
   reducers: {
      updateStatus: (state, action: PayloadAction<'loading' | 'success' | 'error'>) => {
         state.status = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder.addCase(fetchOneProduct.pending, (state) => {
         state.status = 'loading';
         state.oneProduct = null;
      });
      builder.addCase(fetchOneProduct.fulfilled, (state, action) => {
         state.status = 'success';
         state.oneProduct = action.payload;
      });
      builder.addCase(fetchOneProduct.rejected, (state) => {
         state.status = 'error';
         state.oneProduct = null;
      });
   },
});

//Alternative to useSelector
export const getOneProduct = (state: RootState) => state.oneProduct.oneProduct;
export const productStatus = (state: RootState) => state.oneProduct.status;

export const { updateStatus } = oneProductSlice.actions;

export default oneProductSlice.reducer;
