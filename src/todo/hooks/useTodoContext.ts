import { useContext, useReducer } from "react";
import { UserContext } from "../../auth";
import { TodoProps, TodoItem, TodoStateInterface } from "../interfaces/interfaces";
import { todosReducer } from "../reducers";

const INITIAL_STATE: TodoStateInterface = {
  todos: [],
  isLoading: true,
};

export const useTodoContext = () => {
  const { token } = useContext(UserContext);
  const [state, dispatch] = useReducer(todosReducer, INITIAL_STATE);
  const { todos, isLoading } = state;

  const fetchTodos = async () => {
    try {
      dispatch({ type: "setIsLoading", payload: true });
      const req = await fetch(`${process.env.REACT_APP_URL_API}api/todos`, {
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
      const req = await fetch(`${process.env.REACT_APP_URL_API}api/todos`, {
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
      const req = await fetch(`${process.env.REACT_APP_URL_API}api/todos`, {
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

  const updateTodo = async (todo:TodoItem) => {
    try{
      dispatch({ type: "setIsLoading", payload: true });
      const req = await fetch(`${process.env.REACT_APP_URL_API}api/todos`, {
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
      dispatch({ type: "setIsLoading", payload: false });
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
      const req = await fetch(`${process.env.REACT_APP_URL_API}api/todos/search-todo`, {
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
  };
};