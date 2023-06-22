import React, { useContext } from 'react'
import { TodoContext } from '../context/'




export const TodosPage = () => {
  const { todos } = useContext(TodoContext)
  return (
    <div className="h-screen bg-slate-200 flex justify-center items-center">
      <div className="bg-white border-black w-8/12 p-10 shadow-xl divide-y divide-slate-300 ">
        {
          todos?.map(({title,id,detail})=>(
            <div key={id} className="my-2 p-2">
              <h1>{title}</h1>
              <p>{detail}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
