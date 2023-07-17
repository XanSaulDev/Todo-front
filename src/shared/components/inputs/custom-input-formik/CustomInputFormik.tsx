import { Field,ErrorMessage, useField  } from 'formik'
import React, { useEffect, useState } from 'react'

interface InputProps{
  labelText:string;
  type?: string;
  className?: string;
  name: string;
  value?: string;
}

export const CustomInputFormik = ({labelText,type="text",className,name,value}:InputProps) => {
  const [isFocus,setIsFocus] = useState(false)
  const [field,meta,helper] = useField(name)

  const handleBlur = ({target}:React.FocusEvent<HTMLInputElement, Element>)=>{

    if(target.value){
      return
    }
    setIsFocus(false)
    
  }

  useEffect(()=>{
    if(!!value){
      helper.setValue(value)
      setIsFocus(true)
    }
  },[])
  


  return (
    <div className={`relative my-9 ${className} `}>
      
      <label className='cursor-pointer'>
        <span 
          className={`
            absolute top-2 text-gray-400 transition-all ease-in-out duration-200
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
        focus:border-b-teal-600 duration-500 w-full cursor-pointer
          "
        >
        </Field>
        <ErrorMessage name={name} className="text-red-500 text-sm" component="p" />
      </label>
    </div>
  )
}
