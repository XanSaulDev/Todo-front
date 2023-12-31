export interface User {
  email:      string;
  first_name: string;
  last_name:  string;
  full_name:  string;
}

export interface UserState{
  user: User | undefined;
  isAuthenticated: boolean;
  token: string ;
  isLoading: boolean;
}

export interface UserContextProps extends UserState{
  handleRegister: (formData: FormDataUserRegister) => Promise<void>;
  handleLogin: (formData:FormDataUserLogin)=>Promise<void>;
  getUserData:()=>Promise<void>;
  handleLogout: ()=>void;
  getTokenFromLocalStorage:()=>Promise<void>;
  updateAccount: (formData: UserUpdateForm) => Promise<void>;
  checkToken: (tokenToCheck: string) => void;
}

export interface FormDataUserRegister{
  email: string;
  first_name: string;
  last_name: string;
}

export interface FormDataUserLogin{
  email: string;
  password: string;
}

export interface UserResponse {
  ok:      boolean;
  refresh: string;
  access:  string;
  user:    User;
  errors?: []
}

export interface UserUpdateForm{
  email:      string;
  first_name: string;
  last_name:  string;
}

// Generated by https://quicktype.io

export interface Jwt {
  token_type: string;
  exp:        number;
  iat:        number;
  jti:        string;
  user_id:    number;
}
