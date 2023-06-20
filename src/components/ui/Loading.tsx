import React from 'react'
import { LoaderCircle } from './LoaderCircle'

export const Loading = () => {
  return (
    <div className="fixed w-screen h-screen bg-teal-600 text-white flex justify-center items-center flex-col gap-5">
      <h2 className="text-4xl font-bold">Loading</h2>
      <LoaderCircle className="w-10 h-10" />
    </div>
  )
}
