import React, { useState } from 'react'
import { UserContext } from '../context'
import { FormDataUserLogin, FormDataUserRegister, User } from '../interfaces/interfaces'
import { useUserContext } from '../hooks'

interface UserProviderProps{
  children?: JSX.Element | JSX.Element[] | undefined
}


export const UserProvider = ({children}:UserProviderProps) => {
  
  const { handleLogin,handleRegister,user } = useUserContext()
  
  return (
    <UserContext.Provider value={{
    user,
    handleRegister,
    handleLogin
    }}>
      {children}
    </UserContext.Provider>
  )
}
