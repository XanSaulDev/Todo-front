import React, { useContext } from 'react'
import { TodoCompoundContext } from './Todo'

interface TodoDetailProps{
  className?: string;
  children?: JSX.Element | JSX.Element [] | React.ReactNode;
  detail?: string
}

export const TodoDetail = ({ children,className,detail }:TodoDetailProps) => {
  const { todo } = useContext(TodoCompoundContext)

  if(!todo.detail && !children && !detail){
    return <p className={`text-slate-400 ${todo.is_completed?'line-through':''}`}>No detail</p>
  }
  return (
    <p className={`${className} ${todo.is_completed?'line-through text-slate-700':''}`}>
      { todo?.detail || children || detail }
    </p>
  )
}
