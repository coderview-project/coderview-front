import Navb from '../components/Navb';
import Footer from '../components/Footer';
import RegisterInstructorForm from '../components/RegisterInstructorForm';

function RegisterInstructor() {
    return(
        <>
       <Navb/>
        <div className='grid justify-items-stretch'> 
            <div className='w-screen h-36 mt-44'>
                <img className='w-screen h-40 object-cover' src='src\assets\register_header.jpg'/> 
            </div> 
            <p className='text-xl uppercase text-white bg-orange text-center py-3 font-poppins'> 
                Registro de formadores
            </p>
        </div>
        <RegisterInstructorForm/> 
        <Footer/>
        </> 
    )
}

export default RegisterInstructor; 