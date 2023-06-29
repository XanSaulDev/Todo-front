import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthRoutes, UserContext } from '../auth'
import { Loading } from '../components'
import { TodoRoutes } from '../todo/routes'
import { GlobalContext } from '../context'



export const AppRouter = () => {
  const { isAuthenticated } = useContext(UserContext)
  const { isLoading } = useContext(GlobalContext)

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
