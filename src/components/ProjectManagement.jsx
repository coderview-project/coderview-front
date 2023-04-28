
function ProjectManagement({formData, setFormData}) {
    return(
        <>
        
        <label className="flex flex-col justify-center items-center mt-4"> ¿Cómo de capaz eres de planificar y gestionar un proyecto digital a través de marcos de trabajo? </label>
        <input className="p-4" type="range" id="evaluation" name="evaluation"
         min="0" max="6" value={formData.projectM} onChange={(event) => setFormData({...formData, projectM: event.target.value})}/>
        
        </>
    )
}

export default ProjectManagement; 