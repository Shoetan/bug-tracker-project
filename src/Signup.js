import React from 'react'
import { useState } from 'react'
import SignUpPageHeader from './signup_page_header'

function Signup() {

  const [signUpName, setSignUpName] = useState('')
  const[signUpEmail, setSignUpEmail] =useState('')
    const [signUpPassword ,setSignUpPassword] = useState("")


  return (
     <>
     
       <SignUpPageHeader />

      <div className="max-w-xl mx-auto mt-20 flex flex-col items-center justify-center">
        
        <h1 className='font-nunito font-medium text-xl' >Sign up</h1>

        <form  className='flex flex-col w-7/12 m-10'>

         <label htmlFor="" className='font-nunito text-dark-color'>Name</label>

          <input type="text" placeholder='name' className='outline-none border  rounded-md p-1  mb-5' value={signUpName} onChange = {(e) => { setSignUpName(e.target.value)}}    />
          
          <label htmlFor="" className='font-nunito text-dark-color'>Email Address</label>

          <input type="email" placeholder='email address' className='outline-none border  rounded-md p-1  mb-5' value={signUpEmail} onChange={(e) => { setSignUpEmail(e.target.value)}} />
          
          <label htmlFor="" className='font-nunito text-dark-color'>Password</label>

          <input type="password" placeholder='password' className='outline-none border  rounded-md p-1 mb-10' value={signUpPassword} onChange={(e)  => {setSignUpPassword(e.target.value)}} />
          
          <button type="submit" className='font-nunito text-dark-color bg-secondary-color rounded-md p-1 hover:scale-105'>Sign up</button>

        </form>
        
              <button> { signUpEmail }</button>

      </div>

   </>
  )
}

export default Signup; 