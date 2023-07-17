import React,{ useContext } from 'react'

import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { UserContext } from '../../../../auth'
import { Button, CustomInputFormik, FormHeader } from '../../../../shared'


export const UpdateAccountForm = () => {
  const { user,updateAccount,isLoading } = useContext(UserContext);
  
  return (
    <div className="bg-white md:px-10 md:py-15 p-10 rounded-lg w-full shadow-xl">
      <FormHeader value="Update User Data" />
        <Formik
          initialValues={{
            'email': '',
            'first_name': '',
            'last_name':'',
          }}
          onSubmit={(formData)=>{
            updateAccount(formData)
          }}
          validationSchema={Yup.object({
            'email': Yup.string().email().required('El correo electrónico es requerido.'),
            'first_name':  Yup.string().required('El nombre es requerido.'),
            'last_name': Yup.string().required('El apellido es requerido.'),
          })}
        >
          {
            (props)=>(
              <Form>
                <CustomInputFormik type="email" labelText="Email" name="email" className="mb-2" value={user?.email} />
                <div className="md:grid md:grid-cols-2 gap-4">
                  <CustomInputFormik labelText="Nombre" name="first_name" value={user?.first_name} />
                  <CustomInputFormik labelText="Apellido" name="last_name" value={user?.last_name} />
                </div>
                <Button 
                  type="submit"
                  className={`m-auto md:w-36 w-full 
                  ${isLoading?'bg-gray-400 hover:bg-gray-400':'bg-teal-700 hover:bg-teal-800'}
                  `}
                  disabled={isLoading}
                >
                  Update
                </Button>
              </Form>
            )
          } 
      </Formik>
    </div>
  )
}
