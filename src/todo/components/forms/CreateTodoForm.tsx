import { Form, Formik } from 'formik';
import React, { useContext } from 'react'
import Modal from 'react-modal';
import { Button, CustomCheckbox, CustomInputFormik, FormHeader } from '../../../components';
import * as Yup from 'yup'
import { TodoContext } from '../../context';
import { TodoProps } from '../../interfaces/interfaces';


interface CreateTodoFormProps{
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenModal: boolean;
}


export const CreateTodoForm = ({ isOpenModal,setOpenModal }:CreateTodoFormProps) => {
  const { createTodo } = useContext(TodoContext)
  return (
    <Modal
      isOpen={isOpenModal}
      overlayClassName="Overlay"
      onRequestClose={()=>setOpenModal(false)}
      className="Modal"
    >
      
      <FormHeader>
        Create Todo
      </FormHeader>
      <Formik
        initialValues={{
          detail:'',
          is_completed: false,
          title: ''
        }}
        onSubmit={(data:TodoProps)=>{
          createTodo(data)
        }}
        validationSchema={Yup.object(
          {
            title: Yup.string().required('El campo titulo es oblicatorio.'),
          }
        )}
      >
        {
          ()=>(
            <Form>
              <CustomInputFormik labelText="Tile" name="title" type="text"  />
              <CustomInputFormik labelText="Detail" name="detail" type="text" className="mb-2"  />
              <CustomCheckbox label="Completed" className="my-4" name="completed" />
              <Button type="submit" className="mx-auto">
                Create Todo
              </Button>
            </Form>
          )
        }
      </Formik>
    </Modal>
  )
}
