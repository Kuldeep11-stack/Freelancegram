"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const notFound = () => {
  return (
    <div className='h-screen flex justify-center items-center flex-col'>
        <Image src="/images/404.svg" width={500} height={500} alt='404 image'/>
        <Link href='/'>
            <Button>Return to Home Page</Button>
        </Link>
    </div>
  )
}

export default notFound