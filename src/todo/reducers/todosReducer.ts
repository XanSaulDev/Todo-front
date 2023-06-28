import {  TodoItem, TodoStateInterface } from "../interfaces/interfaces"

type actionTodo = | { type:'setTodos', payload: TodoItem[] } 
                  | { type:'deleteTodo', payload: TodoItem } 
                  | { type:'setIsLoading',payload: boolean }
                  | { type: 'deleteTodo', payload: number }
                  | { type: 'addTodo', payload: TodoItem } 
                  | { type: 'updateTodo', payload:TodoItem }

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