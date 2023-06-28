import React, { useContext } from 'react'
import { useForm } from '../../../hooks'
import { CreateTodoModalContext } from '../forms'
import { Button, CustomInput, TextTypeAsPlaceHolder } from '../../../components'
import { PlusIcon } from '../../assets'

export const TodosListHeader = () => {

  const { openModal } = useContext(CreateTodoModalContext)
  
  const {search,setValue} = useForm({
    search:''
  })

  return (
    <div className="flex justify-between mt-10">
      <CustomInput className="w-5/12" onChange={setValue} name="search" value={search} >
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
