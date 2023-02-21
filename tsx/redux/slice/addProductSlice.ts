import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

type addProduct = {
   object: any;
   token: string;
};

export const addProduct = createAsyncThunk('addProduct', async (args: addProduct) => {
   const { data } = await axios.post(`http://localhost:4200/api/catalog/add`, {
      headers: { Authorization: `Bearer ${args.token}` },
      body: args.object,
   });
   return data;
});

interface IAddProduct {
   id: string;
   status: 'loading' | 'success' | 'error';
}

const initialState: IAddProduct = {
   id: '',
   status: 'loading', // loading | success | error
};

export const addProductSlice = createSlice({
   name: 'addProduct',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(addProduct.pending, (state) => {
         state.status = 'loading';
      });
      builder.addCase(addProduct.fulfilled, (state, action) => {
         state.id = action.payload;
         state.status = 'success';
      });
      builder.addCase(addProduct.rejected, (state) => {
         state.status = 'error';
      });
   },
});

export const addStatus = (state: RootState) => state.addProduct.status;

export default addProductSlice.reducer;
