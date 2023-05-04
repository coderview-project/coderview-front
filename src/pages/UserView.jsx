import React from 'react'
import Footer from '../components/Footer'
import LoggedNavb from '../components/LoggedNavb'
import { useNavigate } from "react-router-dom";


function UserView({user}) {
  console.log(user);
  const navigate = useNavigate(); 

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate("/Evaluation");
  }

  const handleEvaluation = (e) => {
    e.preventDefault();
    navigate("/MyEvaluations");
  }
  return (
    <>
        <LoggedNavb/>
        <div className="flex bg-orange ">
        <header className="h-20 w-screen">
          <h2 className="text-3xl text-white text-justify pl-8 mt-4 font-semibold ">
            Bienvenid@ {user[0]?.userName}
          </h2>
        </header>
      </div>
      <div className="flex flex-wrap justify-around">
        <div className="flex flex-col mt-8 md:w-96 justify-center items-center">
          <img
            src="src\assets\admin-photo.png"
            alt="photo-user"
            className="h-80 w-full p-6"
          />
          <button
            type="button"
            className="flex flex-row bg-orange p-3 m-2 rounded-3xl text-white text-xl justify-center items-center font-semibold "
          >
            <img
              className="py-2 mx-2"
              src="src\assets\icon _pencil_.png"
              alt="edit-profile"
            />
            Editar perfil usuario
          </button>
        </div>
        <div className="flex flex-col m-10 md:w-1/2">
          <div className="rounded-3xl m-4 bg-salmon font-poppins">
            <div className="flex flex-row mt-6 text-center justify-center items-center ">
              <h2 className="text-2xl font-semibold">MIS EVALUACIONES</h2>
            </div>
            <div className="m-4  place-content-center">
              <div className="flex flex-wrap justify-center">
                <div className="flex m-4 p-4 rounded-2xl bg-white text-center justify-center w-48">
                  <button className="text-black text-lg" onClick={handleNavigate}>1º EVALUACIÓN</button>
                </div>
                <div className="flex m-4 p-4 text-lg rounded-2xl bg-white text-center justify-center w-48">
                  <button className="text-black" onClick={handleNavigate}>2º EVALUACIÓN</button>
                </div>
                <div className="flex m-4 p-4 text-lg  rounded-2xl bg-white text-center justify-center w-48">
                  <button className="text-black" onClick={handleNavigate}>3º EVALUACIÓN</button>
                </div>
                <div className="flex m-4 p-4 text-lg rounded-2xl bg-white text-center justify-center w-48">
                  <button className="text-black" onClick={handleNavigate}>4º EVALUACIÓN</button>
                </div>
                <div className="flex m-4 p-4 text-lg rounded-2xl bg-white text-center justify-center w-48">
                  <button className="text-black" onClick={handleNavigate}>CO-EVALUAR</button>
                </div>
                <div className="flex m-4 p-4 rounded-2xl bg-orange text-center justify-center w-48">
                  <button className="text-white" onClick={handleEvaluation}>CONSULTAR EVALUACIONES</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <Footer/> 
    </>
    
  )
}

export default UserView;
