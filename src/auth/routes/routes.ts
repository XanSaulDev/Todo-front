import { RoutesInterfaceNav } from "../../interfaces";
import { Login, Register } from "../pages";

export const authRoutes:RoutesInterfaceNav[] = [
  {
    path: `${process.env.REACT_APP_URL_HOME_ROOT}login`,
    Component: Login,
    name: 'Login',
    to: `${process.env.REACT_APP_URL_HOME_ROOT}login`,
    className: 'border-2 py-2 px-5 rounded-md hover:border-teal-400'
  },
  {
    path: `${process.env.REACT_APP_URL_HOME_ROOT}register`,
    Component: Register,
    name: 'Register',
    to: `${process.env.REACT_APP_URL_HOME_ROOT}register`
  },
]