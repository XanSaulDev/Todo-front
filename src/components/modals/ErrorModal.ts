import { AxiosError } from "axios"
import Swal from 'sweetalert2'

export const modalErrors = (err:AxiosError) =>{
  const respObj:{errors:[],ok:boolean} = err.response?.data as {errors:[],ok:boolean} 
  const error = Object.entries(respObj.errors).map(([key, value]) => (value))
  Swal.fire({
    title: 'Error!',
    text: error[0],
    icon: 'error',
    confirmButtonText: 'Cool'
  })
}
