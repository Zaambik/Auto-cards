import { IAuth, IAuthResponse } from './../types/authTypes';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IAuthInitialState } from '../types/authTypes';
import { AuthService } from '../../services/auth.service';
import { RootState } from '../store';

export const register = createAsyncThunk<IAuthResponse, IAuth>('auth/register', async ({ email, password }, thunkApi) => {
   try {
      const response = await AuthService.register(email, password);
      return response;
   } catch (error) {
      return thunkApi.rejectWithValue(error);
   }
});

export const login = createAsyncThunk<IAuthResponse, IAuth>('auth/login', async ({ email, password }, thunkApi) => {
   try {
      const response = await AuthService.login(email, password);
      return response;
   } catch (error) {
      return thunkApi.rejectWithValue(error);
   }
});

export const logout = createAsyncThunk('auth/logout', () => {
   AuthService.logout();
});

const initialState: IAuthInitialState = {
   isLoading: false,
   isLoggedIn: false,
};

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      refresh: (state) => {
         state.isLoggedIn = true;
      }
   },
   extraReducers: (builder) => {
      builder
         .addCase(register.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(register.fulfilled, (state) => {
            state.isLoading = false;
            state.isLoggedIn = true;
         })
         .addCase(register.rejected, (state) => {
            state.isLoading = false;
            state.isLoggedIn = false;
         })
         .addCase(login.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(login.fulfilled, (state) => {
            state.isLoading = false;
            state.isLoggedIn = true;
         })
         .addCase(login.rejected, (state) => {
            state.isLoading = false;
            state.isLoggedIn = false;
         })
         .addCase(logout.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(logout.fulfilled, (state) => {
            state.isLoading = false;
            state.isLoggedIn = false;
         })
         .addCase(logout.rejected, (state) => {
            state.isLoading = false;
            state.isLoggedIn = false;
         });
   },
});

export const isLoading = (state: RootState) => state.auth.isLoading;
export const isLoggedIn = (state: RootState) => state.auth.isLoggedIn;

export const { refresh } = authSlice.actions;

export default authSlice.reducer;
