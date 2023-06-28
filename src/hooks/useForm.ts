import { useState } from "react";


export const useForm  = <T>(initialState:T) =>{

  
  const [formData,setFormData] = useState(initialState)

  const setValue = (evnt:React.ChangeEvent<HTMLInputElement>) =>{
    const { target } = evnt
    setFormData((prev)=>(
      {
        ...prev,
        [target.name] : target.value
      }
    ))
  } 


  return{
    setValue,
    ...formData
  }
}