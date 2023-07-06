import React, { createContext, useContext } from 'react'
import { TodoItem } from '../../interfaces/interfaces'
import { CheckIcon, TrashIcon } from '../../assets';
import { Button } from '../../../components';
import { TodoContext } from '../../context';

interface TodoComponentProps{
  todo: TodoItem;
  className?: string;
  children?: JSX.Element | JSX.Element [] | React.ReactNode
}

interface TodoCompoundContextState{
  todo: TodoItem;
}

export const TodoCompoundContext = createContext({} as TodoCompoundContextState)

export const Todo = ({todo,className,children}:TodoComponentProps) => {

  const { deleteTodo,updateTodo,isLoadingTodoAction } = useContext(TodoContext)

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
            className={`
              w-auto bg-cyan-700 hover:bg-cyan-900 
              ${todo.is_completed&&!isLoadingTodoAction?'bg-green-700 hover:bg-green-900 ':''} 
              ${isLoadingTodoAction?'bg-slate-400 hover:bg-slate-400 ':''}
              `}
            onClick={()=>updateTodo(todo)}
            disabled={isLoadingTodoAction}
          >
              completed
            </Button>
          <TrashIcon className="w-5 h-5 cursor-pointer" onClick={()=>deleteTodo(todo.id)} />
        </div>
      </div>
    </TodoCompoundContext.Provider>
  )
}
