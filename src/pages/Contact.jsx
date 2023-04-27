import React, { useState } from "react";
import Navb from "../components/Navb";
import Footer from "../components/Footer";



function Contact() {
  const [message, setMessage] = useState("");
  

  const handleTextareaChange = (event) => {
    setMessage(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const email = "contact@coderview.com";
    const subject = "Query form";
    const body = message;
    const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
    setModalIsOpen(true);
    window.location.reload();
  };

  return (
    <>
    <Navb/>
    <div className="w-screen h-screen bg-gradient-to-t from-orange ...">
    <h2 className="font-poppins flex justify-center text-2xl pt-72 m-5  w-full"> Contacta con el equipo de CodeRview</h2>
      <form className="form flex justify-center flex-col" onSubmit={handleFormSubmit}>
        <label className="flex justify-center">
          <textarea
            value={message}
            className="mt-5 border-white h-48 w-1/2 rounded-md"
            onChange={handleTextareaChange}
            placeholder="    Escriba su mensaje aquí "
          />
        </label>
        <button className="uppercase bg-white hover:border-solid hover:border-2 hover:border-black hover:text-orange p-3 rounded-md w-72 flex justify-center self-center mt-5" id="btn-ad" type="submit">
        Enviar
        </button>
      </form>
      <h3 className="font-poppins p-3 mt-6  flex justify-center w-full rounded-md hover:underline text-sm"> Al hacer click en ENVIAR se te redirigirá a tu servicio de e-mail </h3>
    </div>
    <Footer/>
    </>   
  );
}

export default Contact;