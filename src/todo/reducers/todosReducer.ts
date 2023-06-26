import {  TodoResponse, TodoStateInterface } from "../interfaces/interfaces"

type actionTodo = | { type:'setTodos', payload: TodoResponse[] } 
                  | { type:'deleteTodo', payload: TodoResponse } 
                  | { type:'setIsLoading',payload: boolean }
                  | { type: 'deleteTodo', payload: number }
                  | { type: 'addTodo', payload: TodoResponse } 
                  | { type: 'updateTodo', payload:TodoResponse }

export const todosReducer = (state:TodoStateInterface,action:actionTodo):TodoStateInterface => {
  switch(action.type){
    case "setTodos":
      return {
        ...state,
        todos: action.payload
      }
    case 'setIsLoading':
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
    case 'updateTodo':
      const newTodos = state.todos.map(todo=>{
        if(todo.id === action.payload.id){
          return action.payload
        }
        return todo
      })
      return {
        ...state,
        todos: newTodos
      }
    default:
      return state
  }
}