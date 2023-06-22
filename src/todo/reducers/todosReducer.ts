import { TodoProps, TodoStateInterface } from "../interfaces/interfaces"

type actionTodo = | { type:'setTodos', payload: TodoProps[] } | { type:'deleteTodo', payload: TodoProps }

export const todosReducer = (state:TodoStateInterface,action:actionTodo):TodoStateInterface => {
  switch(action.type){
    case "setTodos":
      return {
        ...state,
        todos: action.payload
      }
    default:
      return state
  }
}