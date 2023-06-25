import React, { useContext } from 'react'
import { TodoContext } from '../context/'
import { CreateTodoModal, CreateTodoModalContext, Todo, TodoDetail, TodoTitle } from '../components'
import { PlusIcon } from '../assets'
import { Button, CustomInput, TextTypeAsPlaceHolder } from '../../components'




export const TodosPage = () => {
  const { todos } = useContext(TodoContext);
  const { openModal } = useContext(CreateTodoModalContext)

  return (
    <div className="min-h-screen bg-slate-200 flex justify-center items-center">
      <div className="md:w-5/12 w-11/12">
        <div className="flex justify-between mt-10">
          <CustomInput className="w-5/12">
            <TextTypeAsPlaceHolder>
              search
            </TextTypeAsPlaceHolder>
          </CustomInput>
          <Button type="button" className="flex items-center justify-center gap-1" onClick={openModal} >Create <PlusIcon className="w-5 h-5" /></Button>
        </div>
        <div className="bg-white p-4 rounded-lg divide-y-2 divide-slate-300  my-5">
          {
          todos?.map((todo) => (
            <div key={todo.id} className="my-4">
              <Todo todo={todo}>
                <TodoTitle />
                <TodoDetail />
              </Todo>
            </div>
          ))}
          {
            todos.length<=0 && <p className="text-slate-400">Add Todos!!!!</p>
          }
        </div>
      </div>
      <CreateTodoModal />
    </div>
  );
};
