function User() {
  return (
    <div className="grid grid-cols-2">
      <div className="col-span-3 bg-orange h-20 w-screem ">
        <div className="flex flex-row m-6 items-center font-poppins ">
          <h1 className="text-3xl text-white text-medium ">
            Nombre de Usuario
          </h1>
        </div>
      </div>
      <div className=" flex-col items-center h-full w-96 bg-contain">
        <img
          className="flex-col w-90 h-90 relative m-10 inset-x-8"
          src="src\components\assets\admin-photo (1).png"
          alt="user-photo"
        ></img>

        <button
          type="button"
          className="flex items-center bg-orange w-56 h-22 my-10 mx-36 p-2 rounded-3xl"
        >
          <img
            className="px-2 py-1"
            src="src\components\assets\icon _pencil_.png"
            alt="edit-profile"
          />
          Editar perfil usuario
        </button>
      </div>
      <div className="grid grid-col-2 md:flex-row rounded-lg p-2 m-10 bg-salmon  font-poppins   ">
        <div className="flex flex-row p-2 mt-6  text-center justify-center items-center ">
          <h2 className=" text-3xl font-semibold ">MIS EVALUACIONES</h2>
        </div>
        <div className="grid grid-cols-2  m-6 p-2 place-content-center">
          <div className="flex m-4 p-4 rounded-3xl bg-white text-center justify-center ">
            <button className="text-black text-lg">1º EVALUACIÓN</button>
          </div>
          <div className="flex  m-4 p-4 text-lg rounded-3xl bg-white text-center justify-center ">
            <button className="text-black">2º EVALUACIÓN</button>
          </div>
          <div className="flex  m-4 p-4 text-lg   rounded-3xl bg-white text-center justify-center ">
            <button className="text-black">3º EVALUACIÓN</button>
          </div>
          <div className="flex  m-4 p-4 text-lg  rounded-3xl bg-white text-center justify-center ">
            <button className="text-black">4º EVALUACIÓN</button>
          </div>
          <div className="flex m-4 p-4 text-lg  rounded-3xl bg-white text-center justify-center ">
            <button className="text-black">CO-EVALUAR</button>
          </div>
          <div className="flex  m-4 p-4   rounded-3xl bg-orange text-center justify-center ">
            <button className="text-white ">CONSULTAR EVALUCIONES</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
