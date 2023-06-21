import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { todoRoutes } from './routes'
import { TodoLayout } from '../layout'

export const TodoRoutes = () => {
  return (
    <TodoLayout>
      <Routes>
        {
          todoRoutes.map(({Component,path})=>(
            <Route key={path} path={path} element={<Component />} />
          ))
        }
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </TodoLayout>
  )
}
