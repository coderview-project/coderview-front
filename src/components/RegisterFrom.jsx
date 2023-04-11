import * as React from 'react';
import TextField from '@mui/material/TextField';
import {useState} from 'react';


function RegisterForm() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] =useState('');

    const handleFirstNameChange = (event) => {
        let firstNameInput = event.target.value;
        setFirstName (firstNameInput);
      };
    
    const handleLastNameChange = (event) => {
        let lastNameInput = event.target.value; 
        setLastName (lastNameInput);
    };
    
    const handleEmailChange = (event) => {
        let emailInput = event.target.value; 
        setEmail (emailInput);
    };

    const handlePasswordChange = (event) => {
        let passwordInput = event.target.value; 
        setPassword (passwordInput); 
    };

    const handleConfirmPasswordChange = (event) => {
        let confirmPasswordInput = event.target.value; 
        setConfirmPassword (confirmPasswordInput);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let newUser = { firstName, lastName, email, password, confirmPassword };
        userHandler.addUser(newUser);
        event.target.reset()
      };


  return (
    <> 
      <div className='w-1/3 grid justify-items-center w-screen'>
          <form component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }} className='bg-salmon py-5 px-5 rounded-xl my-10'>
            <div className='grid justify-center'>
              <div className='flex mt-3'>
                <label className='font-poppins font-bold mr-4 text-md flex self-center'> Nombre: </label> 
                <input className='rounded-md py-1 hover:border-solid hover:border-orange hover:border-2 w-full' type='text' placeholder='Nombre' onChange={handleFirstNameChange} focus='true' required/>
              </div>
              <div  className='flex mt-3'>
                <p className='font-poppins font-bold mr-4 text-md flex self-center'> Apellido: </p> 
                <input className='rounded-md py-1 hover:border-solid hover:border-orange hover:border-2 w-full' type='text' placeholder='Apellido' onChange={handleLastNameChange} focus='true' required/>
              </div>
              <div className='flex mt-3' >
                <p className='font-poppins font-bold mr-4 text-md flex self-center'> Email: </p> 
                <input className='rounded-md py-1 hover:border-solid hover:border-orange hover:border-2 w-full' type='text' placeholder='Email' onChange={handleEmailChange} focus='true' required/>
              </div>
              <div className='flex mt-3'>
                <p className='font-poppins font-bold mr-4 text-md flex self-center'> Contraseña: </p> 
                <input className='rounded-md py-1 hover:border-solid hover:border-orange hover:border-2 w-full' type='text' placeholder='Contraseña' onChange={handlePasswordChange} focus='true' required/>
              </div>
              <div className='flex mt-3'>
                <p className='font-poppins font-bold mr-4 text-md flex self-center'> Confirmar contraseña: </p> 
                <input className='rounded-md py-1 hover:border-solid hover:border-orange hover:border-2 w-fit' type='text' placeholder='Confirmar contraseña' onChange={handleConfirmPasswordChange} focus='true' required/> 
              </div>
            </div>
            <div className="w-full flex justify-center mt-4"> 
            <button
              type="submit" onClick={handleSubmit}
              className='text-white font-poppins uppercase text-center bg-orange py-3 px-7 rounded-lg hover:border-solid hover:border-white hover:border-2 my-4'>
              Enviar
            </button>
            </div>
            <div className="flex justify-center">
              <div>
                <p className='my-2'>
                  ¿Ya tienes una cuenta? <a href="#" className='text-orange font-poppins hover:text-white'> Inicia sesión </a>
                </p>
              </div>
              </div>
            
          </form>
        </div>
      </>
  );
}

export default RegisterForm; 