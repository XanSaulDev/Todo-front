export interface User {
  email:      string;
  first_name: string;
  last_name:  string;
  full_name:  string;
}

export interface UserContextProps{
  user: User | undefined;
  isAuthenticated: boolean;
  handleRegister: (formData: FormDataUserRegister) => Promise<void>;
  handleLogin: (formData:FormDataUserLogin)=>Promise<void>;
  getUserData:()=>Promise<void>;
  handleLogout: ()=>void;
  getTokenFromLocalStorage:()=>Promise<void>;
  isLoading: boolean;
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

export interface UserState{
  user: User | undefined;
  isAuthenticated: boolean;
  token: string;
  isLoading: boolean;
}
