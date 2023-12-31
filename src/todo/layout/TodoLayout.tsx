import React, { useContext } from 'react'
import { todoRoutes } from '../routes/routes'
import { UserContext } from '../../auth'
import { Button, Nav, NavItem } from '../../shared'


interface TodoLayoutProps{
  children: JSX.Element | JSX.Element[]
}

export const TodoLayout = ({children}:TodoLayoutProps) => {
  const { user,handleLogout } = useContext(UserContext)
  return (
    <>
      <Nav>
        {
          todoRoutes.map(({to,name})=>(
            <NavItem key={to} to={to} name={name} />
            ))
        }
        <NavItem to="/account" name={`User: ${user?.full_name}`} />
        <Button 
          type="button" 
          className="mb-0 mt-0 w-24 px-0 border-2 hover:text-teal-400 hover:border-teal-400 hover:bg-teal-700"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Nav>
      {children}
    </>
  )
}
