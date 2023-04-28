function FrontEnd({formData, setFormData}) {
    return(
        <>
        <div className="flex flex-col justify-center items-center mt-4">     
        <label > ¿Cómo de capaz eres de crear una UI web estática y adaptable? </label>
        <input className="p-2" type="range" id="evaluation" name="evaluation"
         min="0" max="6" value={formData.front1} onChange={(event) => setFormData({...formData, front1: event.target.value})}/>
        <label > ¿Y de crear una UI web dinámica y adaptable? </label>
        <input className="p-2" type="range" id="evaluation" name="evaluation"
         min="0" max="6" value={formData.front2} onChange={(event) => setFormData({...formData, front2: event.target.value})}/>
         </div>       
        </>
    )
}
export default FrontEnd; 