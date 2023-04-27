function QA({formData, setFormData}) {

    return(
        <>
         <label> ¿Qué capaz eres de implementar prácticas y tecnologías para la gestión de versiones? </label>
        <input type="range" id="evaluation" name="evaluation"
         min="0" max="6" value={formData.qa1} onChange={(event) => setFormData({...formData, qa1: event.target.value})}/>
         <label> ¿Cómo de capaz eres de implementar un código limpio y escalable? </label>
        <input type="range" id="evaluation" name="evaluation"
         min="0" max="6" value={formData.qa2} onChange={(event) => setFormData({...formData, qa2: event.target.value})}/>
        <label> ¿Y de implementar prácticas de QA para el aseguramiento y control de la calidad de una web? </label>
        <input type="range" id="evaluation" name="evaluation"
         min="0" max="6" value={formData.qa3} onChange={(event) => setFormData({...formData, qa3: event.target.value})}/>
        </>
    )
}

export default QA; 