import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from '../pages'
import { AuthLayout } from '../layout'

export const AuthRoutes = () => {
  return (
    <AuthLayout>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<h1>register</h1>} />
        <Route path="*" element={<Navigate to="login" replace />} />
      </Routes>
    </AuthLayout>
  )
}
