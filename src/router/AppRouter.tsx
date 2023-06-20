import React, { useContext, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthRoutes, UserContext } from '../auth'


export const AppRouter = () => {
  const { getTokenFromLocalStorage,isAuthenticated, isLoading } = useContext(UserContext)

  useEffect(()=>{
    getTokenFromLocalStorage()
  },[])

  if(isLoading){
    return (
      <h1>Loading...</h1>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        {
          isAuthenticated 
          ? <Route path="/*" element={<h1>asd</h1> } />
          : <Route path="/*" element={<AuthRoutes />} />
        }
      </Routes>
    </BrowserRouter>
  )
}
