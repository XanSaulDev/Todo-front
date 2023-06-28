import React, { useContext } from 'react'
import { TodoCompoundContext } from './Todo';

interface TodoTitleProps{
  className?: string;
  children?: JSX.Element | JSX.Element [] | React.ReactNode;
  title?: string;
}

export const TodoTitle = ({ children,className,title }:TodoTitleProps) => {
  const { todo } = useContext(TodoCompoundContext)

  if(!todo.title && !children && !title){
    return <></>
  }

  return (
    <h2 className={`font-bold text-lg ${className} ${todo.is_completed?'line-through text-slate-700':''} `}>
      { todo?.title || children || title }
    </h2>
  )
}
