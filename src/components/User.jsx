import React from "react";

function User() {
  return (
    <>
      <div className="flex bg-orange">
        <header className="h-20 w-screen">
          <h2 className="text-3xl text-white text-justify pl-8 mt-4 font-semibold ">
            Nombre de Usuario
          </h2>
        </header>
      </div>
      <div className="flex flex-wrap justify-around">
        <div className="flex flex-col m-8 md:w-96 justify-center items-center">
          <img
            src="src\components\assets\admin-photo (1).png"
            alt="photo-user"
            className="h-80 w-full p-6"
          />
          <button
            type="button"
            className="flex flex-row bg-orange p-3 m-2 rounded-3xl text-black text-xl justify-center items-center font-semibold border"
          >
            <img
              className="py-2 mx-2"
              src="src\components\assets\icon _pencil_.png"
              alt="edit-profile"
            />
            Editar perfil usuario
          </button>
        </div>
        <div className="flex flex-col m-10 p-2 md:w-1/2">
          <div className="rounded-3xl m-4 bg-salmon font-poppins">
            <div className="flex flex-row mt-6 text-center justify-center items-center ">
              <h2 className="text-2xl font-semibold">MIS EVALUACIONES</h2>
            </div>
            <div className="m-6 p-2 place-content-center">
              <div className="flex flex-wrap justify-center">
                {/* Botones de Evaluaciones */}
                <div className="flex m-4 p-4 rounded-2xl bg-white text-center justify-center w-48">
                  <button className="text-black text-lg">1º EVALUACIÓN</button>
                </div>
                <div className="flex m-4 p-4 text-lg rounded-2xl bg-white text-center justify-center w-48">
                  <button className="text-black">2º EVALUACIÓN</button>
                </div>
                <div className="flex m-4 p-4 text-lg  rounded-2xl bg-white text-center justify-center w-48">
                  <button className="text-black">3º EVALUACIÓN</button>
                </div>
                <div className="flex m-4 p-4 text-lg rounded-2xl bg-white text-center justify-center w-48">
                  <button className="text-black">4º EVALUACIÓN</button>
                </div>
                <div className="flex m-4 p-4 text-lg rounded-2xl bg-white text-center justify-center w-48">
                  <button className="text-black">CO-EVALUAR</button>
                </div>
                <div className="flex m-4 p-4 rounded-2xl bg-orange text-center justify-center w-48">
                  <button className="text-white ">CONSULTAR EVALUACIONES</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;