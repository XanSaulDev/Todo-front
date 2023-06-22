import { TodoProps, TodoStateInterface } from "../interfaces/interfaces"

type actionTodo = | { type:'setTodos', payload: TodoProps[] } 
                  | { type:'deleteTodo', payload: TodoProps } 
                  | { type:'setIsLoagind',payload: boolean }

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
    default:
      return state
  }
}