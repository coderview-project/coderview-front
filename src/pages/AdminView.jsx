import React from 'react';
import Footer from '../components/Footer';

function AdminView() {

    return (

        <div>
            <div className="bg-cover bg-top h-20 w-full bg-orange object-fit"> <p className="text-white text-left text-3xl font-poppins px-4 py-5"> Lidia García </p>
                <div className="flex px-96 mx-24">

                    <button type="button" className="text-center"><img className="h-16 w-16" src="src\assets\icon _plus circle_.png" alt="create-bootcamp"></img> Crear Bootcamp </button>

                    <button type="button" className=""><img className="h-16 w-16" src="src\assets\icon _gear_.png" alt="edit-bootcamp"></img> Editar Bootcamp</button>

                    <button type="button" className=""><img className="h-16 w-16" src="src\assets\icon _minus circle_.png" alt="edit-bootcamp"></img> Eliminar Bootcamp</button>
                </div>

            </div>


            <div className=" w-72 h-72 flex-auto text-center">
                <img className="flex-auto relative my-10 inset-x-8 " src="src\assets\admin-photo.png" alt="admin-photo"></img>

                <button type="button" className="flex items-center bg-orange w-56 h-22 my-10 mx-28 p-2 rounded-3xl"><img className="px-2 py-1" src="src\assets\icon _pencil_.png" alt="edit-profile" />Editar perfil personal</button>

            </div>

            <Footer />
        </div>

    )
}
export default AdminView

//<div class="flex-initial text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
//Medium length