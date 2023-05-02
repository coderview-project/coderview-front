import '../Style/RangeSlider.css'
import RangeSlider1 from '../assets/RangeSlider1.png'

function FunctionalTechnical({formData, setFormData}) {
    return(
        <>
        <label className="flex flex-col justify-center items-center mt-4"> ¿Cómo de capaz eres de conceptualizar de manera funcional un proyecto digital? </label>
        <div className='image'>
         <img src={RangeSlider1}/>
        </div>
        <input className="RangeSlider" type="range" id="evaluation" name="evaluation"
         min="0" max="6" value={formData.funcTech1} onChange={(event) => setFormData({...formData, funcTech1: event.target.value})}/>
        <label className="flex flex-col justify-center items-center mt-4" > ¿Cómo de capaz eres de diseñar los procesos lógicos necesarios para un proyecto digital? </label>
        <div className='image'>
         <img src={RangeSlider1}/>
        </div>
        <input className="RangeSlider" type="range" id="evaluation" name="evaluation"
         min="0" max="6" value={formData.funcTech2} onChange={(event) => setFormData({...formData, funcTech2: event.target.value})}/>
        <label className="flex flex-col justify-center items-center mt-4" > ¿Y de explicar la solución adoptada y presentar el trabajo realizado sintetizando sus planteamientos y resultados? </label>
        <div className='image'>
         <img src={RangeSlider1}/>
        </div>
        <input className="RangeSlider" type="range" id="evaluation" name="evaluation"
         min="0" max="6" value={formData.funcTech3} onChange={(event) => setFormData({...formData, funcTech3: event.target.value})}/>
        </>
    )
}

export default FunctionalTechnical; 