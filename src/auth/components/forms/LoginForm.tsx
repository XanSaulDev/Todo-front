import { Formik,Form } from "formik"


import * as Yup from 'yup'
import { UserContext } from "../../context"
import { useContext } from "react"
import { Button, CustomInputFormik, FormHeader } from "../../../components"

export const LoginForm = () => {
  const { handleLogin } = useContext(UserContext)
  return (
    <>
      <FormHeader value="Login" />
      <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      onSubmit={(data)=>{
        handleLogin(data)
      }}
      validationSchema={Yup.object({
        email: Yup.string().email().required('El campo email es requerido.'),
        password: Yup.string().required('La contraseña es requerida.')
      })}
    >

      {
        (props)=>(
          <Form>
            <CustomInputFormik type="email" labelText="Email" name="email" />
            <CustomInputFormik type="password" labelText="password" name="password" />

            <Button 
              type="submit"
              className="mt-10 m-auto bg-teal-700 hover:bg-teal-800 md:w-36 w-full"
            >
              Login
            </Button>
          </Form>

        )
      }
      </Formik>
    </>
  )
}
