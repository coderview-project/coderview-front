import React, { useState } from "react";
import { bootcampHandler } from "../handler/bootcampHandler";

export default function RegisterModal({showModal, handleClose}) {

  const [title, setTitle] = useState('');
  const [creatorId, setCreatorId] = useState(null);
  const [startDate, setStartDate] = useState(); 
  const [endDate, setEndDate] = useState(); 

  const handleTitleChange = (event) => {
    let titleInput = event.target.value;
    setTitle(titleInput);
  };
  const handleCreatorIdChange = (event) => {
    let creatorIdInput = event.target.value; 
    setCreatorId(creatorIdInput);
  }
  const handleStartDateChange = (event) => {
    let startDateInput = event.target.value; 
    setStartDate(startDateInput); 
  }
  const handleEndDateChange = (event) => {
    let endDateInput = event.target.value; 
    setEndDate(endDateInput);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let newBootcamp = { title, creatorId, startDate, endDate };
    console.log("Datos del formulario:", newBootcamp);
    bootcampHandler.postBootcamp(newBootcamp);
    
  };

  return (
    <>
        <>
          <div show = {showModal} onHide= {handleClose} className="fixed inset-0 z-50 flex items-center justify-center ">
            <div className="relative w-full max-w-md mx-auto ">
              <div className="bg-salmon rounded-md shadow-lg p-6">
                <h1 className="text-2xl font-semibold mb-4">
                  Agregar Bootcamp
                </h1>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="bName" className="block mb-2">
                    Nombre de Bootcamp:
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    onChange={handleTitleChange}
                    className="w-full border-grey rounded-md px-4 py-2 mb-4"
                  />
                  <label htmlFor="bName" className="block mb-2">
                    Tu Id de formador@:
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    onChange={handleCreatorIdChange}
                    className="w-full border-grey rounded-md px-4 py-2 mb-4"
                  />
                  <label htmlFor="fechaInicio" className="block mb-2">
                    Fecha de Inicio:
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    onChange={handleStartDateChange}
                    className="w-full border-grey rounded-md px-4 py-2 mb-4"
                  />
                  <label htmlFor="fechaTermino" className="block mb-2">
                    Fecha de Término:
                  </label>
                  <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    onChange={handleEndDateChange}
                    className="w-full border-grey rounded-md px-4 py-2 mb-4"
                  />
                  <div className="flex justify-end">
                    <button
                      className="bg-grey text-white active:bg-orange font-bold text-sm px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-2"
                      type="submit"
                    >
                      Guardar
                    </button>
                    <button
                      className="bg-grey text-white active:bg-orange font-bold text-sm px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none"
                      type="button"
                      onClick={handleClose}
                    >
                      Cerrar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div
            className="fixed inset-0 bg-grey opacity-30">
        </div>
        </>
     
    </>
  );
}