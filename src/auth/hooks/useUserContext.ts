import { useState } from "react"
import { FormDataUserLogin, FormDataUserRegister, User, UserResponse } from "../interfaces/interfaces"

// TODO: refactor duplicate code
// TODO: refactor state to reducer

export const useUserContext = () => {
  const [user,setUser] = useState<User>()
  const [isAuthenticated,setIsAuthenticated] = useState(true)
  const [token,setToken] = useState<string>()
  const [isLoading,setIsLoading] = useState(false) 
  
  const handleRegister = async(formData:FormDataUserRegister) => {
    try{
      
      const req = await fetch('http://localhost:8000/api/users/',{
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
        throw new Error('Error al obtener los datos. Código de estado: '+ error );
      }
      setIsLoading(false)
      setUser(resp.user)
      setToken(resp.access)
      setIsAuthenticated(true)
      localStorage.setItem('access',resp.access)
      localStorage.setItem('refresh',resp.refresh)
    }
    catch(error){
      console.log(error)
    }
  }

  const handleLogin = async(formData:FormDataUserLogin)=>{
    try{
      const req = await fetch('http://127.0.0.1:8000/api/users/login',{
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
        throw new Error('Error al obtener los datos. Código de estado: '+ error );
      }
      setIsLoading(false)
      setUser(resp.user)
      setIsAuthenticated(true)
      setToken(resp.access)
      localStorage.setItem('access',resp.access)
      localStorage.setItem('refresh',resp.refresh)
    }
    catch(error){
      console.log(error)
    }
  }
  
  
  const getTokenFromLocalStorage = async() =>{
    
    const access = localStorage.getItem('access');
    if (!!!access) {
      setIsAuthenticated(false)
      return 
    } 
    setIsLoading(false)
    setIsAuthenticated(true)
    setToken(access)
  }

  const getUserData = async() =>{
    try{
      setIsLoading(true)
      const req = await fetch('http://127.0.0.1:8000/api/users/',{
        method: 'GET',
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
          "Authentication": `Bearer ${token}`
        },
      })
      const resp = req.json()
      console.log(resp)
      setIsLoading(false)
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
    isLoading
  } 
}