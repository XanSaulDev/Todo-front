import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<h1>Login</h1>} />
      <Route path="register" element={<h1>register</h1>} />
      <Route path="*" element={<Navigate to="login" replace />} />
    </Routes>
  )
}
