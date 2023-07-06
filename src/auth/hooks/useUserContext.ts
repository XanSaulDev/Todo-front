import { useContext, useReducer } from "react"
import { FormDataUserLogin, FormDataUserRegister, Jwt, UserResponse, UserState, UserUpdateForm } from "../interfaces/interfaces"
import { userReducer } from "../reducers"
import { GlobalContext } from "../../context"
import jwt_decode from "jwt-decode";

// ES6 Modules or TypeScript
import Swal from 'sweetalert2'



const INITIAL_STATE:UserState = {
  user: undefined,
  isAuthenticated: false,
  token: '',
  isLoading: false
}


export const useUserContext = () => {
  const { setIsLoading: globalSetLoading, isLoading: globalLoading } = useContext(GlobalContext)
  const [state,dispatch] = useReducer(userReducer,INITIAL_STATE)
  const { isAuthenticated,isLoading,token,user } = state

  const handleRegister = async(formData:FormDataUserRegister) => {
    try{
      globalSetLoading(true)
      dispatch({ type:'setIsLoading', payload: true })
      const req = await fetch(`${process.env.REACT_APP_URL_API}api/users/`,{
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
        Swal.fire({
          title: 'Error!',
          text: error.toString(),
          icon: 'error',
          confirmButtonText: 'Cool'
        })
        globalSetLoading(false)
        dispatch({ type:'setIsLoading', payload: false })
        throw new Error('Error al obtener los datos. Código de estados: '+ error );
      }
      
      globalSetLoading(false)
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
      globalSetLoading(true)
      dispatch({ type:'setIsLoading', payload: true })
      const req = await fetch(`${process.env.REACT_APP_URL_API}api/users/login`,{
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
        Swal.fire({
          title: 'Error!',
          text: error.toString(),
          icon: 'error',
          confirmButtonText: 'Cool'
        })
        globalSetLoading(false)
        dispatch({ type:'setIsLoading', payload: false })
        throw new Error('Error al obtener los datos. Código de estados: '+ error );
      }
      
      globalSetLoading(false)
      dispatch({ type:'setIsLoading', payload: false })
      dispatch({ type:'setUser', payload: resp.user })
      dispatch({ type:'setIsAuthenticated', payload: true })
      dispatch({ type:'setToken', payload: resp.access })
      localStorage.setItem('access',resp.access)
      localStorage.setItem('user',JSON.stringify(resp.user))
      localStorage.setItem('refresh',resp.refresh)
    }
    catch(error){
      console.log(error)
    }
  }
  
  
  const getTokenFromLocalStorage = async() =>{

    dispatch({ type:'setIsLoading', payload: true })

    const access = localStorage.getItem('access');

    if (!!!access){
      dispatch({ type:'setIsAuthenticated', payload: false })
      dispatch({ type:'setIsLoading', payload: false })
      return
    } 
    
    const { exp } = jwt_decode<Jwt>(access)
    const date = new Date()

    if (exp < date.getTime()){
      localStorage.removeItem('token')
      dispatch({ type:'setIsAuthenticated', payload: false })
      dispatch({ type:'setIsLoading', payload: false })
    }
    

    dispatch({ type:'setIsLoading', payload: false })
    dispatch({ type:'setIsAuthenticated', payload: true })
    dispatch({ type:'setToken', payload: access })
  }

  const getUserData = async() =>{
    if(isAuthenticated){
      const userLocalStorage = localStorage.getItem('user')
      
      if(userLocalStorage){
        const user = JSON.parse(userLocalStorage)
        dispatch({type:"setUser",payload:user})
        return
      }
      try{
        dispatch({ type:'setIsLoading', payload: true })
        const req = await fetch(`${process.env.REACT_APP_URL_API}api/users/`,{
          method: 'GET',
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
            "Authorization": `Bearer ${token}`
          },
        })
        const resp = await req.json()
        localStorage.setItem('user',JSON.stringify(resp.user))
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
      localStorage.removeItem('user')
      dispatch({type:"setIsAuthenticated", payload:false})
      dispatch({type:"setUser", payload: undefined })
      dispatch({type:"setToken", payload: '' })
    }catch(error){ 
      console.log(error)
    }
  }
  
  const updateAccount = async(formData:UserUpdateForm)=> {
    try{
      dispatch({ type:'setIsLoading', payload: true })
      const req = await fetch(`${process.env.REACT_APP_URL_API}api/users/`,{
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
        Swal.fire({
          title: 'Error!',
          text: error.toString(),
          icon: 'error',
          confirmButtonText: 'Cool'
        })
        dispatch({ type:'setIsLoading', payload: false })
        throw new Error('Error al obtener los datos. Código de estados: '+ error );
      }
      Swal.fire({
        title: 'Success!',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
      dispatch({ type:'setIsLoading', payload: false })
      localStorage.setItem('user',JSON.stringify(resp.user))
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