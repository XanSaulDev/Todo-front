import React, { useContext } from 'react'
import { TodoContext } from '../context/'
import { Todo, TodoDetail, TodoTitle } from '../components'
import { SearchInput } from '../components'
import { Button } from '../../auth/components'



export const TodosPage = () => {
  const { todos } = useContext(TodoContext)
  return (
    <div className="h-screen bg-slate-200 flex justify-center flex-col gap-4 items-center animate__animated animate__fadeIn animate__faster">
      <div className=" md:w-6/12 w-11/12">
        <div className="flex">
          <SearchInput className="w-11/12" />
          <Button type="button">Search</Button>
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
