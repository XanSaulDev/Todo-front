import React from 'react'
import { UserContext } from '../context'
import { useUserContext } from '../hooks'

interface UserProviderProps{
  children?: JSX.Element | JSX.Element[] | undefined
}


export const UserProvider = ({children}:UserProviderProps) => {
  
  const { handleLogin,
    handleRegister,
    user,isAuthenticated,
    getUserData,
    getTokenFromLocalStorage,
    isLoading } = useUserContext()
  
  return (
    <UserContext.Provider value={{
    isAuthenticated,
    user,
    handleRegister,
    handleLogin,
    getUserData,
    getTokenFromLocalStorage,
    isLoading
    }}>
      {children}
    </UserContext.Provider>
  )
}
