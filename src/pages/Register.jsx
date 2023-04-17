import RegisterForm from '../components/RegisterForm'
import Navb from '../components/Navb';
import Footer from '../components/Footer';

function Register() {
    return(
        <>
       <Navb/>
        <div className='grid justify-items-stretch'> 
            <div className='w-screen h-36 mt-44'>
                <img className='w-screen h-40 object-cover' alt= "header" src='src\assets\register_header.jpg'/> 
            </div> 
            <p className='text-xl uppercase text-white bg-orange text-center py-3 font-poppins'> 
                Registro de usuario
            </p>
        </div>
        <RegisterForm/> 
        <Footer/>
        </> 
    )
}

export default Register; 
