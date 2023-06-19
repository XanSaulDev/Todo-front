import { Field, Formik,Form } from "formik"
import { Input } from "../components"



export const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white md:px-10 md:py-15 p-10 rounded-lg md:w-4/12 sm:w-7/12 w-11/12 ">
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

                <button 
                  type="submit" 
                  className="bg-teal-700 text-white font-semibold px-5 py-2 rounded-md block mt-5 md:w-6/12 w-full m-auto"
                >
                  Login
                </button>
              </Form>

            )
          }
        </Formik>
      </div>
    </div>

  )
}
