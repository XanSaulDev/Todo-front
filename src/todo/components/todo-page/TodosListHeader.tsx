import React, { useContext, useRef} from 'react'
import { CreateTodoModalContext } from '../forms'
import { PlusIcon } from '../../assets'
import { TodoContext } from '../../context'
import { Button, CustomInput, TextTypeAsPlaceHolder } from '../../../shared'

export const TodosListHeader = () => {

  const { openModal } = useContext(CreateTodoModalContext)
  const { searchTodo } = useContext(TodoContext)

  const debounceRef = useRef<NodeJS.Timeout>()
  
  const onQueryChanged = (ev:React.ChangeEvent<HTMLInputElement>) => {
    if(debounceRef.current){
      clearTimeout(debounceRef.current)
    }
    debounceRef.current = setTimeout(()=>{
      searchTodo(ev.target.value)
    },400)
  }

  return (
    <div className="flex justify-between mt-10">
      <CustomInput className="w-5/12" onChange={onQueryChanged} name="search" >
        <TextTypeAsPlaceHolder>
          search
        </TextTypeAsPlaceHolder>
      </CustomInput>
      <Button type="button" className="flex items-center justify-center gap-1 bg-teal-700 hover:bg-teal-800" onClick={openModal} >
        Create <PlusIcon className="w-5 h-5 " />
      </Button>
    </div>
  )
}
