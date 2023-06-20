import { Login, Register } from "../pages";


interface Routes{
  path: string;
  Component: () => JSX.Element;
  to: string;
  name: string;
  className?: string;
}

export const authRoutes:Routes[] = [
  {
    path: 'login',
    Component: Login,
    name: 'Login',
    to: '/login',
    className: 'border-2 py-2 px-5 rounded-md hover:border-teal-400'
  },
  {
    path: 'register',
    Component: Register,
    name: 'Register',
    to: '/register'
  },
]