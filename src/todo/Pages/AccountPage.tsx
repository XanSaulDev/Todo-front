import React from 'react'
import { UpdateAccountForm } from '../components/forms'

export const AccountPage = () => {
  return (
    <div className="min-h-screen bg-slate-200 flex justify-center md:items-center animate__animated animate__fadeIn animate__faster">
      <div className="md:mt-0 mt-12 md:w-122 w-11/12" >
        <UpdateAccountForm />
      </div>
    </div>
  )
}
