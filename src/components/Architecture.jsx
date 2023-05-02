import '../Style/RangeSlider.css'
import RangeSlider1 from '../assets/RangeSlider1.png'

function Architecture({formData, setFormData}) {
    return(
        <>
        <div >
        <label className="flex flex-col justify-center items-center mt-4"> ¿Cómo de capaz eres de implementar arquitecturas web escalables? </label>
        <div className='image'>
         <img src={RangeSlider1}/>
        </div>
        <input  className="RangeSlider" type="range" id="evaluation" name="evaluation"
         min="0" max="6" value={formData.archit} onChange={(event) => setFormData({...formData, archit: event.target.value})}/>
       </div>
        </>

)}

export default Architecture; 