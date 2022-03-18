
import React from 'react'
import LoginPageHeader from './Login_page_header';





function Login() {
  return (
    <>
    
      <LoginPageHeader />
      
      <div className="max-w-xl mx-auto mt-20 flex flex-col items-center justify-center">
        
        <h1 className='font-nunito font-medium text-xl'>Welcome</h1>

        <form  className='flex flex-col w-7/12 m-10'>
          
          <label  className='font-nunito text-dark-color'>Email Address</label>

          <input type="text" placeholder='email address' className='outline-none border  rounded-md p-1  mb-5' />
          
          <label  className='font-nunito text-dark-color'>Password</label>

          <input type="password" placeholder='password' className='outline-none border  rounded-md p-1 mb-10' />
          
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