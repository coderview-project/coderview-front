import React, { useState } from "react";

export default function RegisterModal() {
  const [showModal, setShowModal] = useState(false);
  const [bootcamp, setBootcamp] = useState({
    nombre: "",
    fechaInicio: "",
    fechaTermino: "",
    coders: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBootcamp({ ...bootcamp, [name]: value });
  };

  const handleAgregarCoder = () => {
    if (bootcamp.codigo) {
      setBootcamp({ ...bootcamp, coders: [...bootcamp.coders, bootcamp.codigo] });
      setBootcamp({ ...bootcamp, codigo: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
 
    console.log("Datos del formulario:", bootcamp);
  };

  return (
    <>
      <button
        className="bg-orange text-white active:bg-salmon font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Abrir Bootcamp
      </button>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="relative w-full max-w-md mx-auto">
              <div className="bg-white rounded-md shadow-lg p-6">
                <h1 className="text-2xl font-semibold mb-4">
                  Agregar Bootcamp
                </h1>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="nombre" className="block mb-2">
                    Nombre de Bootcamp:
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={bootcamp.nombre}
                    onChange={handleChange}
                    className="w-full border-grey rounded-md px-4 py-2 mb-4"
                  />
                  <label htmlFor="fechaInicio" className="block mb-2">
                    Fecha de Inicio:
                  </label>
                  <input
                    type="date"
                    id="fechaInicio"
                    name="fechaInicio"
                    value={bootcamp.fechaInicio}
                    onChange={handleChange}
                    className="w-full border-grey rounded-md px-4 py-2 mb-4"
                  />
                  <label htmlFor="fechaTermino" className="block mb-2">
                    Fecha de Término:
                  </label>
                  <input
                    type="date"
                    id="fechaTermino"
                    name="fechaTermino"
                    value={bootcamp.fechaTermino}
                    onChange={handleChange}
                    className="w-full border-grey rounded-md px-4 py-2 mb-4"
                  />
                  <label htmlFor="codigo" className="block mb-2">
                    Coders
                  </label>
                  <input
                    type="text"
                    id="codigo"
                    name="codigo"
                    value={bootcamp.codigo}
                    onChange={handleChange}
                    className="w-full border-grey rounded-md px-4 py-2 mb-4"
                  />
                  {/* Botón de "Agregar Coder" */}
                  <div className="flex justify-end mb-4">
                  <button
                      className="bg-salmon text-white active:bg- font-bold text-sm px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-2"
                      type="button"
                      onClick={handleAgregarCoder}
                    >
                      Agregar Coder
                    </button>
                  </div>
                  {/* Lista de coders agregados */}
                  {bootcamp.coders.length > 0 && (
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold mb-2">Coders Agregados:</h3>
                      <ul className="list-disc list-inside">
                        {bootcamp.coders.map((coder, index) => (
                          <li key={index}>{coder}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {/* Botones de "Guardar" y "Cerrar" */}
                  <div className="flex justify-end">
                    <button
                      className="bg-grey text-white active:bg-grey font-bold text-sm px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-2"
                      type="submit"
                    >
                      Guardar
                    </button>
                    <button
                      className="bg-grey text-white active:bg-grey font-bold text-sm px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Cerrar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div
            className="fixed inset-0 bg-gray-900 opacity-75"
            onClick={() => setShowModal(false)}
          ></div>
        </>
      ) : null}
    </>
  );
}