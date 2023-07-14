import React, { useEffect } from 'react'
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
    isLoading,
    handleLogout,
    token,
    updateAccount,
    checkToken
    } = useUserContext()


    useEffect(()=>{
      getTokenFromLocalStorage()
    },[])
  
    useEffect(()=>{
      getUserData()
    },[isAuthenticated])
  
  return (
    <UserContext.Provider value={{
    isAuthenticated,
    user,
    handleRegister,
    handleLogin,
    getUserData,
    getTokenFromLocalStorage,
    isLoading,
    handleLogout,
    token,
    updateAccount,
    checkToken
    }}>
      {children}
    </UserContext.Provider>
  )
}
