import React, { useState } from 'react'
import { CreateTodoModalContext } from './CreateTodoContext'

interface CreateTodoProviderProps{
  children: JSX.Element | JSX.Element[] | React.ReactNode;

}

export const CreateTodoProvider = ({ children }:CreateTodoProviderProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const closeModal = () =>{
    setIsOpenModal(false)
  }

  const openModal = () =>{
    setIsOpenModal(true)
  }
  
  return (
    <CreateTodoModalContext.Provider value={{
      isOpenModal,
      openModal,
      closeModal,
      setIsOpenModal
    }}>
      {children}
    </CreateTodoModalContext.Provider> 
  )
}
