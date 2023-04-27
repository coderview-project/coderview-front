
function FunctionalTechnical({formData, setFormData}) {
    return(
        <>
        
        <label> ¿Cómo de capaz eres de conceptualizar de manera funcional un proyecto digital? </label>
        <input type="range" id="evaluation" name="evaluation"
         min="0" max="6" value={formData.funcTech1} onChange={(event) => setFormData({...formData, funcTech1: event.target.value})}/>
        <label> ¿Cómo de capaz eres de diseñar los procesos lógicos necesarios para un proyecto digital? </label>
        <input type="range" id="evaluation" name="evaluation"
         min="0" max="6" value={formData.funcTech2} onChange={(event) => setFormData({...formData, funcTech2: event.target.value})}/>
        <label> ¿Y de explicar la solución adoptada y presentar el trabajo realziado sintetizando sus planteamientos y resultados? </label>
        <input type="range" id="evaluation" name="evaluation"
         min="0" max="6" value={formData.funcTech3} onChange={(event) => setFormData({...formData, funcTech3: event.target.value})}/>
        </>
    )
}

export default FunctionalTechnical; 