import { Field, Formik,Form } from "formik"
import { Button, Input } from "../components"



export const Login = () => {
  return (
    
      <div className="flex items-center justify-center h-screen flex-col gap-10">
        <div className="bg-white md:px-10 md:py-15 p-10 rounded-lg md:w-4/12 sm:w-7/12 w-11/12 ">
          <h1 className="text-2xl text-center font-semibold">Login</h1>
          <Formik
            initialValues={{
              email: '',
              password: ''
            }}
            onSubmit={(data)=>{
              console.log(data)
            }}
          >
            {
              (values)=>(
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
        </div>
      </div>
    

  )
}
