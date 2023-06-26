import {  TodoResponse, TodoStateInterface } from "../interfaces/interfaces"

type actionTodo = | { type:'setTodos', payload: TodoResponse[] } 
                  | { type:'deleteTodo', payload: TodoResponse } 
                  | { type:'setIsLoagind',payload: boolean }
                  | { type: 'deleteTodo', payload: number }
                  | { type: 'addTodo', payload: TodoResponse }

export const todosReducer = (state:TodoStateInterface,action:actionTodo):TodoStateInterface => {
  switch(action.type){
    case "setTodos":
      return {
        ...state,
        todos: action.payload
      }
    case 'setIsLoagind':
      return {
        ...state,
        isLoading: action.payload
      }
    case 'deleteTodo':
      return {
        ...state,
        todos: state.todos.filter(todo=>todo.id!==action.payload)
      }
    case 'addTodo':
      return {
        ...state,
        todos: [action.payload,...state.todos], 
      }
    default:
      return state
  }
}