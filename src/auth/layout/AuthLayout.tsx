import React from 'react'
import { Nav } from '../components';

interface AuthLayoutProps {
  children: JSX.Element | JSX.Element[];
}

export const AuthLayout = ({ children }:AuthLayoutProps) => {
  return (
    <div className="bg-slate-200">
      <Nav />
      {children}
    </div>
  )
}
