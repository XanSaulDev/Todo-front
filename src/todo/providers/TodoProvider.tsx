import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../auth';
import { useTodoContext } from '../hooks';
import { TodoContext } from '../';

interface TodoProviderProps{
  children: React.ReactNode;
}

export const TodoProvider = ({children}:TodoProviderProps) => {

  const { token,isAuthenticated } = useContext(UserContext)
  const { fetchTodos,todos,isLoading,createTodo,deleteTodo } = useTodoContext()

  useEffect(()=>{
    if(!isAuthenticated) return
    fetchTodos()
  },[token])

  return (
    <TodoContext.Provider value={{
      todos,
      isLoading,
      createTodo,
      deleteTodo
    }}>
      {children}
    </TodoContext.Provider>
  )
}
