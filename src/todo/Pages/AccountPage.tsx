import React from 'react'
import { UpdateAccountForm } from '../components/forms'

export const AccountPage = () => {
  return (
    <div className="flex justify-center md:items-center animate__animated animate__fadeIn animate__faster  md:h-screen">
      <div className="md:mt-0 mt-12  md:w-122 sm:w-8/12 w-11/12" >
        <UpdateAccountForm />
      </div>
    </div>
  )
}
