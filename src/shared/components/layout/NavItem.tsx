import React from 'react'
import { NavLink } from 'react-router-dom'

interface NavItemProps{
  to:string;
  name:string;
  className?:string;
}

export const NavItem = ({to,name,className}:NavItemProps) => {
  return (
    <li
    className={``}
    >
      <NavLink 
        to={to}
        className={
          ({isActive}: {isActive: boolean;isPending: boolean; })=>`
            ${isActive?'text-teal-400 border-teal-400':''} 
            transition-colors duration-300 ease-in-out 
            
            hover:text-teal-400 cursor-pointer 
            ${className}
            `
        }
      >
        {name}
      </NavLink>
    </li>
  )
}
