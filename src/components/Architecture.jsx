function Architecture({formData, setFormData}) {
    return(
        <>
        <label> ¿Cómo de capaz eres de implementar arquitecturas web escalables? </label>
        <input type="range" id="evaluation" name="evaluation"
         min="0" max="6" value={formData.archit} onChange={(event) => setFormData({...formData, archit: event.target.value})}/>
        </>

)}

export default Architecture; 