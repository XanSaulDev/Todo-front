import { Field } from 'formik'
import React, { useRef, useState } from 'react'

interface InputProps{
  labelText:string;
  type: string;
  className?: string;
  name: string;
}

export const Input = ({labelText,type,className,name}:InputProps) => {
  const [isFocus,setIsFocus] = useState(false)
  const handleBlur = ({target}:React.FocusEvent<HTMLInputElement, Element>)=>{
    if(target.value){
      return
    }
    setIsFocus(false)
    
  }
  return (
    <div className={`relative ${className} my-7`}>
      
      <label>
        <span 
          className={`
            absolute top-3 text-gray-400 transition-all ease-in-out duration-200
            ${isFocus&&'-translate-y-7 text-[12px] text-teal-700'}
            `}
          >
          {labelText}
        </span>
        <Field
          onFocus={()=>setIsFocus(true)}
          onBlur={(evt:React.FocusEvent<HTMLInputElement, Element>)=>handleBlur(evt)}
          type={type} 
          name={name} 
          className="
          block py-2 border-b-2 border-slate-300 outline-none transition-all
        focus:border-b-teal-600 duration-300 w-full
          "

        />
      </label>
    </div>
  )
}
