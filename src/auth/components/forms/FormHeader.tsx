import React from 'react'

interface FormHeaderProps{
  children?: JSX.Element |  JSX.Element[] | string;
  className?: string;
  value?: string;
}

export const FormHeader = ({children,className,value}:FormHeaderProps) => {
  return (
    <h1 className={`text-2xl text-center font-semibold ${className}`}>{children || value}</h1>
  )
}
