import React, { createContext } from 'react'
import { EditIcon, TrashIcon } from '../../assets'
import { TodoProps } from '../../interfaces/interfaces'

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

  return (
    <TodoCompoundContext.Provider value={{
      todo
    }} >
      <div className={`my-2 p-2 flex justify-between ${className}`}>
        <div>
          {children}
        </div>
        <div className="flex justify-end gap-2">
          <TrashIcon className="w-5 h-5 cursor-pointer"/>
          <EditIcon className="w-5 h-5 text-sky-700 cursor-pointer" />
        </div>
      </div>
    </TodoCompoundContext.Provider>
  )
}
