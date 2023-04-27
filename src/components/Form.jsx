import {useState} from 'react'
import ProjectManagement from './ProjectManagement';
import FunctionalTechnical from './FuntionalTechnical';
import FrontEnd from './FrontEnd';
import Range from './Range';


function Form() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        projectQ: 3,
        funcTech1: null,
        funcTech2: null,
        funcTech3: null,
        front1: null,
        front2: null
    });
    const FormSections = ["Sobre la gestión de proyectos", "En cuanto a lo funcional y técnico " , "Concretamente en Front-End"]
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
        }}
    const handleSubmit = (event) => {
        event.preventDefault();
        // let newEvaluation = {formData};
        // evaluationHandler.postEvaluation(newEvaluation);
        console.log("Esto viene del componente form", formData);
        alert("Evaluación enviada")
        // incluir navigate("/UserDashboard")
    }
    return (
        <>
        <div className="form w-screen" id="evaluation">
            <div className="progress-bar" style={{width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%", height: 20, backgroundColor: "#FF4500", borderRadius: 10
            }}> </div>
        <div className="form-container">
        <div className='header'> {FormSections[page]}</div>
        <div className='body'> {PageDisplay()}</div>
        <div>footer</div>
        <button
            disabled={page == 0}
        onClick={() => {setPage((currPage) => currPage - 1)}}> Prev </button>
        <button
             disabled={page == FormSections.length -1}
        onClick={() => {setPage((currPage) => currPage + 1)}}> Next </button>
        <button className='p-2 bg-orange-600' onClick={handleSubmit}> Enviar </button>
        </div>
        </div>
        </>
    )
}
export default Form;