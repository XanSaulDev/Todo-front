import { TodoProps, TodoStateInterface } from "../interfaces/interfaces"

type actionTodo = | { type:'setTodos', payload: TodoProps[] } 
                  | { type:'deleteTodo', payload: TodoProps } 
                  | { type:'setIsLoagind',payload: boolean }
                  | { type: 'deleteTodo', payload: number }

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

    default:
      return state
  }
}