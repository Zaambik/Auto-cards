import { removeTokenStorage, saveTokenStorage, saveToStorage } from './auth.helper';
import { axiosClassic } from '../api/interceptors';

export const AuthService = {
   async login(email, password) {
      const response = await axiosClassic.post('/auth/login', {
         email,
         password,
      });

      if (response.data.accessToken) saveTokenStorage(response.data);

      return response.data;
   },

   async register(email, password) {
      const response = await axiosClassic.post('/auth/register', {
         email,
         password,
      });

      if (response.data.accessToken) saveTokenStorage(response.data);

      return response.data;
   },

   logout() {
      removeTokenStorage();
   },
};
