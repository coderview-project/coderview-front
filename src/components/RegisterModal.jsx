import React, { useState } from "react";

export default function RegisterModal({showModal, handleClose}) {
  console.log (showModal)
    //const [showModal, setShowModal] = useState(false);
  const [bootcamp, setBootcamp] = useState({
    bName: "",
    startDate: "",
    endDate: ""
    // coders: []
  });

  const handleChange = (e) => {
    const { bName, value } = e.target;
    setBootcamp({ ...bootcamp, [bName]: value });
  };

  // const handleAgregarCoder = () => {
  //   if (bootcamp.codigo) {
  //     setBootcamp({ ...bootcamp, coders: [...bootcamp.coders, bootcamp.codigo] });
  //     setBootcamp({ ...bootcamp, codigo: "" });
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newBootcamp = { bName, creatorId, startDate, endDate };
    bootcampHandler.postBootcamp(newBootcamp);
    resetForm();
    console.log("Datos del formulario:", bootcamp);
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
                    value={bootcamp.bName}
                    onChange={handleChange}
                    className="w-full border-grey rounded-md px-4 py-2 mb-4"
                  />
                  <label htmlFor="bName" className="block mb-2">
                    Tu Id de formador@:
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={bootcamp.creatorId}
                    onChange={handleChange}
                    className="w-full border-grey rounded-md px-4 py-2 mb-4"
                  />
                  <label htmlFor="fechaInicio" className="block mb-2">
                    Fecha de Inicio:
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={bootcamp.startDate}
                    onChange={handleChange}
                    className="w-full border-grey rounded-md px-4 py-2 mb-4"
                  />
                  <label htmlFor="fechaTermino" className="block mb-2">
                    Fecha de Término:
                  </label>
                  <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={bootcamp.endDate}
                    onChange={handleChange}
                    className="w-full border-grey rounded-md px-4 py-2 mb-4"
                  />
                  {/* <label htmlFor="codigo" className="block mb-2">
                    Coders
                  </label>
                  <input
                    type="text"
                    id="codigo"
                    name="codigo"
                    value={bootcamp.codigo}
                    onChange={handleChange}
                    className="w-full border-grey rounded-md px-4 py-2 mb-4"
                  /> */}
                  {/* <div className="flex justify-end mb-4">
                  <button
                      className="bg-grey text-white active:bg- font-bold text-sm px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-2"
                      type="button"
                      onClick={handleAgregarCoder}
                    >
                      Agregar Coder
                    </button>
                  </div>
                  {bootcamp.coders.length > 0 && (
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold mb-2">Coders Agregados:</h3>
                      <ul className="list-disc list-inside">
                        {bootcamp.coders.map((coder, index) => (
                          <li key={index}>{coder}</li>
                        ))}
                      </ul>
                    </div>
                  )} */}
                 
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
                      onClick={handleClose }
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