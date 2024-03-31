"use client"
import React from 'react'
import { useFormStatus } from 'react-dom'
import { Button } from '../ui/button';
const AuthSubmitBtn = () => {
    const {pending} = useFormStatus();
  return (
    <Button disabled = {pending} className='w-full mt-3'>{pending ? "Submitting" : "Submit"}</Button>
  )
}

export default AuthSubmitBtn