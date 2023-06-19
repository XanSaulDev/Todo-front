import { Formik,Form } from "formik"


import * as Yup from 'yup'
import { Button, FormHeader, Input } from ".."
import { UserContext } from "../../context"
import { useContext } from "react"

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
            <Input type="email" labelText="Email" name="email" />
            <Input type="password" labelText="password" name="password" />

            <Button 
              type="submit"
              className="mt-10"
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
