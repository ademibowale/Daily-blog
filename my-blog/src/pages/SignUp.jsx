import { Link} from 'react-router-dom';
import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { useState } from 'react';

function SignUp() {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
   
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  try{
    const response = await fetch('http://localhost:5000/api/v1/auth/signup',{
  method:'POST',
  headers:{'content-type':'application/json'},
  body:JSON.stringify(formData),
});
  
    } catch (error) {
      
    }
  
  
  };
  return (
    <div className="'min-h-screen mt-20'">
    <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-20'>
      {/* left side */}
      <div className='flex-1'>
      <Link to="/" className='font-bold dark:text-white text-2xl'>
         <span className='px-1 py-1 bg-gradient-to-r from-indigo-500
         via-purple-500 to-pink-500 rounded-lg text-white '>DiwuraEssential's</span>
         Blog
         </Link>
         <p className='px-1 py-5 text-sn-5'>
         Hey there! Welcome to DiwuraEssential, join the community– 
         The social blog where real people talk about real life(and have a blast doing it!) ✨
         and everything in between!
         Join the fun! DiwuraEssential: Where good vibes and great conversations flow.
         </p>
        </div>
         
      {/* right side */}
      <div className=' flex-1'>
      <h2 className='px-2 py-1 bg-gradient-to-r from-indigo-500
         via-purple-500 to-pink-500 rounded-lg text-white '>Signup with your email and password or with Google</h2>
<form className='flex flex-col gap-4' onSubmit={handleSubmit}>
<div>
<Label value='Your Username' />
          <TextInput type='text' 
          placeholder='username'
          id='username'onChange={handleChange}/>
</div>
<div>
<Label value='email'/>
          <TextInput type='email' 
          placeholder='Enter your email'
          id='email'onChange={handleChange} />
</div>
<div>
<Label value='password'/>
          <TextInput  type='password' 
          placeholder='Enter your password'
          id='password' onChange={handleChange}/>
</div>
<Button  gradientDuoTone='purpleToPink' type='submit'>Sign Up</Button>
</form>
<div className='flex gap-2 text-sm mt-5'>
<span>Already have an account?</span>
<Link to='/sign-in' className='text-blue-500'>Sign In</Link>
</div>

</div>
</div> 
</div>
  )
}

export default SignUp
