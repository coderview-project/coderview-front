import RegisterForm from '../components/RegisterFrom'

function Register() {
    return(
        <>
        <div className='grid justify-items-stretch'> 
            <div className='w-screen h-36'>
                <img className='w-screen h-36 object-cover' src='src\assets\register_header.jpg'/> 
            </div> 
            <p className='text-xl uppercase text-white bg-orange text-center py-3 font-poppins'> 
                ¡Regístrate!
            </p>
        </div>
            <RegisterForm/> 
        </> 
    )
}

export default Register; 
