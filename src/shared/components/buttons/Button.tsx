import React from 'react'

interface ButtonProps{
  children?:  JSX.Element |  JSX.Element[] | React.ReactNode | string;
  type: 'button' | 'submit' | 'reset' ;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export const Button = ({children,type,className,onClick,disabled}:ButtonProps) => {
  return (
    <button 
      className={`
      text-white font-semibold px-5 py-2 rounded-md block 
        transition-colors duration-300 ${className}
      `}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >

      {children}
    </button>
  )
}
