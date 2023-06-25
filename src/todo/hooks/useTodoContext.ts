import { useContext, useReducer } from "react"
import { UserContext } from "../../auth"
import { TodoProps, TodoResponse, TodoStateInterface } from "../interfaces/interfaces"
import { todosReducer } from "../reducers"

const INITIAL_STATE:TodoStateInterface = {
  todos:[],
  isLoading: false,
}

export const useTodoContext = () => {

  const { token } = useContext(UserContext)
  const [state,dispatch] = useReducer(todosReducer,INITIAL_STATE)
  const { todos,isLoading } = state

  const fetchTodos = async() => {
    try{
      dispatch({type:"setIsLoagind",payload:true})
      const req = await fetch('http://127.0.0.1:8000/api/todos',{
        headers:{
          "Authorization": `Bearer ${token}`
        }
      })

      const resp:TodoResponse = await req.json()
      dispatch({type:"setIsLoagind",payload:false})
      dispatch({type:'setTodos',payload:resp.todos})
      
    }catch(error){
      dispatch({type:"setIsLoagind",payload:false})
      console.log(error)
    }
  }

  const createTodo = async(formData:TodoProps) =>{
    try{  
      const req = await fetch('http://127.0.0.1:8000/api/todos',{
        method: 'POST',
        body: JSON.stringify(formData),
        headers:{
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      })
      const resp = await req.json()
      if(resp.ok){
        
        dispatch({type:'addTodo',payload:resp.todo})
      }
    }catch(error){
      console.log(error)
    }
  }

  const deleteTodo = async(id:number)=>{
    try{  
      const req = await fetch('http://127.0.0.1:8000/api/todos',{
        method: 'DELETE',
        body: JSON.stringify({"id":id}),
        headers:{
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      })
      const resp = await req.json()
      if(resp.ok){
        dispatch({type:"deleteTodo",payload:id})
      }
    }catch(error){
      console.log(error)
    }
  }

  return{
    todos,
    fetchTodos,
    isLoading,
    createTodo,
    deleteTodo
  }
}