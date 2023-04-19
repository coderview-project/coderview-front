import * as React from 'react';
import {useState} from 'react';
import { userHandler } from '../handler/userHandler';


function RegisterForm() {

    const [userName, setUserName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const[userRolId, setUserRolId] = useState(null);
    // const [confirmPassword, setConfirmPassword] =useState('');

    const handleUserNameChange = (event) => {
        let userNameInput = event.target.value;
        setUserName (userNameInput);
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

    // const handleUserRolIdChange = (event) => {
    //   let userRolIdPicked = event.target.value; 
    //   setUserRolId(userRolIdPicked);
    // }
    // const handleConfirmPasswordChange = (event) => {
    //     let confirmPasswordInput = event.target.value; 
    //     setConfirmPassword (confirmPasswordInput);
    // };

    const handleSubmit = (event) => {
        event.preventDefault();
        let newUser = { userName, lastName, email, password };
        userHandler.postUser(newUser);
        event.target.reset; 
      };


  return (
    <> 
      <div className='w-screen grid justify-items-center'>
          <form component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }} className='bg-salmon py-5 px-5 rounded-xl my-10'>
            <div className='grid grid-rows-5'>
              <div className='flex justify-between mt-3 w-full'>
                <label className='font-poppins font-bold mr-4 text-md'> Nombre: </label> 
                <input className='rounded-md py-1' type='text' placeholder='Nombre' onChange={handleUserNameChange} focus='true' required/>
              </div>
              <div  className='flex justify-between mt-3 w-full'>
                <label className='font-poppins font-bold mr-4 text-md'> Apellido: </label> 
                <input className='rounded-md py-1' type='text' placeholder='Apellido' onChange={handleLastNameChange} focus='true' required/>
              </div>
              <div className='flex justify-between mt-3 w-full' >
                <label className='font-poppins font-bold mr-4 text-md'> Email: </label> 
                <input className='rounded-md py-1 ' type='text' placeholder='Email' onChange={handleEmailChange} focus='true' required/>
              </div>
              <div className='flex justify-between mt-3 w-full'>
                <label className='font-poppins font-bold mr-4 text-md'> Contraseña: </label> 
                <input className='rounded-md py-1' type='password' placeholder='Contraseña' onChange={handlePasswordChange} focus='true' required/>
              </div>
              {/* <div id="userRol-group" className='flex justify-center w-full mt-3 font-poppins font-bold'>¿Eres formador/a o coder?</div>
              <div role="group" aria-labelledby="my-radio-group">
                <div className='flex justify-around' > 
                <label>
                  <input type="radio" name="userRol" value="2" className='mr-3' onChange={handleUserRolIdChange}
                   />
                    Formador
                </label>
                <label>
                  <input type="radio" name="userRol" value="3" className='mr-3' onChange={handleUserRolIdChange} />
                    Coder
                </label>
                </div>
                </div> */}

              {/* <div className='flex justify-between mt-3 w-full'>
                <label className='font-poppins font-bold mr-4 text-md'> Confirmar contraseña: </label> 
                <input className='rounded-md py-1' type='text' placeholder='Confirmar contraseña' onChange={handleConfirmPasswordChange} focus='true' required/> 
              </div> */}
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