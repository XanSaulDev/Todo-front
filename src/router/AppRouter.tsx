import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/*" element={<AuthRoutes />} />
      </Routes>
    </BrowserRouter>
  )
}
