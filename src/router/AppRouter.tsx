import React, { useContext, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthRoutes, UserContext } from '../auth'
import { Loading } from '../components'
import { TodoRoutes } from '../todo/routes'



export const AppRouter = () => {
  const { getTokenFromLocalStorage,isAuthenticated, isLoading,getUserData } = useContext(UserContext)

  useEffect(()=>{
    getTokenFromLocalStorage()
  },[])

  useEffect(()=>{
    getUserData()
  },[isAuthenticated])

  if(isLoading){
    return (
      <Loading />
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        {
          isAuthenticated 
          ? <Route path="/*" element={<TodoRoutes />} />
          : <Route path="/*" element={<AuthRoutes />} />
        }
      </Routes>
    </BrowserRouter>
  )
}
