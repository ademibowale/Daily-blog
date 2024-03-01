import React from 'react'
import CallToAction from '../components/CallToAction'

function Entertainment() {
  return (
    <div className='min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
      <h1 className='text-3xl font-semibold'>Entertainment News</h1>
      <p className='text-md text-gray-500'>latest gist about celebrities in the worldwide </p>
      <CallToAction/>
    </div>
  )
}

export default Entertainment
