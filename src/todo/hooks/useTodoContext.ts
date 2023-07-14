import { useContext, useReducer } from "react";
import { UserContext } from "../../auth";
import { TodoProps, TodoItem, TodoStateInterface } from "../interfaces/interfaces";
import { todosReducer } from "../reducers";
import TodoApi from "../../api/todo-api";
import { AxiosError} from "axios";
import Swal from 'sweetalert2';

const INITIAL_STATE: TodoStateInterface = {
  todos: [],
  isLoadingGettingTodos: true,
  isLoadingTodoAction: false,
};

export const useTodoContext = () => {
  const { token,checkToken } = useContext(UserContext);
  const [state, dispatch] = useReducer(todosReducer, INITIAL_STATE);
  const { todos, isLoadingTodoAction,isLoadingGettingTodos } = state;

  const fetchTodos = async () => {
    try {
      checkToken(token)
      dispatch({ type: "isLoadingGettingTodos", payload: true });
      const req = await TodoApi.get('api/todos')
      const {data} = req 
      dispatch({ type: "isLoadingGettingTodos", payload: false });
      dispatch({ type: "setTodos", payload: data.todos });
    } catch (error) {
      const err = error as AxiosError

      if(err.response?.status===401){
        Swal.fire({
          title: 'Warning',
          text: 'your session has expired',
          icon: 'info',
          confirmButtonText: 'Ok'
        })
      }

      dispatch({ type: "isLoadingGettingTodos", payload: false });
      console.log(error);
    }
  };
  
  const createTodo = async (formData: TodoProps) => {
    try {
      checkToken(token)
      dispatch({ type: "isLoadingTodoAction", payload: true });
      const req = await TodoApi.post('api/todos',formData)
      const {data} = req
      if (data.ok) {
        dispatch({ type: "addTodo", payload: data.todo });
        dispatch({ type: "isLoadingTodoAction", payload: false });
      }
    } catch (error) {
      const err = error as AxiosError

      if(err.response?.status===401){
        Swal.fire({
          title: 'Warning',
          text: 'your session has expired',
          icon: 'info',
          confirmButtonText: 'Ok'
        })
      }

      dispatch({ type: "isLoadingTodoAction", payload: false });
    }
  };
  
  const deleteTodo = async (id: number) => {
    try {
      checkToken(token)
      dispatch({ type: "isLoadingTodoAction", payload: true });
      const req = await TodoApi.delete(`api/todos`,{
        data: {
          id
        },
      })
      const {data} = req;
      if (data.ok) {
        dispatch({ type: "deleteTodo", payload: id });
        dispatch({ type: "isLoadingTodoAction", payload: false });
      }
    } catch (error) {
      const err = error as AxiosError

      if(err.response?.status===401){
        Swal.fire({
          title: 'Warning',
          text: 'your session has expired',
          icon: 'info',
          confirmButtonText: 'Ok'
        })
      }

      dispatch({ type: "isLoadingTodoAction", payload: false });
      console.log(error);
    }
  };
  
  const updateTodo = async (todo:TodoItem) => {
    try{
      await checkToken(token)


      dispatch({ type: "isLoadingTodoAction", payload: true });
      const req = await TodoApi.put(`api/todos`,{...todo,is_completed: !todo.is_completed})
      const {data} = req
      console.log( data)
      dispatch({ type: "isLoadingTodoAction", payload: false });
      if (data.ok) {
        dispatch({type:'updateTodo', payload: data.todo})
        
      }
    }catch(error){
      const err = error as AxiosError

      if(err.response?.status===401){
        Swal.fire({
          title: 'Warning',
          text: 'your session has expired',
          icon: 'info',
          confirmButtonText: 'Ok'
        })
      }

      dispatch({ type: "isLoadingTodoAction", payload: false });
      console.log(error)
    }
  }

  const searchTodo = async(search:string) =>{
    try {
      checkToken(token)
      dispatch({ type: "isLoadingTodoAction", payload: true });
      const req = await TodoApi.post('api/todos/search-todo',{search})

      const {data} = req

      dispatch({ type: "isLoadingTodoAction", payload: false });
      dispatch({type:"setTodos", payload:data.todos})
      
    } catch (error) {
      const err = error as AxiosError

      if(err.response?.status===401){
        Swal.fire({
          title: 'Warning',
          text: 'your session has expired',
          icon: 'info',
          confirmButtonText: 'Ok'
        })
      }

      dispatch({ type: "isLoadingTodoAction", payload: false });
      console.log(error);
    }
  }

  return {
    todos,
    fetchTodos,
    isLoadingTodoAction,
    isLoadingGettingTodos,
    createTodo,
    deleteTodo,
    updateTodo,
    searchTodo,
  };
};