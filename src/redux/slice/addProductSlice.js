import { urlAPI } from './../../api/api.constants';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addProduct = createAsyncThunk('addProduct', async (args) => {
   const { data } = await axios.post(`${urlAPI  }/catalog/add`, { ...args.object }, { headers: { Authorization: 'Bearer ' + args.token } });
   console.log(args.token);
   return data;
});

const initialState = {
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

export const addStatus = (state) => state.addProduct.status;

export default addProductSlice.reducer;
