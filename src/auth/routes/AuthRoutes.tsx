import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthLayout } from '../layout'
import { authRoutes } from './routes'



export const AuthRoutes = () => {
  return (
    <AuthLayout>
      <Routes>
        {
          authRoutes.map(({Component,path})=>(
            <Route key={path} path={path} element={<Component />} />
          ))
        }
        <Route path="*" element={<Navigate to="login" replace />} />
      </Routes>
    </AuthLayout>
  )
}
