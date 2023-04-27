function FrontEnd({formData, setFormData}) {
    return(
        <>
               
        <label className="flex flex-col justify-center items-center"> ¿Cómo de capaz eres de crear una UI web estática y adaptable? </label>
        <input type="range" id="evaluation" name="evaluation"
         min="0" max="6" value={formData.front1} onChange={(event) => setFormData({...formData, front1: event.target.value})}/>
        <label className="flex flex-col"> ¿Y de crear una UI web dinámica y adaptable? </label>
        <input  type="range" id="evaluation" name="evaluation"
         min="0" max="6" value={formData.front2} onChange={(event) => setFormData({...formData, front2: event.target.value})}/>
       
        
        </>

    )
}

export default FrontEnd; 