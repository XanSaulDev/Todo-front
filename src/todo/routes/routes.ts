import { useContext } from "react";
import { RoutesInterfaceNav } from "../../interfaces";
import { TodosPage } from "../pages";
import { UserContext } from "../../auth";


export const todoRoutes:RoutesInterfaceNav[]=[
  {
    Component: TodosPage,
    to:"/",
    name:"Todos",
    path:"",
  },
]