import '../Style/RangeSlider.css'
import RangeSlider1 from '../assets/RangeSlider1.png'

function FrontEnd({formData, setFormData}) {
    return(
        <>
        <div className="flex flex-col justify-center items-center mt-4">     
        <label > ¿Cómo de capaz eres de crear una UI web estática y adaptable? </label>
        <div className='image'>
         <img src={RangeSlider1}/>
        </div>
        <input className="RangeSlider" type="range" id="evaluation" name="evaluation"
         min="0" max="6" value={formData.front1} onChange={(event) => setFormData({...formData, front1: event.target.value})}/>
        <label > ¿Y de crear una UI web dinámica y adaptable? </label>
        <div className='image'>
         <img src={RangeSlider1}/>
        </div>
        <input className="RangeSlider" type="range" id="evaluation" name="evaluation"
         min="0" max="6" value={formData.front2} onChange={(event) => setFormData({...formData, front2: event.target.value})}/>
         </div>       
        </>
    )
}
export default FrontEnd; 