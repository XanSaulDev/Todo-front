import { useContext, useReducer } from "react"
import { UserContext } from "../../auth"
import { TodoResponse, TodoStateInterface } from "../interfaces/interfaces"
import { todosReducer } from "../reducers"

const INITIAL_STATE:TodoStateInterface = {
  todos:[]
}

export const useTodoContext = () => {

  const { token } = useContext(UserContext)
  const [state,dispatch] = useReducer(todosReducer,INITIAL_STATE)
  const { todos } = state

  const fetchTodos = async() => {
    try{
      const req = await fetch('http://127.0.0.1:8000/api/todos',{
        headers:{
          "Authorization": `Bearer ${token}`
        }
      })

      const resp:TodoResponse = await req.json()
      dispatch({type:'setTodos',payload:resp.todos})

    }catch(error){
      console.log(error)
    }
  }

  return{
    todos,
    fetchTodos
  }
}