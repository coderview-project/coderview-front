import React from 'react';
import Navb from '../components/Navb'
import Footer from '../components/Footer'

function AdminBootcampView() {

    return (
        <div className=" py-48">
            <Navb />
            <div className="flex flex-auto !important">

                <div className="Name flex flex-row-reverse bg-white text-orange text-3xl font-poppins"><p className="py-4 px-1">Lidia García</p><img src="src\assets\admin-photo.png" className="h-20 w-20"></img>
                </div>

                <div className= "Bar h-18 px-72 bg-salmon font-poppins text-center text-white text-xl">FEMCODERS SEVILLA</div>
            </div>
            <Footer />
        </div>
    )
}

export default AdminBootcampView