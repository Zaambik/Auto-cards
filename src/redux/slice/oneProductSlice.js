import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchOneProduct = createAsyncThunk('oneProduct/fetchOneProduct', async (id)  => {
   const { data } = await axios.get(`http://localhost:8080/api/catalog/${id}`);
   return data;
});


const initialState = {
   oneProduct: null,
   status: 'loading', // loading | success | error
};

export const oneProductSlice = createSlice({
   name: 'oneProduct',
   initialState,
   reducers: {
      updateStatus: (state, action) => {
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
export const getOneProduct = (state) => state.oneProduct.oneProduct;
export const productStatus = (state) => state.oneProduct.status;

export const { updateStatus } = oneProductSlice.actions;

export default oneProductSlice.reducer;
