import { Field } from 'formik';
import React from 'react'

interface CustomCheckboxProps{
  children?: React.ReactNode | JSX.Element | JSX.Element[];
  label?: string;
  className?: string;
  name: string;
}

export const CustomCheckbox = ({ children,label,className,name }:CustomCheckboxProps) => {
  return (
    <label className={`flex justify-center items-center gap-1 ${className}`}>
      {label || children}
      <Field type="checkbox" name={name} />
    </label>
  )
}
