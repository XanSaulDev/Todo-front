import { useContext, useReducer } from "react"
import { FormDataUserLogin, FormDataUserRegister, Jwt, UserResponse, UserState, UserUpdateForm } from "../interfaces/interfaces"
import { userReducer } from "../reducers"
import { GlobalContext } from "../../context"
import jwt_decode from "jwt-decode";


import Swal from 'sweetalert2'
import TodoApi from "../../api/todo-api";
import { AxiosError } from "axios";



const INITIAL_STATE:UserState = {
  user: undefined,
  isAuthenticated: false,
  token: '',
  isLoading: false
}


export const useUserContext = () => {
  const { setIsLoading: globalSetLoading } = useContext(GlobalContext)
  const [state,dispatch] = useReducer(userReducer,INITIAL_STATE)
  const { isAuthenticated,isLoading,token,user } = state

  const handleRegister = async(formData:FormDataUserRegister) => {
    try{
      globalSetLoading(true)
      dispatch({ type:'setIsLoading', payload: true })
      const req = await TodoApi.post('api/users',formData)
      const { data } = req
      const resp : UserResponse = data

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
      const req = await TodoApi.post('api/users/login',formData)
      const { data } = req
      
      if(!data.ok){
        const error = Object.entries(data.errors!).map(([key, value]) => (value))
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
      dispatch({ type:'setUser', payload: data.user })
      dispatch({ type:'setIsAuthenticated', payload: true })
      dispatch({ type:'setToken', payload: data.access })
      localStorage.setItem('access',data.access)
      localStorage.setItem('user',JSON.stringify(data.user))
      localStorage.setItem('refresh',data.refresh)
    }
    catch(error){
      console.log(error)
    }
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
        const req =  await TodoApi.get('api/users')
        const { data } =  req
        const resp = data

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
      checkToken(token)
      dispatch({ type:'setIsLoading', payload: true })
      const req = await TodoApi.put('api/users/',formData)
      const { data } = req

      

      if(!data.ok){
        const error = Object.entries(data.errors!).map(([key, value]) => (value))
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
      localStorage.setItem('user',JSON.stringify(data.user))
      dispatch({type:'setUser', payload:data.user})
    }
    catch(error){
    const err = error as AxiosError

      if(err.response?.status===401){
        Swal.fire({
          title: 'Warning',
          text: 'your session has expired',
          icon: 'info',
          confirmButtonText: 'Ok'
        })
      }

      console.log(error)
    }
  }

  const getTokenFromLocalStorage = async() =>{

    dispatch({ type:'setIsLoading', payload: true })

    const access = localStorage.getItem('access');
    
    if (!!!access){
      handleLogout()
      return
    } 
    checkToken(access)
    dispatch({ type:'setToken', payload: access })
    dispatch({ type:'setIsLoading', payload: false })
    dispatch({ type:'setIsAuthenticated', payload: true })
  }

  const checkToken = (tokenToCheck:string) => {

    const { exp } = jwt_decode<Jwt>(tokenToCheck)
    const expDate = new Date(exp*1000)
    const date = new Date()

    if (expDate.getTime() < date.getTime()){
      handleLogout()
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
    updateAccount,
    checkToken
  } 
}