
import { RoutesInterfaceNav } from "../../shared";
import { Login, Register } from "../pages";

export const authRoutes:RoutesInterfaceNav[] = [
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