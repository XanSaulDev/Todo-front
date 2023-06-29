import React, { useState } from 'react'
import { GlobalContext } from '../context'

interface GlobalContextProviderProps{
  children: JSX.Element | JSX.Element[] | React.ReactNode;
}

export const GlobalContextProvider = ({ children }:GlobalContextProviderProps) => {
  const [isLoading,setIsLoading] = useState(false)
  return (
    <GlobalContext.Provider value={{
      isLoading,
      setIsLoading
    }}>
      {children}
    </GlobalContext.Provider>
  )
}
