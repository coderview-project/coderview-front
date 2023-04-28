import { useState } from "react";
import ProjectManagement from "./ProjectManagement";
import FunctionalTechnical from "./FunctionalTechnical";
import FrontEnd from "./FrontEnd";

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    projectQ: 0,
    funcTech1: 0,
    funcTech2: 0,
    funcTech3: 0,
    front1: 0,
    front2: 0,
  });
  const FormSections = [
    "Sobre la gestión de proyectos",
    "En cuanto a lo funcional y técnico ",
    "Concretamente en Front-End",
  ];
  const PageDisplay = () => {
    if (page === 0) {
      console.log(formData);
      return (
        <ProjectManagement formData={formData} setFormData={setFormData} />
      );
    } else if (page === 1) {
      console.log(formData);
      return (
        <FunctionalTechnical formData={formData} setFormData={setFormData} />
      );
    } else if (page === 2) {
      console.log(formData);
      return <FrontEnd formData={formData} setFormData={setFormData} />;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // let newEvaluation = {formData};
    // evaluationHandler.postEvaluation(newEvaluation);
    console.log("Esto viene del componente form", formData);
    alert("Evaluación enviada");
    // incluir navigate("/UserDashboard")
  };

  return (
    <>
      <div className="font-poppins">
        <header className="flex flex-col w-full h-40 bg-white justify-center items-center  ">
          <img
            src="src\components\assets\CodeRview negro.png"
            alt="logo"
            className="h-20"
          />
          <p className="pb-2 text-orange text-xs">Powered by Factoría F5</p>
          <hr className="border-salmon border-4 w-screen"/> 
        </header>
      </div>

      <div className="flex flex-col h-screen  bg-gradient-to-t from-salmon ...  p-12 ">
      
        <div
          className=" flex flex-row  "
          id="evaluation"
        >
          <div
            className="progress-bar"
            style={{
              width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%",
              height: 20,
              backgroundColor: "#FF4500",
              borderRadius: 10,
            }}
          >
            {" "}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="form-container">
            <div className="header flex-col text-lg text-center p-4 m-4 font-poppins ">
              {" "}
              {FormSections[page]}
            </div>
            <div className="body flex-col  text-center text-lg text-black font-poppins ">
              {" "}
              {PageDisplay()}
            </div>
           
          </div>
        </div>
        <div className="flex flex-row justify-center items-center font-poppins space-x-4 m-4 p-4">
          <div>
            <button
              className="flex flex-row bg-orange  rounded-full text-white text-xl justify-center items-center font-semibold "
              disabled={page == 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-16 h-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
          <div className="flex space-x-4 ">
            <button
              className="flex flex-row bg-orange  rounded-full text-white text-xl justify-center items-center font-semibold"
              disabled={page == FormSections.length - 1}
              onClick={() => {
                setPage((currPage) => currPage + 1);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-16 h-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            <button className=" flex flex-row bg-orange  w-16 h-16 rounded-full text-white text-bold justify-center items-center " onClick={handleSubmit}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
