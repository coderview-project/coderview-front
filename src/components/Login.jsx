import React, { useState } from "react";
import Footer from "./Footer";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleUserNameChange = (event) => {
    let userNameInput = event.target.value;
    setUserName(userNameInput);
  };

  const handlePasswordChange = (event) => {
    let passwordInput = event.target.value;
    setLastName(passwordInput);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    }
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-center items-center bg-gradient-to-t from-orange ... ">
        <div className="flex flex-col justify-center items-center sm: w-1/2">
          <img
            src="src/components/assets/CodeRview negro.png"
            alt="Logo"
            className="h-40 w-40 p-2 justify-center"
          />
          <h1 className="text-white text-2xl text-center font-poppins">
            Powered by Factoría F5
          </h1>
          <div className="mt-8 p-4 bg-white rounded-lg">
            <h2 className="text-black text-center text-2xl  font-poppins">
              ¡Accede a CodeRview y empieza tu evaluación!
            </h2>
          </div>
        </div>
        <div className="flex p-4 sm:p-20 m-4 justify-center sm:w-1/2">
          <div className="bg-white rounded-md m-6 p-6 lg:w-max place-items-center opacity-80">
            <h1 className="text-white text-center text-2xl bg-orange rounded-lg mt-4 px-4 py-2">
              INICIA SESION
            </h1>
            <form onSubmit={handleSubmit} action="">
              <div className="mb-2 rounder-lg">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-grey mt-5"
                ></label>
                <input
                  type="userName"
                  id="userName"
                  name="userName"
                  onChange={handleUserNameChange}
                  className="block w-full px-4 py-2 mt-2 text-black border rounded-md focus:border-orange focus:ring-orange focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Nombre de usuario"
                  alt="userName"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-grey"
                ></label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={handlePasswordChange}
                  className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-orange focus:ring-orange focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Contraseña"
                  alt="Contraseña"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-4 px-4 py-2 tracking-wide text-white text-xl uppercase transition-colors duration-200 transform bg-orange rounded-md hover:border-solid hover:border-black hover:border-2 focus:outline-none focus:bg-orange"
                alt="button"
              >
                Enviar
              </button>
            </form>

            <p className="mt-8 text-xs font-light text-center text-gray-700">

              ¿No tienes una cuenta?
              <a href="/Register" className="font-medium text-black hover:underline">
                Regístrate
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
