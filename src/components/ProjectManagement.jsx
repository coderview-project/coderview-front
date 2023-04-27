
function ProjectManagement({formData, setFormData}) {
    return(
        <>
        
        <label> ¿Cómo de capaz eres de planificar y gestionar un proyecto digital a través de marcos de trabajo? </label>
        <input type="range" id="evaluation" name="evaluation"
         min="0" max="6" value={formData.projectQ} onChange={(event) => setFormData({...formData, projectQ: event.target.value})}/>
        
        </>
    )
}

export default ProjectManagement; 