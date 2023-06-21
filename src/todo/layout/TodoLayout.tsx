import React, { useContext } from 'react'
import { Nav, NavItem } from '../../components'
import { todoRoutes } from '../routes/routes'
import { UserContext } from '../../auth'

interface TodoLayoutProps{
  children: JSX.Element | JSX.Element[]
}

export const TodoLayout = ({children}:TodoLayoutProps) => {
  const { user } = useContext(UserContext)
  return (
    <>
      <Nav>
        {
          todoRoutes.map(({to,name})=>(
            <NavItem key={to} to={to} name={name} />
            ))
        }
        <NavItem to="/account" name={`User: ${user?.full_name}`} />
      </Nav>
      {children}
    </>
  )
}
