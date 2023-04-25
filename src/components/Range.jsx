import '../Style/Range.css'
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import WateringCan from "../assets/WateringCan.png"
import Garden from "../assets/Garden.png"

function Range(){
    
   const [sliderValue, setSliderValue] = useState(3);
              
    function customRangerSlider(event) {
        let sliderElement = event.target.parentElement;
        let slider = sliderElement.querySelector(".slider");
        let sliderThumb = sliderElement.querySelector('.slider-thumb');
        
        let progressElement = sliderElement.querySelector(".progress");
        const value = (slider.value/slider.max) * 100;
        console.log(value);
        progressElement.style.width = value;
        sliderThumb.style.cssText = `left: ${value}%; transform:translate(-${value}%, -50%);`
        setSliderValue(Math.round((value / 100) * 6));             
    }

    return(
    <div className="body"> 
        <div className="range-slider">          
            <input onChange={customRangerSlider} type="range" min={0} max={6}  value={sliderValue} className= "slider"/> 
            <img className="rangeimg" src={Garden} alt=""/>             
                <div className="slider-thumb">                      
                    <div className="tooltip">
                        <div className="tooltip-img">
                            <img 
                            src={WateringCan} alt="" />
                        </div>
                        <p>{sliderValue}</p>
                    </div>                    
                </div>  
                    <div className="progress" >
                   </div>                    
        </div>
    </div> 
    );  
}

export default Range;