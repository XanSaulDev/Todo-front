import React,{ useContext } from 'react'
import { Button, CustomInputFormik, FormHeader } from '../../../../components'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { UserContext } from '../../../../auth'


export const UpdateAccountForm = () => {
  const { user } = useContext(UserContext);
  
  return (
    <div className="bg-white md:px-10 md:py-15 p-10 rounded-lg md:w-122 w-11/12 shadow-xl">
      <FormHeader value="Update User Data" />
        <Formik
          initialValues={{
            'email': '',
            'first_name': '',
            'last_name':'',
          }}
          onSubmit={(formData)=>{
            console.log(formData)
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
                <Button type="submit"className="m-auto bg-teal-700 hover:bg-teal-800 md:w-36 w-full" >
                  Update
                </Button>
              </Form>
            )
          } 
      </Formik>
    </div>
  )
}
