import React from 'react';
import Footer from '../components/Footer';

function HomeView() {

    return (

        <div>
            <div><img className="bg-cover bg-top h-72 w-full object-fit"
                src="src\assets\social-media-shorted.jpg"
                alt="background-home"></img>
            </div>


            <div><img className="h-full w-full bg-contain" src="src\assets\fonde de pantalla.png" alt="background-2-home"></img>
                <p className="text-center object-fit text-2xl absolute inset-x-0 bottom-80  bg-white bg-opacity-80">¿Qué es CodeRview?</p>

                <p className="text-center leading-6 w-11/12 p-8 absolute inset-x-14 bottom-36 bg-white bg-opacity-80 rounded-xl">CodeRview es una herramienta pedagógica diseñada para hacer y gestionar evaluaciones sobre el desempeño propio y de los compañeros durante procesos de aprendizaje, enfocada en particular al formato del Bootcamp. <br></br>De una forma rápida, divertida y visual tanto alumnos como formadores podrán acceder a un total de cuatro evaluaciones dispuestas a lo largo de las formaciones y ver la evolución en los conocimientos y la concepción propia de los alumnos.</p>


                <p className="text-center text-2xl absolute inset-x-0 bottom-10 h-10 bg-white bg-opacity-80">¿Cómo funciona?</p>

                <p className="text-center leading-6 p-8 absolute inset-x-14 top-full bg-white bg-opacity-80 h-96 rounded-xl"></p>
            </div>

            <Footer />
        </div>

    )
}
export default HomeView