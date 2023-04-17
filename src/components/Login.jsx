import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
//import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      alert("El correo electrónico no es válido");
      return;
    }
    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    }
    {
      /*try {
      const response = await axios.post("/api/login", { email, password });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    } */
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center drop-shadow-lg">
    <div className="flex flex-col justify-center items-center sm:w-1/2">
      <img
        src="src/components/assets/CodeRview negro.png"
        alt="Logo"
        className="h-40 w-40 p-2 justify-center"
      />
      <h1 className="text-orange text-2xl text-center font-poppins">
        Powered by Factoría F5
      </h1>
      <div className="mt-8 p-4 opacity-50 bg-salmon rounded-lg">
        <h2 className="text-white text-center text-2xl font-bold font-poppins font-medium">
          ¡Accede a CodeRview y empieza tu evaluación!
        </h2>
      </div>
    </div>
    <div className="flex p-4 sm:p-20 m-4 justify-center sm:w-1/2">
      <div className="bg-salmon rounded-md m-6 p-6 lg:w-max place-items-center opacity-80">
        <h1 className="text-white text-center text-2xl bg-orange rounded-lg mt-4 px-4 py-2">
          INICIO SESION
        </h1>
        <form onSubmit={handleSubmit} action="">
          <div className="mb-2 rounder-lg">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800 mt-5"
            ></label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-black border rounded-md focus:border-orange focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Email"
              alt="Email"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            ></label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Contraseña"
              alt="Contraseña"
            />
          </div>
  
          <button
            type="submit"
            className="w-full mt-4 px-4 py-2 tracking-wide text-white text-xl transition-colors duration-200 transform bg-orange rounded-md hover:bg-orange focus:outline-none focus:bg-orange"
          >
            ENVIAR
          </button>
        </form>
  
        <p className="mt-8 text-xs font-light text-center text-gray-700">
       
            ¿No tienes una cuenta?{" "}
            <a href="#" className="font-medium text-black hover:underline">
              Regístrate
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
