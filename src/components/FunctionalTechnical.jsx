import RangeSlider from '../Style/RangeSlider.css'
import RangeSlider1 from '../assets/RangeSlider1.png'

function FunctionalTechnical({formData, setFormData}) {
    return(
        <>
        <div  className="flex flex-col justify-center items-center mt-4">
        <label> ¿Cómo de capaz eres de conceptualizar de manera funcional un proyecto digital? </label>
        <div className='image'>
         <img src={RangeSlider1}/>
        </div>
        <input className="p-4" type="range" id="evaluation" name="evaluation"
         min="0" max="6" value={formData.funcTech1} onChange={(event) => setFormData({...formData, funcTech1: event.target.value})}/>
        <label > ¿Cómo de capaz eres de diseñar los procesos lógicos necesarios para un proyecto digital? </label>
        <div className='image'>
         <img src={RangeSlider1}/>
        </div>
        <input className="p-4" type="range" id="evaluation" name="evaluation"
         min="0" max="6" value={formData.funcTech2} onChange={(event) => setFormData({...formData, funcTech2: event.target.value})}/>
        <label > ¿Y de explicar la solución adoptada y presentar el trabajo realizado sintetizando sus planteamientos y resultados? </label>
        <div className='image'>
         <img src={RangeSlider1}/>
        </div>
        <input className="p-4" type="range" id="evaluation" name="evaluation"
         min="0" max="6" value={formData.funcTech3} onChange={(event) => setFormData({...formData, funcTech3: event.target.value})}/>
        </div>
        </>
    )
}

export default FunctionalTechnical; 