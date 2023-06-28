import React, { useContext } from 'react'
import { CustomInputContext } from './CustomInput';

interface TextTypePlaceHolderProps{
  children?: JSX.Element | JSX.Element[] | React.ReactNode;
}

export const TextTypeAsPlaceHolder = ({children}:TextTypePlaceHolderProps) => {
  const { isFocus } = useContext(CustomInputContext)
  return (
    <span 
    className={`
      absolute top-2 text-gray-500 transition-all ease-in-out duration-200 left-0
      ${isFocus&&'-translate-y-7 text-[12px] text-teal-600'}
      `}
    >
    {children}
    </span>
  )
}
