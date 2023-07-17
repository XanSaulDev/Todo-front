import { Form, Formik } from 'formik';
import React, { useContext } from 'react'
import Modal from 'react-modal';

import * as Yup from 'yup'
import { TodoContext } from '../../../context';
import { TodoProps } from '../../../interfaces/interfaces';
import { CreateTodoModalContext } from './CreateTodoContext';
import { Button, CustomCheckbox, CustomInputFormik, FormHeader } from '../../../../shared';



export const CreateTodoModal = () => {
  const { createTodo,isLoadingTodoAction } = useContext(TodoContext)
  const { closeModal,isOpenModal } =useContext(CreateTodoModalContext)
  return (
    <Modal
      isOpen={isOpenModal}
      overlayClassName="Overlay"
      onRequestClose={closeModal}
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
        onSubmit={async(data:TodoProps)=>{
          await createTodo(data)
          closeModal()
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
              <CustomCheckbox label="Completed" className="my-4" name="is_completed" />
              <Button type="submit" className={`
              mx-auto ${isLoadingTodoAction?'bg-slate-400 hover:bg-slate-400 ':'bg-teal-700 hover:bg-teal-900 '}
              `}
              disabled={isLoadingTodoAction?true:false}
              >
                Create Todo
              </Button>
            </Form>
          )
        }
      </Formik>
    </Modal>
  )
}
