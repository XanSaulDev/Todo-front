import React, { useContext } from 'react'
import { TodoContext } from '../../context'
import { Todo, TodoDetail, TodoTitle } from '../todo-component'
import { Spinner } from '../../../components'

export const TodosList = () => {
  const { todos,isLoadingGettingTodos } = useContext(TodoContext)
  return (
    <div className="bg-white p-4 rounded-lg divide-y-2 divide-slate-300 my-5">
    {
    todos?.map((todo) => (
      <div key={todo.id} className="p-4">
        <Todo todo={todo}>
          <TodoTitle />
          <TodoDetail />
        </Todo>
      </div>
    ))}
    {
      isLoadingGettingTodos && todos?.length===0
      ? <Spinner /> 
      : todos?.length <=0 && <p className="text-slate-400">Not Todos :(</p>
    }
  </div>
  )
}
