import { RoutesInterfaceNav } from "../../interfaces";
import { TodosPage } from "../pages";




export const todoRoutes:RoutesInterfaceNav[]=[
  {
    Component: TodosPage,
    to:"/",
    name:"Todos",
    path:"",
  },
]