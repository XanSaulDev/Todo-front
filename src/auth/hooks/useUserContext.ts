import { useState } from "react"
import { FormDataUserLogin, FormDataUserRegister, User } from "../interfaces/interfaces"

export const userUserContext = () => {
  const [user,setUser] = useState<User>()
  
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
      const resp = await req.json()

      if(!resp.ok){
        const error = Object.entries(resp.errors).map(([key, value]) => (value))
        throw new Error('Error al obtener los datos. Código de estado: '+ error );
      }
      setUser(resp.user)
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
      const resp = await req.json()
      console.log(resp)
      if(!resp.ok){
        const error = Object.entries(resp.errors).map(([key, value]) => (value))
        throw new Error('Error al obtener los datos. Código de estado: '+ error );
      }
      setUser(resp.user)
      
    }
    catch(error){
      console.log(error)
    }
  }
  

  return {
    user,
    handleRegister,
    handleLogin
  } 
}