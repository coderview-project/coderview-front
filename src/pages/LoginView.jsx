import React from 'react'
import Login from '../components/Login'

function LoginView() {
  return (
     <div className='grid justify-items-stretch'> 
    <div className='w-screen h-36 mt-44'>
    {/*<img className='w-screen h-40 object-cover' src='src\components\assets\pexels-ann-h-3482442.jpg' alt='Inicio de Sesión'/>*/}
    {/*<p className='text-xl uppercase text-white bg-orange text-center py-3 font-poppins'> 
        Inicio de Sesión
  </p>*/}
    <Login/>
    </div>
      
 </div>
  )
}

export default LoginView