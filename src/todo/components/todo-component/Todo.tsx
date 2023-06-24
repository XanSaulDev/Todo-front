import React, { createContext, useContext } from 'react'
import { TodoProps } from '../../interfaces/interfaces'
import { TrashIcon } from '../../assets';
import { Button } from '../../../components';
import { TodoContext } from '../../context';

interface TodoComponentProps{
  todo: TodoProps;
  className?: string;
  children?: JSX.Element | JSX.Element [] | React.ReactNode
}

interface TodoCompoundContextState{
  todo: TodoProps;
}

export const TodoCompoundContext = createContext({} as TodoCompoundContextState)

export const Todo = ({todo,className,children}:TodoComponentProps) => {
  const { deleteTodo } = useContext(TodoContext)
  return (
    <TodoCompoundContext.Provider value={{
      todo
    }} >
      <div className={`my-2 p-2 flex justify-between items-center ${className}`}>
        <div className="flex gap-6">
          <div>
            {children}
          </div>
        </div>
        <div className="flex justify-end gap-2 items-center">
          <Button type="button" className="w-auto bg-blue-600" >completed</Button>          
          <TrashIcon className="w-5 h-5 cursor-pointer" onClick={()=>deleteTodo(todo.id)} />
        </div>
      </div>
    </TodoCompoundContext.Provider>
  )
}
