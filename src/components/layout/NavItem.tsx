import React from 'react'
import { NavLink } from 'react-router-dom'

interface NavItemProps{
  to:string;
  name:string;
  className?:string;
}

export const NavItem = ({to,name,className}:NavItemProps) => {
  return (
    <li>
      <NavLink 
        to={to}
        className={`transition-colors duration-300 ease-in-out hover:text-teal-400 
        cursor-pointer ${className}`}
      >
        {name}
      </NavLink>
    </li>
  )
}
