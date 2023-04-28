function Architecture({formData, setFormData}) {
    return(
        <>
        <div className="flex flex-col justify-center items-center mt-4">
        <label> ¿Cómo de capaz eres de implementar arquitecturas web escalables? </label>
        <input  className="p-4" type="range" id="evaluation" name="evaluation"
         min="0" max="6" value={formData.archit} onChange={(event) => setFormData({...formData, archit: event.target.value})}/>
       </div>
        </>

)}

export default Architecture; 