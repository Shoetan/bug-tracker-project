
import React from 'react'
import LoginPageHeader from './Login_page_header';
import { useState } from 'react'
import { supabase } from './supabaseClient'
import { useHistory } from 'react-router-dom'




function Login() {

  /* track user inputs by using usestate */

  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  const history = useHistory()

  const login = async (email, password) => {
    try {

      const { error } = await supabase.auth.signIn({ email, password })
      if (error) throw error
      history.push('/dashboard')

    } catch (error) {
      alert(error.message)
    }

  }




  return (
    <>
      {/* Header component */}
      <LoginPageHeader />

      <div className="max-w-xl mx-auto mt-20 flex flex-col items-center justify-center">
        {/* Welcome message */}
        <h1 className='font-nunito font-medium text-xl text-dark-color'>Welcome</h1>

        <div className='flex flex-col w-7/12 m-10'>

          <label className='font-nunito text-dark-color'>Email Address</label>

          <input type="email" placeholder='email address' className='outline-none border  rounded-md p-1  mb-5' value={loginEmail} onChange={ (e) => { setLoginEmail(e.target.value)}}/>

          <label className='font-nunito text-dark-color'>Password</label>

          <input type="password" placeholder='password' className='outline-none border  rounded-md p-1 mb-10' value={loginPassword} onChange = { (e) => { setLoginPassword (e.target.value)}} />

          <button type="submit" className='font-nunito text-dark-color bg-secondary-color rounded-md p-1 hover:scale-105' onClick={() => {login(loginEmail, loginPassword)}}>Login</button>

        </div>

      </div>

      <div className='max-w-xl mx-auto mt-0 flex items-center justify-center gap-2'>

        <p className='font-nunito text-dark-color'>Forgot password </p>

        <a href="# " className='font-nunito text-secondary-color hover:scale-105'> click here</a>

      </div>
      
      <a href='@' className='font-nunito flex items-center justify-center mt-2 text-secondary-color ' >login in without an account</a>


    </>

  )
}


export default Login;