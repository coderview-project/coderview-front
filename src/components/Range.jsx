import '../Style/Range.css'
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function Range(){
    
    const [data,setData] = useState(0)
    const [emoji,setEmoji] = useState('')
   
    useEffect(()=>{
        if(data == 0){setEmoji("😮")}else if(data == 1){setEmoji("😔")}else if(data == 2){     setEmoji("😐")}else if(data == 3){setEmoji("🙂")}else if(data == 4){setEmoji("😉")
        }else if(data == 5){setEmoji("😁")}else if(data == 6){setEmoji("🤩")}else if(data == 7){   setEmoji("😎")}
    },[data])
    return(
        <form>
        <div className='p-30 '>
            <h1 className='text-7xl  p-5'>{emoji}</h1>
            <input className={data>50?'heigh':'less' } type="range" min="0" max="7" step="1" value={data} onChange={(e)=>setData(e.target.value)} />
            <h1 className='text-2xl px-7'>{data}</h1>

        </div>
        
        <button className='px-7 p-5 border-black' type="submit">Enviar</button>
        </form>
    
    );
    
}

export default Range;