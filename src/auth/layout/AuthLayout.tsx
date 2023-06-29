import React from 'react'
import { Nav, NavItem } from '../../components';
import { authRoutes } from '../routes/routes';


interface AuthLayoutProps {
  children: JSX.Element | JSX.Element[];
}

export const AuthLayout = ({ children }:AuthLayoutProps) => {
  return (
    <div className="bg-slate-200 ">
      <Nav>
        {
          authRoutes.map(({to,name,className})=>(
            <NavItem key={to} to={to} name={name} className={className} />
          ))
        }
      </Nav>
      <div className="flex items-center md:justify-center md:mt-0 mt-14 h-screen flex-col gap-10">
        <div className="bg-white md:px-10 md:py-15 p-10 rounded-lg  mx-auto shadow-xl md:w-122 w-11/12">
          <div className="w-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
