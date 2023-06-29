import { Formik,Form } from "formik"


import * as Yup from 'yup'
import { UserContext } from "../../context"
import { useContext } from "react"
import { Button, CustomInputFormik, FormHeader } from "../../../components"

export const LoginForm = () => {
  const { handleLogin } = useContext(UserContext)
  return (
    <div className="bg-white md:px-10 md:py-15 p-10 rounded-lg  mx-auto shadow-xl md:w-122 w-11/12">
      <div className="w-full">
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
      </div>
    </div>
  )
}
