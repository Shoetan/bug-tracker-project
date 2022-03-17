import React from 'react'
import { useState } from 'react'

function Signup() {

    const [password ,setPassword] = useState("")

    const a = (event) => {
        
        setPassword (event.target.value)
        
    }
  return (
     <>
      <header className='container mx-auto mt-2 flex justify-between'>

       {/* Enter the logo here */} 
       <h1 className='text-dark-color font-nunito font-bold'> Bug-tracker</h1>
        
         
        <p className='font-nunito text-dark-color'>Already have an account? <a href="https://google.com" className='text-secondary-color hover:scale-5'>login</a> </p>

      </header>

      <div className="max-w-xl mx-auto mt-20 flex flex-col items-center justify-center">
        
        <h1 className='font-nunito font-medium text-xl' >Sign up</h1>

        <form  className='flex flex-col w-7/12 m-10'>

         <label htmlFor="" className='font-nunito text-dark-color'>Name</label>

          <input type="text" placeholder='name' className='outline-none border  rounded-md p-1  mb-5'     />
          
          <label htmlFor="" className='font-nunito text-dark-color'>Email Address</label>

          <input type="text" placeholder='email address' className='outline-none border  rounded-md p-1  mb-5' />
          
          <label htmlFor="" className='font-nunito text-dark-color'>Password</label>

          <input type="text" placeholder='password' className='outline-none border  rounded-md p-1 mb-10' value={password} onChange={ a } />
          
          <button type="submit" className='font-nunito text-dark-color bg-secondary-color rounded-md p-1 hover:scale-105'>Sign up</button>

        </form>
        
              <button> { password }</button>

      </div>

   </>
  )
}

export default Signup;