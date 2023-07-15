import { User, UserState } from "../interfaces/interfaces"

type UserAction = 
  { type:'setIsLoading', payload:boolean } |
  { type:'setUser', payload: User | undefined } | 
  { type:'setToken', payload:string } |
  { type:'setIsAuthenticated', payload: boolean } |
  {
    type: 'loginUser', payload: 
    {  
      user: User,
      token: '',
    }
  } |
  {
    type: 'startLoadingUserData'
  } |
  {
    type: 'handleLoadUserData', payload: { user: User }
  } |
  {
    type: 'handleLogout'
  } |
  {
    type:'handleUpdateUser', payload: { user: User}
  } |
  {
    type: 'handleRetrieveTokenLocalStorage', payload: { token:string  }
  }
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
    case 'loginUser':
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token
      }
    case 'startLoadingUserData':
      return {
        ...state,
        isLoading: true,
        isAuthenticated: false
      }
    case 'handleLoadUserData':
      return {
        ...state,
        user: action.payload.user,
        isLoading: false,
        isAuthenticated: true
      }
    case 'handleLogout':
      return {
        ...state,
        isAuthenticated: false,
        user: undefined,
        token: '',
        isLoading: false
      }
    case 'handleUpdateUser':
      return {
        ...state,
        isLoading: false,
        user: action.payload.user
      }
    case 'handleRetrieveTokenLocalStorage':
      return {
        ...state,
        token: action.payload.token,
        isLoading: false,
        isAuthenticated: true
      }
    default:
      return state
  }
}

