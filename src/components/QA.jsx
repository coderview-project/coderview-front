function QA({formData, setFormData}) {

    return(
        <>
        <div className="flex flex-col justify-center items-center mt-4">
         <label > ¿Qué capaz eres de implementar prácticas y tecnologías para la gestión de versiones? </label>
        <input className="p-4" type="range" id="evaluation" name="evaluation"
         min="0" max="6" value={formData.qa1} onChange={(event) => setFormData({...formData, qa1: event.target.value})}/>
         <label > ¿Cómo de capaz eres de implementar un código limpio y escalable? </label>
        <input className="p-4" type="range" id="evaluation" name="evaluation"
         min="0" max="6" value={formData.qa2} onChange={(event) => setFormData({...formData, qa2: event.target.value})}/>
        <label> ¿Y de implementar prácticas de QA para el aseguramiento y control de la calidad de una web? </label>
        <input className="p-4" type="range" id="evaluation" name="evaluation"
         min="0" max="6" value={formData.qa3} onChange={(event) => setFormData({...formData, qa3: event.target.value})}/>
       </div>
        </>
    )
}

export default QA; 