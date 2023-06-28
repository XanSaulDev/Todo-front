import React, { createContext, useContext } from 'react'
import { TodoResponse } from '../../interfaces/interfaces'
import { CheckIcon, TrashIcon } from '../../assets';
import { Button } from '../../../components';
import { TodoContext } from '../../context';

interface TodoComponentProps{
  todo: TodoResponse;
  className?: string;
  children?: JSX.Element | JSX.Element [] | React.ReactNode
}

interface TodoCompoundContextState{
  todo: TodoResponse;
}

export const TodoCompoundContext = createContext({} as TodoCompoundContextState)

export const Todo = ({todo,className,children}:TodoComponentProps) => {
  const { deleteTodo,updateTodo } = useContext(TodoContext)
  return (
    <TodoCompoundContext.Provider value={{
      todo
    }} >
      <div className={`my-2 p-2 flex justify-between items-center relative gap-5 ${className}`}>
        {
          todo.is_completed && <CheckIcon className="absolute -top-4 text-emerald-600 -left-5" />
        }

        <div className="flex gap-6">
          <div>
            {children}
          </div>
        </div>
        <div className="flex justify-end gap-2 items-center">
          <Button 
            type="button" 
            className={`w-auto bg-cyan-700 hover:bg-cyan-900 ${todo.is_completed?'bg-slate-400 hover:bg-slate-500 ':''} `}
            onClick={()=>updateTodo(todo)} 
          >
              completed
            </Button>
          <TrashIcon className="w-5 h-5 cursor-pointer" onClick={()=>deleteTodo(todo.id)} />
        </div>
      </div>
    </TodoCompoundContext.Provider>
  )
}
