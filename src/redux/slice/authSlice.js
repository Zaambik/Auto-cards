import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AuthService } from '../../services/auth.service';

export const register = createAsyncThunk('auth/register', async ({ email, password }, thunkApi) => {
   try {
      const response = await AuthService.register(email, password);
      return response;
   } catch (error) {
      return thunkApi.rejectWithValue(error);
   }
});

export const login = createAsyncThunk('auth/login', async ({ email, password }, thunkApi) => {
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

const initialState = {
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

export const isLoading = (state) => state.auth.isLoading;
export const isLoggedIn = (state) => state.auth.isLoggedIn;

export const { refresh } = authSlice.actions;

export default authSlice.reducer;
