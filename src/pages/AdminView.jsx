import React, { useState, useEffect } from 'react';
import LoggedNavb from '../components/LoggedNavb';
import Footer from '../components/Footer';
import "../Style/adminview.css";
import RegisterModal from '../components/RegisterModal';
import { userHandler } from '../handler/userHandler';

function AdminView({user, bootcamp}) {
    console.log(user)
    console.log(bootcamp)
    const [showModal, setShowModal] = useState (false);
    const handleClose = () => setShowModal (false);
    const handleShow = () => setShowModal (true);

    // {user[0].userName} & Id de formador: {user[0].id} 
    return (
        <>
        <LoggedNavb/>
        <div>
            { showModal ?  <RegisterModal showModal={showModal} handleClose={handleClose} /> : null }
            <div className="Name bg-cover bg-top h-22 bg-orange object-fit"> <p className="text-white text-left text-3xl font-poppins px-4 py-7"> Bienvenido {user[0]?.userName}. Tu Id de formador es: {user[0]?.id} </p>
            </div>

            <div className="flex flex-col">
                <div className="Buttons-bootcamp flex justify-center float-right md:mt-6 ml-10 mt-6 text-xl font-poppins text-center">

                    <button type="button" onClick={ handleShow} className="Create flex flex-center"><img className="h-12 w-12 mt-1 md: mb-4" src="src\assets\icon _plus circle_.png" alt="create-bootcamp"></img><p className="py-4 px-2">Crear Bootcamp</p></button> 

                    <button type="button" className="Edit flex flex-center md:mx-10"><img className="h-12 w-12 mt-1 md: mb-4" src="src\assets\icon _gear_.png" alt="edit-bootcamp"></img><p className="py-4 px-2">Editar Bootcamp</p></button>

                    <button type="button" className="flex flex-center"><img className="h-12 w-12 mt-1" src="src\assets\icon _minus circle_.png" alt="edit-bootcamp"></img><p className="py-4 px-2">Eliminar Bootcamp</p></button>

                </div>

                <div className="Photo flex justify-center flex-cols-2 font-poppins">

                    <div className="flex flex-col text-center">
                        <div className="w-40 h-40 mb-8 ml-16 md:w-80 md:h-80">
                            <img className="object-cover relative my-12 inset-x-8 " src="src\assets\admin-photo.png" alt="admin-photo"></img>
                        </div>

                        <button type="button" className="flex items-center bg-orange w-56 h-22 mt-10 ml-16 md:my-10 md:mx-28 p-2 rounded-3xl md: m-2"><img className="px-2 py-1" src="src\assets\icon _pencil_.png" alt="edit-profile" />Editar perfil personal</button>

                    </div>

                    <div className="Bootcamps mt-14 font-poppins">
                        <button type="button" className="flex items-center uppercase bg-salmon w-72 h-26 ml-8 md:my-10 md:mx-28 p-2 rounded-3xl"><img className="px-2 py-1 uppercase" src="src\assets\icon _pencil_.png" alt="edit-profile" />{bootcamp.title}</button>

                        <button type="button" className="flex items-center uppercase bg-salmon w-72 h-22 my-10 ml-8 md:my-10 md:mx-28 p-2 rounded-3xl"><img className="px-2 py-1 uppercase" src="src\assets\icon _pencil_.png" alt="edit-profile" />Femcoders Barcelona</button>

                        <button type="button" className="flex items-center uppercase bg-salmon w-72 h-22 ml-8 mb-10 md:my-10 md:mx-28 p-2 rounded-3xl"><img className="px-2 py-1 uppercase" src="src\assets\icon _pencil_.png" alt="edit-profile" />Front-end Asturias</button>

                    </div>

                </div>
            </div>
            <Footer />
        </div > 
        </>
    )
}
export default AdminView;
