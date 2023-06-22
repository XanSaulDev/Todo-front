import React, { useContext } from 'react'
import { Formik, Form } from 'formik'
import { FormHeader,Input,Button } from './'
import * as Yup from 'yup'
import { UserContext } from '../../context'

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
    <>
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
              <Input type="email" labelText="Email" name="email" className="mb-2"  />
              <div className="md:grid md:grid-cols-2 gap-4">
                <Input labelText="Nombre" name="first_name"  />
                <Input labelText="Apellido" name="last_name"  />
              </div>
              <Input type="password" labelText="Contraseña" name="password" className="mt-2"/>
              <Input type="password" labelText="Confirmar Contreseña" name="password_confirm"  />
              <Button type="submit"className="m-auto" >
                Registrarse
              </Button>
            </Form>
          )
        } 
      </Formik>
    </>
  )
}
