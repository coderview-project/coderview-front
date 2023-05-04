import React from 'react';
import Navb from '../components/Navb'
import Footer from '../components/Footer'

function AdminBootcampView() {

    return (
        <div>
            <Navb />
            <div className="flex">
                <div className="flex">
                    <div className="Name mx-4 md:mx-0 flex h-16 bg-white text-orange text-2xl font-poppins md:text-3xl md:pl-28"><p className="px-6 pl-6 md:pl-0 text-center">Lidia García</p>
                    </div>

                    <div className="Bar mx-auto h-16 md:w-screen bg-salmon font-poppins text-center text-white text-xl md:text-3xl"><p className='md:py-4 md:pr-44'>FEMCODERS SEVILLA</p></div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row md:py-12'>
                <div className='flex flex-col py-6 '>
                    <div className="flex font-poppins text-white"> <button className=" bg-orange w-56 h-16 my-10 mx-20 p-2 rounded-3xl">GESTIONAR COMPETENCIAS</button>
                    </div>
                    <div className="flex font-poppins text-white"> <button className="bg-orange w-56 h-16 my-10 mx-20 p-2 rounded-3xl">GESTIONAR ALUMN@S</button>
                    </div>
                    <div className="flex font-poppins text-white"> <button className="bg-orange w-56 h-16 my-10 mx-20 p-2 rounded-3xl">GESTIONAR EVALUACIONES</button>
                    </div>
                </div>
                <div className="xcoder-box flex font-poppins md:h-auto md:w-screen">
                    <div className='flex md:flex-col w-1/2 font-poppins text-center text-2xl'>Alumn@s
                        <div>
                        </div>
                    </div>
                    <div className='flex flex-row md:flex-col w-1/2 font-poppins text-center text-2xl'>Email
                        <div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AdminBootcampView