export interface IAuthInitialState {
   isLoggedIn: boolean;
   isLoading: boolean;
}

export interface IAuth {
   email: string;
   password: string;
}

export interface IAuthResponse {
   user: {_id: string, email: string} | null
   accessToken: string
}
