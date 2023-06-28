import { createContext } from "react";


interface CreateTodoModalState{
  closeModal:() => void;
  openModal:() => void;
  isOpenModal: boolean;
  setIsOpenModal: (value: React.SetStateAction<boolean>) => void;
}

export const CreateTodoModalContext = createContext({} as CreateTodoModalState) 