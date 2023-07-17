import { useState } from "react"

export const useCustomInput  = () =>{

  const [isFocus,setIsFocus] = useState(false)

  const handleBlur = ({target}:React.FocusEvent<HTMLInputElement, Element>)=>{
    if(target.value){
      return
    }
    setIsFocus(false)
    
  }

  return{
    handleBlur,
    isFocus,
    setIsFocus
  }
} 
