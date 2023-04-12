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
    <div className="">
      <div className="">
        <img src="" alt="" className="" />
      </div>
      <div>
        <p className="">
          ¡Accede a CodeReview y comienza tu evaluación!
        </p>
      </div>
      <div className="">
        <div className="">
          <h2 className="">Login</h2>
          <form onSubmit={handleSubmit} action="/api/login">
            <div className="">
              <label
                htmlFor="email"
                className=""
              >
                Correo electrónico:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=""
              />
            </div>
            <div className="">
              <label
                htmlFor="password"
                className=""
              >
                Contraseña:
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className=""
                />
                <button
                  className=""
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className=""
            >
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
