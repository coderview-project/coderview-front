import {useState} from 'react'
import { evaluationHandler } from '../handler/evaluationHandler';
import ProjectManagement from './ProjectManagement';
import FunctionalTechnical from './FunctionalTechnical';
import FrontEnd from './FrontEnd'
import BackEnd from './BackEnd'
import Architecture from './Architecture'
import QA from './QA';

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
    const [evaluatorId, setEvaluatorId] = useState(JSON.parse(localStorage.getItem('userData')).item3)
    const [evaluateeId, setEvaluateeId] = useState(JSON.parse(localStorage.getItem('userData')).item3)



    const FormSections = ["Sobre la gestión de proyectos", "En cuanto a lo funcional y técnico " , "Concretamente en Front-End", "Concretamente en Back-end", "Sobre arquitectura", "En cuanto al QA"]
    const PageDisplay = () => {
        if (page === 0){
            console.log(formData)
            return <ProjectManagement formData={formData} setFormData={setFormData}/> 
        } else if (page === 1) {
            console.log(formData)
            return <FunctionalTechnical formData={formData} setFormData={setFormData}/>
        } else if (page === 2) {
            console.log(formData)
            return <FrontEnd formData={formData} setFormData={setFormData}/>
        } else if (page === 3) {
            return <BackEnd formData={formData} setFormData={setFormData}/> 
        } else if (page === 4) {
            return <Architecture formData={formData} setFormData={setFormData}/> 
        } else if (page === 5) {
            return <QA formData={formData} setFormData={setFormData} /> 
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let newEvaluation = {formData, evaluatorId, evaluateeId}; 
        evaluationHandler.addEvaluation(newEvaluation);
        console.log("Esto viene del componente form", formData, evaluatorId, evaluateeId);
        // incluir navigate("/UserDashboard")
    }

  
    return (
        <>
        <div className="form w-screen" id="evaluation">  
            <div className="progress-bar" style={{width: page === 0 ? "16.6%" : page === 1 ? "33.2%" : page === 2 ? "49.8%" : page === 3 ? "66.4%" : page === 4 ? "83%" : "100%", height: 20, backgroundColor: "#FF4700", borderRadius: 10
            }}> </div>
            
        <div> 
        <div> {FormSections[page]}</div>
        <div> {PageDisplay()}</div>
        <button 
        disabled={page == 0}
        onClick={() => {setPage((currPage) => currPage - 1)}}> Prev </button>
        <button 
         disabled={page == FormSections.length -1}
        onClick={() => {setPage((currPage) => currPage + 1)}}> Next </button>
        <button  onClick={handleSubmit}> Enviar </button>
            
        </div>
        </div>
        </>
    )
}

export default Form;