import * as React from 'react';
import { useState } from 'react';
import { userHandler } from '../handler/userHandler';
import RegisterForm from './RegisterForm';


function RegisterInstructorForm() {

  const [userName, setUserName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleUserNameChange = (event) => {
    let userNameInput = event.target.value;
    setUserName(userNameInput);
  };

  const handleLastNameChange = (event) => {
    let lastNameInput = event.target.value;
    setLastName(lastNameInput);
  };

  const handleEmailChange = (event) => {
    let emailInput = event.target.value;
    setEmail(emailInput);
  };

  const handlePasswordChange = (event) => {
    let passwordInput = event.target.value;
    setPassword(passwordInput);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    let newInstructor = { userName, lastName, email, password };
    userHandler.postInstructor(newInstructor);
    resetForm();
  };

  const resetForm = () => {
    document.getElementById('registerForm').reset();
  }

  return (
    <>
      <div className='w-screen h-screen grid justify-items-center'>
        <form component="form" id='registerForm' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }} className='h-fit bg-salmon py-5 px-5 rounded-xl my-10'>
          <div className='grid grid-rows-5'>
            <div className='flex justify-between mt-3 w-full'>
              <label className='font-poppins font-bold mr-4 text-md'> Nombre: </label>
              <input className='rounded-md py-1' type='text' placeholder='Nombre' onChange={handleUserNameChange} focus='true' required />
            </div>
            <div className='flex justify-between mt-3 w-full'>
              <label className='font-poppins font-bold mr-4 text-md'> Apellido: </label>
              <input className='rounded-md py-1' type='text' placeholder='Apellido' onChange={handleLastNameChange} focus='true' required />
            </div>
            <div className='flex justify-between mt-3 w-full' >
              <label className='font-poppins font-bold mr-4 text-md'> Email: </label>
              <input className='rounded-md py-1 ' type='text' placeholder='Email' onChange={handleEmailChange} focus='true' required />
            </div>
            <div className='flex justify-between mt-3 w-full'>
              <label className='font-poppins font-bold mr-4 text-md'> Contraseña: </label>
              <input className='rounded-md py-1' type='password' placeholder='Contraseña' onChange={handlePasswordChange} focus='true' required />
            </div>
          </div>
          <div className="w-full flex justify-center mt-4">
            <button
              type="submit" onClick={handleSubmit}
              className='text-white font-poppins uppercase text-center bg-orange py-3 px-7 rounded-lg hover:border-solid hover:border-white hover:border-2 my-4'>
              Registrar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default RegisterInstructorForm; 