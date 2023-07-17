import { useContext, useReducer } from "react"
import { FormDataUserLogin, FormDataUserRegister, Jwt, UserState, UserUpdateForm } from "../interfaces/interfaces"
import { userReducer } from "../reducers"

import jwt_decode from "jwt-decode";


import Swal from 'sweetalert2'

import { AxiosError } from "axios";
import { GlobalContext, TodoApi, modalErrors } from "../../shared";


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
      
      const req = await TodoApi.post('api/users/register',formData)
      const { data } = req

      globalSetLoading(false)

      dispatch({type:'loginUser', payload:{token:data.access,user:data.user}})
      
      localStorage.setItem('access',data.access)
      localStorage.setItem('refresh',data.refresh)
    }
    catch(error){
      const err = error as AxiosError
      console.log(err)
      if(err.response?.data){
        modalErrors(err)
        globalSetLoading(false)
        dispatch({ type:'setIsLoading', payload: false })
      }
    }
  }

  const handleLogin = async(formData:FormDataUserLogin)=>{
    try{
      globalSetLoading(true)

      dispatch({ type:'setIsLoading', payload: true })
      const req = await TodoApi.post('api/users/login',formData)
      const { data } = req
      
      globalSetLoading(false)
      dispatch({type:'loginUser', payload:{token:data.access,user:data.user}})

      localStorage.setItem('access',data.access)
      localStorage.setItem('user',JSON.stringify(data.user))
      localStorage.setItem('refresh',data.refresh)
    }
    catch(error){
      const err = error as AxiosError
      console.log(err)
      if(err.response?.data){
        modalErrors(err)
        globalSetLoading(false)
        dispatch({ type:'setIsLoading', payload: false })
      }
    }
  }
  
  const loadUserDataFromLocalStorage = async() =>{

    const userLocalStorage = await localStorage.getItem('user')
    dispatch({type:'startLoadingUserData'})

    if(userLocalStorage){
      const user = JSON.parse(userLocalStorage)
      dispatch({type:'handleLoadUserData', payload:{ user } })
      return true
    }
    return false
  }

  const getUserData = async() =>{

    if(isAuthenticated){
      
      const isLocalUserRetrieved = await loadUserDataFromLocalStorage()

      if(!isLocalUserRetrieved){
        
        try{
          dispatch({ type: 'startLoadingUserData' })

          const req =  await TodoApi.get('api/users')
          const { data } =  req
          const resp = data
  
          localStorage.setItem('user',JSON.stringify(resp.user))
          dispatch({type:'handleLoadUserData', payload:{ user:resp.user } })
        }
        catch(error){
          console.log(error)
          dispatch({ type:'setIsLoading', payload: false })
        }
      }
    }

  }

  const handleLogout = () =>{
    try{

      localStorage.removeItem('access')
      localStorage.removeItem('refresh')
      localStorage.removeItem('user')

      dispatch({type:"handleLogout"})

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

      Swal.fire({
        title: 'Success!',
        icon: 'success',
        confirmButtonText: 'Cool'
      })

      localStorage.setItem('user',JSON.stringify(data.user))
      dispatch({type:'handleUpdateUser', payload: { user:data.user } })
    }
    catch(error){
      const err = error as AxiosError

      modalErrors(err)
      dispatch({ type:'setIsLoading', payload: false })

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
    dispatch({ type:'handleRetrieveTokenLocalStorage', payload: { token:access } })

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