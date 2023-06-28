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
      <div className={`my-2 p-2 grid md:grid-cols-6 relative gap-5 ${className}`}>
        {
          todo.is_completed && <CheckIcon className="absolute -top-3 text-emerald-600 -left-4" />
        }

        <div className="md:col-span-4 flex gap-6 md:justify-start md:text-start justify-center text-center">
          <div>
            {children}
          </div>
        </div>
        <div className="md:col-span-2 flex gap-2 items-center md:justify-end justify-center">
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
