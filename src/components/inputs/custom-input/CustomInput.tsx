import React, { createContext } from 'react'
import { useCustomInput } from '../../../hooks';

interface SearchInput{
  className?: string;
  value?: string;
  children?: JSX.Element | JSX.Element[] | React.ReactNode;
}

interface CustomInputContextValues {
  handleBlur: ({ target }: React.FocusEvent<HTMLInputElement, Element>) => void;
  isFocus: boolean;
  setIsFocus: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CustomInputContext = createContext({} as CustomInputContextValues)

export const CustomInput = ({className,value='',children}:SearchInput) => {
  const {handleBlur,isFocus,setIsFocus} = useCustomInput()
  return (
    <CustomInputContext.Provider value={{
      handleBlur,
      isFocus,
      setIsFocus
    }}>
      <div className={`relative ${className}`}>
        <label className='cursor-pointer'>
            {children}
            <input 
              className="block py-2 border-b-2 border-slate-400 outline-none transition-all px-0
                        focus:border-b-teal-500 duration-500 w-full cursor-pointer bg-slate-200" 
              onFocus={()=>setIsFocus(true)}
              onBlur={(evt:React.FocusEvent<HTMLInputElement, Element>)=>handleBlur(evt)}
              value={value}
            />
        </label>
        </div>
    </CustomInputContext.Provider>
  )
}
