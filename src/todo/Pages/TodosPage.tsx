import React, { useContext } from 'react'
import { TodoContext } from '../context/'
import { Todo, TodoDetail, TodoTitle } from '../components'



export const TodosPage = () => {
  const { todos } = useContext(TodoContext)
  return (
    <div className="h-screen bg-slate-200 flex justify-center items-center">
      <div className="bg-white border-black md:w-6/12 w-8/12 p-10 shadow-xl divide-y divide-slate-300 ">
        {
          todos?.map((todo)=>(
            <Todo key={todo.id} todo={todo}>
              <TodoTitle />
              <TodoDetail />
            </Todo>
          ))
        }
      </div>
    </div>
  )
}
