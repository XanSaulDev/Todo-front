import { RoutesInterfaceNav } from "../../interfaces";
import { TodosPage } from "../pages";




export const todoRoutes:RoutesInterfaceNav[]=[
  {
    Component: TodosPage,
    to:`${process.env.REACT_APP_URL_HOME_ROOT}`,
    name:`Todos`,
    path:`${process.env.REACT_APP_URL_HOME_ROOT}`,
  },
]