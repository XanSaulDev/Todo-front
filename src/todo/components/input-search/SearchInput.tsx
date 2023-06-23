import React, { useState } from 'react'

interface SearchInput{
  className?: string;
}

export const SearchInput = ({className}:SearchInput) => {
  const [isFocus,setIsFocus] = useState(false)
  const handleBlur = ({target}:React.FocusEvent<HTMLInputElement, Element>)=>{
    if(target.value){
      return
    }
    setIsFocus(false)
    
  }
  return (
    <div className={`relative ${className}`}>
      <label className='cursor-pointer'>
        <span 
            className={`
              absolute top-2 text-gray-500 transition-all ease-in-out duration-200 left-0
              ${isFocus&&'-translate-y-7 text-[12px] text-teal-600'}
              `}
            >
            search
          </span>
          <input 
            className="block py-2 border-b-2 border-slate-400 outline-none transition-all px-0
                      focus:border-b-teal-500 duration-500 w-full cursor-pointer bg-slate-200" 
            onFocus={()=>setIsFocus(true)}
            onBlur={(evt:React.FocusEvent<HTMLInputElement, Element>)=>handleBlur(evt)}
          />
      </label>
      </div>
  )
}
