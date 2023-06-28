import React from 'react'
import { CreateTodoModal, TodosList, TodosListHeader } from '../components'


export const TodosPage = () => {

  return (
    <div className="min-h-screen bg-slate-200 flex justify-center items-center animate__animated animate__fadeIn animate__faster">
      <div className="md:w-136 w-11/12">
        <TodosListHeader />
        <TodosList />
      </div>
      <CreateTodoModal />
    </div>
  );
};
