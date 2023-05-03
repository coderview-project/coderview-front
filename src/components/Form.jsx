import { useState } from "react";
import { evaluationHandler } from "../handler/evaluationHandler";
import ProjectManagement from "./ProjectManagement";
import FunctionalTechnical from "./FunctionalTechnical";
import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
import Architecture from "./Architecture";
import QA from "./QA";
import  '../Style/RangeSlider.css'
import { useNavigate } from "react-router-dom";



function Form() {
 
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        projectM: 0,
        funcTech1: 0,
        funcTech2: 0,
        funcTech3: 0,
        front1: 0,
        front2: 0,
        back1: 0, 
        back2: 0,
        archit: 0,
        qa1: 0,
        qa2: 0, 
        qa3: 0
    });
    const navigate = useNavigate();
    const [evaluatorId, setEvaluatorId] = useState(JSON.parse(localStorage.getItem('userData')).item3)
    const [evaluateeId, setEvaluateeId] = useState(JSON.parse(localStorage.getItem('userData')).item3)

  const FormSections = [
    "Sobre la gestión de proyectos",
    "En cuanto a lo funcional y técnico ",
    "Concretamente en Front-End",
    "Concretamente en Back-end",
    "Sobre arquitectura",
    "En cuanto al QA",
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
    } else if (page === 3) {
      return <BackEnd formData={formData} setFormData={setFormData} />;
    } else if (page === 4) {
      return <Architecture formData={formData} setFormData={setFormData} />;
    } else if (page === 5) {
      return <QA formData={formData} setFormData={setFormData} />;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newEvaluation = { formData, evaluatorId, evaluateeId };
    evaluationHandler.addEvaluation(newEvaluation);
    navigate("/LoggedViewTest");
    // incluir navigate("/UserDashboard")
  };

  return (
    <>
      <div className="flex flex-row justify-center font-poppins">
        <header className="flex flex-col  h-40 bg-white justify-center items-center">
          <img
            src="src\components\assets\CodeRview negro.png"
            alt="logo"
            className="h-20"
          />
          <p className="pb-2 text-orange text-xs"> Powered by Factoría F5</p>
          <h2 className="text-center text-3xl">
            {" "}
            Auto Evaluación
          </h2>
        </header>
      </div>
    
      <div className="flex flex-col font-poppins     ">
        <div className=" flex flex-row " id="evaluation">
          <div
            className="progress-bar bg-gradient-to-r from-salmon ..."
            style={{
              width:
                page === 0
                  ? "16.6%"
                  : page === 1
                  ? "33.2%"
                  : page === 2
                  ? "49.8%"
                  : page === 3
                  ? "66.4%"
                  : page === 4
                  ? "83%"
                  : "100%",
              height: 20,
              backgroundColor: "#FF4700",
              borderRadius: 10,
            }}
          >
            {" "}
          </div>
        </div>
        <div className=" contenainer  flex-root flex-col h-screen">
            <div> 
          <div className="flex-col text-2xl text-center  font-bold p-8 font-poppins">
            {" "}
            {FormSections[page]}
          </div>
          <div className="flex-col text-center text-xl  font-medium font-poppins">
            {" "}
            {PageDisplay()}
          </div>
          <div className="flex flex-row justify-center items-center font-poppins space-x-4 m-4 p-4 h-full">
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
            <button
              className=" flex flex-row bg-orange  w-16 h-16 rounded-full text-white text-bold justify-center items-center "
              disabled={page != 5} 
              onClick={handleSubmit}
            >
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
      </div>     
     
    </>
    

   

    
  );
}

export default Form;
