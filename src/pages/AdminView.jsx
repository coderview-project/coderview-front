import React from 'react';
import Footer from '../components/Footer';

function AdminView() {

    return (

        <div className= "">

            <div className="bg-cover bg-top h-24 bg-orange object-fit"> <p className="text-white text-left text-3xl font-poppins px-4 py-7"> Lidia García </p>
            </div>

            <div className="flex flex-center float-right text-xl font-poppins text-center">

                <button type="button" className="flex flex-center mx-8 my-12"><img className="h-16 w-16" src="src\assets\icon _plus circle_.png" alt="create-bootcamp"></img><p className="py-4 px-2">Crear Bootcamp</p></button>

                <button type="button" className="flex flex-center mx-8 my-12"><img className="h-16 w-16" src="src\assets\icon _gear_.png" alt="edit-bootcamp"></img><p className="py-4 px-2">Editar Bootcamp</p></button>

                <button type="button" className="flex flex-center mx-8 my-12"><img className="h-16 w-16" src="src\assets\icon _minus circle_.png" alt="edit-bootcamp"></img><p className="py-4 px-2">Eliminar Bootcamp</p></button>

            </div>

            <div className="my-9 grid grid-cols-2">

                <div className="py-12 grid grid-col text-center ">
                    <img className="flex-auto w-96 h-96 relative my-10 inset-x-8 " src="src\assets\admin-photo.png" alt="admin-photo"></img>

                    <button type="button" className="flex items-center bg-orange w-56 h-22 my-10 mx-28 p-2 rounded-3xl"><img className="px-2 py-1" src="src\assets\icon _pencil_.png" alt="edit-profile" />Editar perfil personal</button>

                </div>

                <div className="mx-96 my-28">
                    <button type="button" className="flex items-center uppercase bg-salmon w-64 h-22 my-10 mx-28 p-2 rounded-3xl"><img className="px-2 py-1 uppercase" src="src\assets\icon _pencil_.png" alt="edit-profile" />Femcoders Sevilla</button>

                    <button type="button" className="flex items-center uppercase bg-salmon w-64 h-22 my-10 mx-28 p-2 rounded-3xl"><img className="px-2 py-1 uppercase" src="src\assets\icon _pencil_.png" alt="edit-profile" />Femcoders Barcelona</button>

                    <button type="button" className="flex items-center uppercase bg-salmon w-64 h-22 my-10 mx-28 p-2 rounded-3xl"><img className="px-2 py-1 uppercase" src="src\assets\icon _pencil_.png" alt="edit-profile" />Front-end Asturias</button>

                </div>

            </div>

            <div className="h-1.5">
                
            </div>

            <Footer />
        </div >
        

    )
}
export default AdminView
