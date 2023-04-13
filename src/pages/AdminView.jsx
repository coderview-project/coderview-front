import React from 'react';
import Footer from '../components/Footer';

function AdminView() {

    return (

        <div>
            <div className="bg-cover bg-top h-20 w-full bg-orange object-fit"> <p className= "text-white text-left text-3xl font-poppins px-4 py-5"> Lidia García </p>
            </div>


            <div className=" flex-col items-center h-full w-96 bg-contain">
                <img className="flex-col w-96 h-96 relative my-10 inset-x-8" src="src\assets\admin-photo.png" alt= "admin-photo"></img>

                <button type="button" className="flex items-center bg-orange w-56 h-22 my-10 mx-28 p-2 rounded-3xl"><img className="px-2 py-1" src="src\assets\icon _pencil_.png" alt="edit-profile"/>Editar perfil personal</button>
        
            </div>

            <div className="flex justify-center h-24 w-24 mx-56 my-12 w-24 bg-contain">
                <button type="button" className=""><img className="h-18 w-18" src= "src\assets\icon _plus circle_.png" alt="create-bootcamp"></img></button>
            </div>

            <div className="flex justify-center h-24 w-24 mx-56 my-12 w-24 bg-contain">
                <button type="button" className=""><img className="h-18 w-18" src= "src\assets\icon _gear_.png" alt="edit-bootcamp"></img></button>
            </div>

            <div className="flex justify-center h-24 w-24 mx-56 my-12 w-24 bg-contain">
                <button type="button" className=""><img className="h-18 w-18" src= "src\assets\icon _minus circle_.png" alt="edit-bootcamp"></img></button>
            </div>
            <Footer />
        </div>

    )
}
export default AdminView