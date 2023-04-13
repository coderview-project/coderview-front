import RegisterForm from '../components/RegisterFrom'
import Navb from '../components/Navb';

function Register() {
    return(
        <>
       
        <div className='grid justify-items-stretch'> 
            <div className='w-screen h-36 mt-44'>
                <img className='w-screen h-40 object-cover' src='src\assets\register_header.jpg'/> 
            </div> 
            <p className='text-xl uppercase text-white bg-orange text-center py-3 font-poppins'> 
                Registro de usuario
            </p>
        </div>
            <RegisterForm/> 
        </> 
    )
}

export default Register; 
