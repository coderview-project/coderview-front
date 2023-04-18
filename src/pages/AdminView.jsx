import React from 'react';
import Footer from '../components/Footer';

function AdminView() {

    return (

        <div className= "">

            <div className="bg-cover bg-top h-22 bg-orange object-fit"> <p className="text-white text-left text-3xl font-poppins px-4 py-7"> Lidia García </p>
            </div>

            <div className="flex float-right mx-10 my-28 text-xl font-poppins text-center">

                <button type="button" className="flex flex-center"><img className="h-16 w-16" src="src\assets\icon _plus circle_.png" alt="create-bootcamp"></img><p className="py-4 px-2">Crear Bootcamp</p></button>

                <button type="button" className="flex flex-center mx-10"><img className="h-16 w-16" src="src\assets\icon _gear_.png" alt="edit-bootcamp"></img><p className="py-4 px-2">Editar Bootcamp</p></button>

                <button type="button" className="flex flex-center"><img className="h-16 w-16" src="src\assets\icon _minus circle_.png" alt="edit-bootcamp"></img><p className="py-4 px-2">Eliminar Bootcamp</p></button>

            </div>

            <div className=" flex flex-cols-2 font-poppins">

                <div className="py-16 flex flex-col text-center ">
                    <img className="flex-auto w-96 h-96 relative my-12 inset-x-8 " src="src\assets\admin-photo.png" alt="admin-photo"></img>

                    <button type="button" className="flex items-center bg-orange w-56 h-22 my-10 mx-28 p-2 rounded-3xl"><img className="px-2 py-1" src="src\assets\icon _pencil_.png" alt="edit-profile" />Editar perfil personal</button>

                </div>

                <div className="mx-32 my-48 font-poppins">
                    <button type="button" className="flex items-center uppercase bg-salmon w-72 h-26 my-10 mx-28 p-2 rounded-3xl"><img className="px-2 py-1 uppercase" src="src\assets\icon _pencil_.png" alt="edit-profile" />Femcoders Sevilla</button>

                    <button type="button" className="flex items-center uppercase bg-salmon w-72 h-22 my-10 mx-28 p-2 rounded-3xl"><img className="px-2 py-1 uppercase" src="src\assets\icon _pencil_.png" alt="edit-profile" />Femcoders Barcelona</button>

                    <button type="button" className="flex items-center uppercase bg-salmon w-72 h-22 my-10 mx-28 p-2 rounded-3xl"><img className="px-2 py-1 uppercase" src="src\assets\icon _pencil_.png" alt="edit-profile" />Front-end Asturias</button>

                </div>

            </div>

            <div className="h-8">
                
            </div>

            <Footer />
        </div >
        

    )
}
export default AdminView
