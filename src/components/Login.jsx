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
    {/*try {
      const response = await axios.post("/api/login", { email, password });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    } */}
  };


    return (
        <div className="flex flex-row ">
            <div className="">
                <div>
                    <img src="src/assets/CodeRview negro.png" alt="Logo" className='h-full w-full bg-contain'/>
                </div>
                <div className='rounder-sm'>
                    <h2 className='' >
                        ¡Accede a CodeRview y empieza tu evaluación!
                    </h2>
                </div>
                <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                    <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                        <h1 className="w-max justify-center px-4 py-2 tracking-wide text-black bg-orange rounded-md font-[rubik]">
                            Login
                        </h1>
                        <form 
                        className="mt-6" 
                        onSubmit={handleSubmit} 
                        action="">
                            <div className="mb-2">
                                <label 
                                htmlFor="email" 
                                className="block text-sm font-semibold text-gray-800">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    placeholder='Escriba su Email'
                                />
                            </div>
                            <div className="mb-2">
                                <label 
                                htmlFor="password" 
                                className="block text-sm font-semibold text-gray-800">
                                    Contraseña
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="pasword"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    placeholder='Escriba su Password'
                                />
                            </div>
                            <a
                                href="#"
                                className="text-xs text-purple-600 hover:underline"
                            >
                                ¿Olvidaste tu contraseña?
                            </a>
                            <div className="mt-6">
                                <button 
                                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-orange rounded-md hover:bg-salmon focus:outline-none focus:bg-orange"
                                type="botton"
                                onClick={() => setShowPassword(!showPassword)} > {showPassword ? <AiOutlineEyeInvisible/> :  <AiOutlineEye/>}
                                </button>
                            </div>
                            <div>
                              <button
                              type="submit"
                              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-orange rounded-md hover:bg-salmon focus:outline-none focus:bg-orange"
                              >
                                Iniciar Sesión
                              </button>
                            </div>
                        </form>

                        <p className="mt-8 text-xs font-light text-center text-gray-700">
                            {" "}
                            ¿No tienes una cuenta?{" "}
                            <a
                                href="#"
                                className="font-medium text-purple-600 hover:underline"
                            >
                                Regístrate
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
