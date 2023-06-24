import React, { useContext } from 'react'
import { TodoContext } from '../context/'
import { Todo, TodoDetail, TodoTitle } from '../components'
import { PlusIcon } from '../assets'
import { Button, CustomInput, TextTypeAsPlaceHolder } from '../../components'



export const TodosPage = () => {
  const { todos } = useContext(TodoContext)
  return (
    <div className="h-screen bg-slate-200 flex justify-center flex-col gap-4 items-center animate__animated animate__fadeIn animate__faster">
      <div className=" md:w-6/12 w-11/12">
        <div className="flex justify-between">
          <CustomInput className="w-5/12">
            <TextTypeAsPlaceHolder>
              search
            </TextTypeAsPlaceHolder>
          </CustomInput>
          <Button type="button" className="flex items-center justify-center gap-1">Create <PlusIcon className="w-5 h-5" /></Button>
        </div>
        <div className="bg-white shadow-xl divide-y divide-slate-300">
          {
            todos?.map((todo)=>(
              <Todo key={todo.id} todo={todo} className="p-8">
                <TodoTitle />
                <TodoDetail />
              </Todo>
            ))
          }
        </div>
      </div>
    </div>
  )
}
