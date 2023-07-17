import React, { useContext } from 'react'
import { CustomInputContext } from '../../../components/inputs/custom-input/CustomInput'

interface InputProps{
  value?: string | number | readonly string[] | undefined;
  className?: string;
}

export const Input = ({ value,className }:InputProps) => {
  const { setIsFocus,handleBlur } = useContext(CustomInputContext)
  return (
    <input 
      className={`block border-b-2 border-slate-400 outline-none transition-all px-0
                focus:border-b-teal-500 duration-500 w-full cursor-pointer ${className}`} 
      onFocus={()=>setIsFocus(true)}
      onBlur={(evt:React.FocusEvent<HTMLInputElement, Element>)=>handleBlur(evt)}
      value={value}
      />
  )
}
