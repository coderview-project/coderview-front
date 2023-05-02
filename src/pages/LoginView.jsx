import React from 'react'
import Login from '../components/Login'
import Navb from '../components/Navb'
import Footer from '../components/Footer'

function LoginView() {
  return (
    <>
    <Navb/>
    <div className='grid justify-items-stretch'>
      <div className='w-screen h-36 mt-0'>
        <Login />
      </div>
    </div>
    </>
  )
}

export default LoginView