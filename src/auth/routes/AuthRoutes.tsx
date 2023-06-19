import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login, Register } from '../pages'
import { AuthLayout } from '../layout'

export const AuthRoutes = () => {
  return (
    <AuthLayout>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register/>} />
        <Route path="*" element={<Navigate to="login" replace />} />
      </Routes>
    </AuthLayout>
  )
}
