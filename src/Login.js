
import React from 'react'



function Login() {
  return (
    <>
      <header className='container mx-auto mt-2 flex justify-between'>

       {/* Enter the logo here */} 
       <h1 className='text-dark-color font-nunito font-bold'> Bug-tracker</h1>
        
         
        <p className='font-nunito text-dark-color'>Don't have an account? <a href="https://google.com" className='text-secondary-color hover:scale-5'>create one</a> </p>

      </header>

      <div className="max-w-xl mx-auto mt-20 flex flex-col items-center justify-center">
        
        <h1 className='font-nunito font-medium text-xl'>Welcome</h1>

        <form  className='flex flex-col w-7/12 m-10'>
          
          <label htmlFor="" className='font-nunito text-dark-color'>Email Address</label>

          <input type="text" placeholder='email address' className='outline-none border  rounded-md p-1  mb-5' />
          
          <label htmlFor="" className='font-nunito text-dark-color'>Password</label>

          <input type="text" placeholder='password' className='outline-none border  rounded-md p-1 mb-10' />
          
          <button type="submit" className='font-nunito text-dark-color bg-secondary-color rounded-md p-1 hover:scale-105'>Login</button>

        </form>

      </div>

      <div className='max-w-xl mx-auto mt-0 flex items-center justify-center gap-2'>
        
        <p className='font-nunito'>Forgot password </p>

        <a href="# " className='font-nunito text-secondary-color hover:scale-105'> click here</a>

      </div>


   </>
   
  )
}


export default Login  ;