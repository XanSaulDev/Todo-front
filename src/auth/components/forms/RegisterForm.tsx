import React, { useContext } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { UserContext } from '../../context'
import { Button, CustomInputFormik, FormHeader } from '../../../components'

// Example request obj
// {
//   "email": "test@test.com",
//   "first_name": "fulano",
//   "last_name":"sutano",
//   "password": "123456",
//   "password_confirm": "123456"
// }

export const RegisterForm = () => {
  const { handleRegister } = useContext(UserContext)
  return (
    <div className="bg-white md:px-10 md:py-15 p-10 rounded-lg shadow-xl">
      <div className="w-full">

        <FormHeader value="Register" />
        <Formik
          initialValues={{
            'email': '',
            'first_name': '',
            'last_name':'',
            'password': '',
            'password_confirm': ''
          }}
          onSubmit={(formData)=>{
            handleRegister(formData)
          }}
          validationSchema={Yup.object({
            'email': Yup.string().email().required('El correo electrónico es requerido.'),
            'first_name':  Yup.string().required('El nombre es requerido.'),
            'last_name': Yup.string().required('El apellido es requerido.'),
            'password': Yup.string().required('La contreseña es requerida.').min(6,'La contraseña debe tener al menos 6 caracteres.'),
            'password_confirm': Yup.string().required('La confirmación de contraseña es requerida.').oneOf([Yup.ref('password')],'Las contraseñas deben coincidir.')
          })}
        >
          {
            (props)=>(
              <Form>
                <CustomInputFormik type="email" labelText="Email" name="email" className="mb-2"  />
                <div className="md:grid md:grid-cols-2 gap-4">
                  <CustomInputFormik labelText="Nombre" name="first_name"  />
                  <CustomInputFormik labelText="Apellido" name="last_name"  />
                </div>
                <CustomInputFormik type="password" labelText="Contraseña" name="password" className="mt-2"/>
                <CustomInputFormik type="password" labelText="Confirmar Contreseña" name="password_confirm"  />
                <Button type="submit"className="m-auto bg-teal-700 hover:bg-teal-800 md:w-36 w-full" >
                  Registrarse
                </Button>
              </Form>
            )
          } 
        </Formik>
      </div>
    </div>

  )
}
