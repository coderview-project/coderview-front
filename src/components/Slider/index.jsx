function SliderComponent({value, handleChange, min, max,step}){
    return (
     <div>
        
            <input type="range" 
            defaultValue={value} 
            onChange={handleChange}
            min={min}
            max={max}
            step={step}
            >
            {/* <button type="submit">Enviar</button> */}

            </input>

            
        
        </div>
    );
}

export default SliderComponent