import Range from "./Range";

function ProjectManagement({formData, setFormData}) {
    return(
        <>
        <label className=""> ¿Qué tan capaz eres de planificar y gestionar un proyecto digital a través de marcos de trabajo? </label> 
        <div className="">
        <Range formData={formData} setFormData={setFormData} question="projectQ" />

        </div>
        
        </>
    )
}
export default ProjectManagement;