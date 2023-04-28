
function BackEnd({formData, setFormData}) {
    return(
        <>
        <div className="flex flex-col justify-center items-center">
        <label  > ¿Qué capaz eres de gestionar las estructuras, el flujo y el almacenamiento de datos de una web? </label>
        <input className="p-2" type="range" id="evaluation" name="evaluation"
         min="0" max="6" value={formData.back1} onChange={(event) => setFormData({...formData, back1: event.target.value})}/>
        <label> ¿Y de de desarrollar algoritmos que ejecutan procesos lógicos? </label>
        <input className="p-2" type="range" id="evaluation" name="evaluation"
         min="0" max="6" value={formData.back2} onChange={(event) => setFormData({...formData, back2: event.target.value})}/>
       </div>
        </>
    )
}

export default BackEnd; 