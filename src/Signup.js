
import React from 'react'
import { useState } from 'react'
import SignUpPageHeader from './signup_page_header'
import { supabase } from './supabaseClient';
import { useHistory } from 'react-router-dom';

function Signup() {
    /* Using the useState hook to handle the form. Each input field has a variable initialized to an empty string to store the current state and the setstate function tracks the change then updated the variable */
  /* const [signUpName, setSignUpName] = useState('') */
  const [signUpEmail, setSignUpEmail] = useState('')
  const [signUpPassword, setSignUpPassword] = useState("")

  const history = useHistory()

  /* supabase */
  const signUp = async (email, password ) => {
    try {

      const { error } = await supabase.auth.signUp({ email, password })
      if (error) throw error
      history.push('/dashboard')

    } catch (error) {
      alert(error.message)
    }
   
  }


  return (
    <>
        {/* Sign up page header component  */}
      <SignUpPageHeader />

      <div className="max-w-xl mx-auto mt-20 flex flex-col items-center justify-center">
          {/* Welcome message */}
        <h1 className='font-nunito font-medium text-xl text-dark-color' >Sign up</h1>

        <div className='flex flex-col w-7/12 m-10'>

          <label htmlFor="" className='font-nunito text-dark-color'>Email Address</label>

          <input type="email" placeholder='email address' className='outline-none border  rounded-md p-1  mb-5' value={signUpEmail} onChange={(e) => { setSignUpEmail(e.target.value) }} />

          <label htmlFor="" className='font-nunito text-dark-color'>Password</label>

          <input type="password" placeholder='password' className='outline-none border  rounded-md p-1 mb-10' value={signUpPassword} onChange={(e) => { setSignUpPassword(e.target.value) }} />

          <button type="submit" className='font-nunito text-dark-color bg-secondary-color rounded-md p-1 hover:scale-105' onClick={() =>{ signUp(signUpEmail, signUpPassword)}}>Sign up</button>

        </div>

         

      </div>

    </>
  )
}

export default Signup; 