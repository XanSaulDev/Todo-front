import { Form, Formik } from 'formik';
import React from 'react'
import Modal from 'react-modal';
import { Button, CustomCheckbox, CustomInputFormik, FormHeader } from '../../../components';
import * as Yup from 'yup'


interface CreateTodoFormProps{
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenModal: boolean;
}


export const CreateTodoForm = ({ isOpenModal,setOpenModal }:CreateTodoFormProps) => {
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
          title:'',
          detail:'',
          completed: false
        }}
        onSubmit={(data)=>{
          console.log(data)
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
