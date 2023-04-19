// import { useState } from 'react'
import './App.css'
import Footer from './assets/components/Footer'
import {Assessment} from './components/Assessment'
import Navb from '../src/components/Navb'
import  Range  from './components/Range'
import SliderComponent from './components/Slider'
import React,{useState} from 'react'

function App() {
  const [value,setValue]=useState(50);

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <div>
      {/* <Navb />  */}
      {/* <Assessment />  */}
     <Range/>
     
     {/* <SliderComponent value={value} 
     handleChange={handleChange} 
     min={0} 
     max={7} 
     step={1}/>
      <h2>{value}</h2> */}
      {/* <Footer /> */}
    </div>
  )
}

export default App
