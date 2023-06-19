import React from 'react'

interface ButtonProps{
  children?:  JSX.Element |  JSX.Element[] | string;
  type: 'button' | 'submit' | 'reset' ;
  className?: string;
}

export const Button = ({children,type,className}:ButtonProps) => {
  return (
    <button 
      className={`
        bg-teal-700 text-white font-semibold px-5 py-2 rounded-md block mt-5 md:w-6/12 w-full m-auto
        transition-colors hover:bg-teal-800 duration-300 ${className}
      `}
      
      type={type}
    >
      {children}
    </button>
  )
}
