import { useContext, useReducer } from "react";
import { UserContext } from "../../auth";
import { TodoProps, TodoResponse, TodoStateInterface } from "../interfaces/interfaces";
import { todosReducer } from "../reducers";

const INITIAL_STATE: TodoStateInterface = {
  todos: [],
  totalOfTodos: 0,
  isLoading: false,
};

export const useTodoContext = () => {
  const { token } = useContext(UserContext);
  const [state, dispatch] = useReducer(todosReducer, INITIAL_STATE);
  const { todos, isLoading,totalOfTodos } = state;

  const fetchTodos = async () => {
    try {
      dispatch({ type: "setIsLoading", payload: true });
      const req = await fetch("http://192.168.100.12:8000/api/todos", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const resp = await req.json();
      dispatch({ type: "setIsLoading", payload: false });
      dispatch({ type: "setTodos", payload: resp.todos });
    } catch (error) {
      dispatch({ type: "setIsLoading", payload: false });
      console.log(error);
    }
  };

  const createTodo = async (formData: TodoProps) => {
    try {
      const req = await fetch("http://192.168.100.12:8000/api/todos", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const resp = await req.json();
      if (resp.ok) {
        dispatch({ type: "addTodo", payload: resp.todo });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (id: number) => {
    try {
      const req = await fetch("http://192.168.100.12:8000/api/todos", {
        method: "DELETE",
        body: JSON.stringify({ id }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const resp = await req.json();
      if (resp.ok) {
        dispatch({ type: "deleteTodo", payload: id });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateTodo = async (todo:TodoResponse) => {
    try{
      const req = await fetch("http://192.168.100.12:8000/api/todos", {
        method: "PUT",
        body: JSON.stringify({ 
          ...todo,
          is_completed: !todo.is_completed
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const resp = await req.json();
      if (resp.ok) {
        dispatch({type:'updateTodo', payload: resp.todo})
        
      }
    }catch(error){
      console.log(error)
    }
  }

  const searchTodo = async(search:string) =>{
    try {
      dispatch({ type: "setIsLoading", payload: true });
      const req = await fetch("http://127.0.0.1:8000/api/todos/search-todo", {
        method: 'POST',
        body: JSON.stringify({search,}),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const resp = await req.json();
      console.log(resp)
      dispatch({type:"setTodos", payload:resp.todos})
    } catch (error) {

      console.log(error);
    }
  }

  return {
    todos,
    fetchTodos,
    isLoading,
    createTodo,
    deleteTodo,
    updateTodo,
    searchTodo,
    totalOfTodos
  };
};