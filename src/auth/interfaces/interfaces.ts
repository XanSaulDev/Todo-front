export interface User{
  email: string;
  first_name: string;
  last_name: string;
}

export interface UserContextProps{
  user: User | undefined;
  handleRegister: (formData: FormDataUserRegister) => Promise<void>;
  handleLogin: (formData:FormDataUserLogin)=>Promise<void>;
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