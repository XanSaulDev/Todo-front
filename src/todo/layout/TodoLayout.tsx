import React from 'react'
import { Nav, NavItem } from '../../components'
import { todoRoutes } from '../routes/routes'

interface TodoLayoutProps{
  children: JSX.Element | JSX.Element[]
}

export const TodoLayout = ({children}:TodoLayoutProps) => {
  return (
    <>
      <Nav>
        {
          todoRoutes.map(({to,name})=>(
            <NavItem key={to} to={to} name={name} />
          ))
        }
      </Nav>
      {children}
    </>
  )
}
