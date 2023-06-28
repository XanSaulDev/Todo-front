import { useReducer } from "react"
import { FormDataUserLogin, FormDataUserRegister, UserResponse, UserState, UserUpdateForm } from "../interfaces/interfaces"
import { userReducer } from "../reducers"

// TODO: refactor duplicate code

const INITIAL_STATE:UserState = {
  user: undefined,
  isAuthenticated: false,
  token: '',
  isLoading: false
}


export const useUserContext = () => {

  const [state,dispatch] = useReducer(userReducer,INITIAL_STATE)
  const { isAuthenticated,isLoading,token,user } = state

  const handleRegister = async(formData:FormDataUserRegister) => {
    try{
      dispatch({ type:'setIsLoading', payload: true })
      const req = await fetch('http://192.168.100.12:8000/api/users/',{
        method: 'POST',
        body: JSON.stringify(formData),
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      const resp:UserResponse = await req.json()

      if(!resp.ok){
        const error = Object.entries(resp.errors!).map(([key, value]) => (value))
        dispatch({ type:'setIsLoading', payload: false })
        throw new Error('Error al obtener los datos. Código de estado: '+ error );
      }

      dispatch({ type:'setIsLoading', payload: false })
      dispatch({ type:'setUser', payload: resp.user })
      dispatch({ type:'setToken', payload: resp.access })
      dispatch({ type:'setIsAuthenticated', payload: true })
      localStorage.setItem('access',resp.access)
      localStorage.setItem('refresh',resp.refresh)
    }
    catch(error){
      console.log(error)
    }
  }

  const handleLogin = async(formData:FormDataUserLogin)=>{
    try{
      dispatch({ type:'setIsLoading', payload: true })
      const req = await fetch('http://192.168.100.12:8000/api/users/login',{
        method: 'POST',
        body: JSON.stringify(formData),
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      const resp:UserResponse = await req.json()
      
      if(!resp.ok){
        const error = Object.entries(resp.errors!).map(([key, value]) => (value))
        dispatch({ type:'setIsLoading', payload: false })
        throw new Error('Error al obtener los datos. Código de estado: '+ error );
      }
      
      dispatch({ type:'setIsLoading', payload: false })
      dispatch({ type:'setUser', payload: resp.user })
      dispatch({ type:'setIsAuthenticated', payload: true })
      dispatch({ type:'setToken', payload: resp.access })
      localStorage.setItem('access',resp.access)
      localStorage.setItem('refresh',resp.refresh)
    }
    catch(error){
      console.log(error)
    }
  }
  
  
  const getTokenFromLocalStorage = async() =>{
    dispatch({ type:'setIsLoading', payload: true })
    const access = localStorage.getItem('access');
    if (!!!access) {
      dispatch({ type:'setIsAuthenticated', payload: false })
      dispatch({ type:'setIsLoading', payload: false })
      return 
    } 
    dispatch({ type:'setIsLoading', payload: false })
    dispatch({ type:'setIsAuthenticated', payload: true })
    dispatch({ type:'setToken', payload: access })
  }

  const getUserData = async() =>{
    if(isAuthenticated){
      try{
        dispatch({ type:'setIsLoading', payload: true })
        const req = await fetch('http://192.168.100.12:8000/api/users/',{
          method: 'GET',
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
            "Authorization": `Bearer ${token}`
          },
        })
        const resp = await req.json()
        dispatch({type:"setUser",payload:resp.user})
        dispatch({ type:'setIsLoading', payload: false })
      }
      catch(error){
        console.log(error)
        dispatch({ type:'setIsLoading', payload: false })
      }
    }
  }

  const handleLogout = () =>{
    try{
      localStorage.removeItem('access')
      localStorage.removeItem('refresh')
      dispatch({type:"setIsAuthenticated", payload:false})
      dispatch({type:"setUser", payload: undefined })
      dispatch({type:"setToken", payload: '' })
    }catch(error){ 
      console.log(error)
    }
  }

  const updateAccount = async(formData:UserUpdateForm)=> {
    try{
      const req = await fetch('http://localhost:8000/api/users/',{
        method: 'PUT',
        body: JSON.stringify(formData),
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
          "Authorization": `Bearer ${token}`
        },
      })
      const resp = await req.json()

      if(!resp.ok){
        const error = Object.entries(resp.errors!).map(([key, value]) => (value))

        throw new Error('Error al obtener los datos. Código de estado: '+ error );
      }
      dispatch({type:'setUser', payload:resp.user})
    }
    catch(error){
      console.log(error)
    }
  }


  return {
    isAuthenticated,
    user,
    handleRegister,
    handleLogin,
    getTokenFromLocalStorage,
    getUserData,
    isLoading,
    handleLogout,
    token,
    updateAccount
  } 
}