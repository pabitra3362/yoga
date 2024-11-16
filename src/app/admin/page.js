import AccordianPost from '@/components/Accordian'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen'>
      <h1 className='text-2xl md:text-4xl lg:text-5xl text-white font-bold text-center my-5'>Admin Panel</h1>
      <AccordianPost />
    </div>
  )
}

export default page
