import React, { useContext } from 'react'
import { Nav, NavItem } from '../../components'
import { todoRoutes } from '../routes/routes'
import { UserContext } from '../../auth'
import { Button } from '../../auth/components'

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
          className="mt-0 mb-0 w-24 border-2 hover:text-teal-400 hover:border-teal-400 hover:bg-teal-700 md:w-auto"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Nav>
      {children}
    </>
  )
}
