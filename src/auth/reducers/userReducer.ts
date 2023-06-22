import { User, UserState } from "../interfaces/interfaces"

type UserAction = 
  { type:'setIsLoading', payload:boolean } |
  { type:'setUser', payload:User | undefined } | 
  { type:'setToken', payload:string } |
  { type:'setIsAuthenticated', payload: boolean }


export const userReducer = (state:UserState,action:UserAction):UserState => {

  switch(action.type){
    case 'setIsAuthenticated':
      return {
        ...state,
        isAuthenticated: action.payload
      }
    case 'setIsLoading':
      return {
        ...state,
        isLoading: action.payload
      }
    case 'setToken':
      return {
        ...state,
        token: action.payload
      }
    case "setUser":
      return {
        ...state,
        user: action.payload
      }
    default:
      return state
  }
}

