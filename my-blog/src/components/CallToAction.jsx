import { Button } from 'flowbite-react'
import React from 'react'

function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center
    items-center rounded-tl-3xl rounded-br-3xl'>
      <div className='flex-1 justify-center  flex flex-col'>
<h2 className='text-2xl '>Do you want to learn more about kedi healthcare?</h2>
<p className='text-gray-500 my-2'>Checkout all kedihealth care  100% herbal treatment </p>
<Button gradientDuoTone='purpleToPick' className='rounded-tl-xl rounded-bl-none'>
    <a href='https://www.kedi.com' target='_blank'rel='noopener noreferrer' >Contact us </a>Learn More</Button>
      </div>
      <div className='p-7 flex-1'>
        <img src='..\images\my_image.jpg' alt=''/>
      </div>
    </div>
  )
}

export default CallToAction
